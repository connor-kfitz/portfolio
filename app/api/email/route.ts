import { Unosend } from "@unosend/node";
import { NextResponse } from "next/server";

const unosend = new Unosend(process.env.UNOSEND_API_KEY!);

export async function POST(req: Request) {
  const { to, subject, html } = await req.json();

  const { data, error } = await unosend.emails.send({
    from: "contact@connorkfitz.com",
    to,
    subject,
    html
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
