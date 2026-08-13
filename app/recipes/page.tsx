import ListPageLayout from "../components/shared/ListPageLayout";
import CardGrid from "../components/shared/CardGrid";
import RecipeCard from "../components/shared/RecipeCard";
import EmptyState from "../components/shared/EmptyState";

import { UtensilsCrossed } from "lucide-react";

export default async function RecipesPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/recipes`, {
    cache: 'no-store'
  });

  if (!res.ok) throw new Error("Failed to load recipes");

  const recipes: Recipe[] = await res.json();

  return (
    <ListPageLayout
      title="Recipes"
      description="A collection of recipes I have curated. Primarily inspired by the others I have found on the internet, but tweaked to my own preferences."
    >
      <CardGrid
        items={recipes}
        renderItem={(recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>}
        emptyState={<EmptyState icon={UtensilsCrossed} title="No recipes yet" message="Check back later."/>}
      />
    </ListPageLayout>
  );
}
