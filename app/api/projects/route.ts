import path from 'path';

import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'projects.json');
    const raw = await fs.readFile(filePath, 'utf8');
    const projects = JSON.parse(raw);
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json({ error: 'Projects not found' }, { status: 404 });
  }
}
