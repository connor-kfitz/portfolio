import { Code2, Database, Layout, Smartphone, Terminal, Palette } from 'lucide-react';

export const githubUrl = "https://github.com/connor-kfitz";

export const linkedinUrl = "https://www.linkedin.com/in/connor-fitzsimmons";

export const skills = [
  { name: "Frontend", icon: Layout, items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "SCSS"] },
  { name: "Backend", icon: Terminal, items: ["Node.js", "Python", "REST APIs", "GraphQL"] },
  { name: "Tools", icon: Code2, items: ["Git", "Docker", "Azure", "Vercel", "Postman", "AI"] },
  { name: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "SQLServer", "Firebase"] },
  { name: "Design", icon: Palette, items: ["Figma", "Adobe XD", "V0"] },
  { name: "Mobile", icon: Smartphone, items: ["Median"] }
];
