import { Unosend } from "@unosend/node";
import { NextResponse } from "next/server";

const unosend = new Unosend(process.env.UNOSEND_API_KEY!);

const TO_ADDRESS = "connorkfitzsimmons@gmail.com";
const FROM_ADDRESS = "contact@connorkfitz.com";

const MIN_FILL_TIME_MS = 3000;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recentSubmissions.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length >= RATE_LIMIT_MAX) {
    recentSubmissions.set(ip, hits);
    return true;
  }
  hits.push(now);
  recentSubmissions.set(ip, hits);
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, message, website, startedAt } = body as Record<string, unknown>;

  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  if (typeof startedAt !== "number" || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return NextResponse.json({ success: true });
  }

  if (
    typeof name !== "string" || !name.trim() || name.length > 100 ||
    typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 254 ||
    typeof message !== "string" || !message.trim() || message.length > 2000
  ) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

  const { data, error } = await unosend.emails.send({
    from: FROM_ADDRESS,
    to: TO_ADDRESS,
    subject: `Portfolio Contact Form Message from ${name.trim().replace(/[\r\n]+/g, " ")}`,
    html: `<p>Name: ${safeName}</p><p>Email: ${safeEmail}</p><p>Message:<br>${safeMessage}</p>`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
