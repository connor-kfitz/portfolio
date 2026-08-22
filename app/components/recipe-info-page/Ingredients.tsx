import { Circle } from "lucide-react";

interface IngredientsProps {
  ingredients?: string[];
}

export default function Ingredients({ ingredients }: IngredientsProps) {

  if (!ingredients || ingredients.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">Ingredients</h2>
      <ul className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
            <Circle className="w-2 h-2 mt-2 text-primary fill-primary flex-shrink-0"/>
            <span className="text-card-foreground">{ingredient}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
