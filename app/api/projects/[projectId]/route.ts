import fs from "fs";
import path from "path";

import { NextResponse } from "next/server";

export async function GET(_req: Request, {params}: { params: Promise<{ projectId: string }> }) {
	try {
    const { projectId } = await params;
		const dataPath = path.resolve(process.cwd(), "public/data/projects.json");
		const raw = fs.readFileSync(dataPath, "utf8");
		const projects: Project[] = JSON.parse(raw);

		const project = projects.find((p) => p.id === projectId);
		if (!project) return NextResponse.json({ error: "Not Found" }, { status: 404 });

		return NextResponse.json(project);
	} catch (err) {
		console.error("Failed to read projects data", err);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
