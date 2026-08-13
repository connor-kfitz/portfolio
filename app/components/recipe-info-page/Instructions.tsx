interface InstructionsProps {
  instructions?: string[];
}

export default function Instructions({ instructions }: InstructionsProps) {

  if (!instructions || instructions.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">Instructions</h2>
      <ol className="space-y-4">
        {instructions.map((step, index) => (
          <li key={index} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </span>
            <span className="text-card-foreground leading-relaxed pt-1">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
