import Link from "next/link";

import { Fragment } from "react/jsx-runtime";

export function parseTextToJSX(text?: string | null) {
  if (!text) return null;

  const regex = /<Link\s+href=(?:"|')([^"']+)(?:"|')\s*>([\s\S]*?)(?:<\/Link>|<Link\/)\s*>?/gi;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const index = match.index;
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    const href = match[1];
    const label = match[2];

    parts.push(
      <Link key={parts.length} href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        {label}
      </Link>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (parts.length === 0) return text;

  return parts.map((p, i) => (typeof p === "string" ? <Fragment key={i}>{p}</Fragment> : <Fragment key={i}>{p}</Fragment>));
}
