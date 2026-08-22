interface TechnologiesProps {
  technologies?: string[];
}

export default function Technologies({ technologies }: TechnologiesProps) {

  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {technologies.map((tech) => (
        <span key={tech} className="px-3 py-1.5 font-mono text-xs bg-secondary text-secondary-foreground rounded-md border border-border">{tech}</span>
      ))}
    </div>
  );
}
