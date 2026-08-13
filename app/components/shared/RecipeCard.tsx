import Link from "next/link";
import Card from "./Card";

import { Clock, StickyNote } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
        {recipe.name}
      </h3>
      <p className="text-muted-foreground mb-6 flex-grow inline-flex items-center gap-2">
        <Clock className="w-4 h-4"/>
        Prep {recipe.prepTime} &middot; Cook {recipe.cookTime}
      </p>

      <div className="flex items-center flex-wrap gap-4">
        <Link
          href={`/recipes/${recipe.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <StickyNote className="w-4 h-4"/>
          View Recipe
        </Link>
      </div>
    </Card>
  );
}
