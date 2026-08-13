import Header from "../../components/recipe-info-page/Header";
import Ingredients from "../../components/recipe-info-page/Ingredients";
import Instructions from "../../components/recipe-info-page/Instructions";
import Images from "../../components/project-info-page/Images";
import BottomNav from "@/app/components/navigation/BottomNav";

import { notFound } from "next/navigation";

type RecipeInfoPageProps = {
  params: Promise<{ recipeId: string }>
}

export default async function RecipeInfoPage({ params }: RecipeInfoPageProps) {

  const { recipeId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/recipes/${recipeId}`);

  if (res.status === 404) return notFound();
  if (!res.ok) throw new Error("Failed to load recipe");

  const recipe: Recipe = await res.json();

  return (
    <main className="flex-1 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 pt-24">
        <Header recipe={recipe}/>
        <Images images={recipe.images}/>
        <Ingredients ingredients={recipe.ingredients}/>
        <Instructions instructions={recipe.instructions}/>
        <BottomNav href="/recipes" label="View All Recipes"/>
      </div>
    </main>
  );
}
