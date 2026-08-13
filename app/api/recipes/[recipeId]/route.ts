import fs from "fs";
import path from "path";

import { NextResponse } from "next/server";

export async function GET(_req: Request, {params}: { params: Promise<{ recipeId: string }> }) {
	try {
    const { recipeId } = await params;
		const dataPath = path.resolve(process.cwd(), "public/data/recipes.json");
		const raw = fs.readFileSync(dataPath, "utf8");
		const recipes: Recipe[] = JSON.parse(raw);

		const recipe = recipes.find((r) => r.id === recipeId);
		if (!recipe) return NextResponse.json({ error: "Not Found" }, { status: 404 });

		return NextResponse.json(recipe);
	} catch (err) {
		console.error("Failed to read recipes data", err);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
