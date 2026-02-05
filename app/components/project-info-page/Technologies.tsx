interface TechnologiesProps {
  technologies?: string[];
}

export default function Technologies({ technologies }: TechnologiesProps) {

  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {technologies.map((tech) => (
        <span key={tech} className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">{tech}</span>
      ))}
    </div>
  );
}
