import path from 'path';

import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'recipes.json');
    const raw = await fs.readFile(filePath, 'utf8');
    const recipes = JSON.parse(raw);
    return NextResponse.json(recipes);
  } catch {
    return NextResponse.json({ error: 'Recipes not found' }, { status: 404 });
  }
}
