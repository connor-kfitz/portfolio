interface HeaderProps {
  recipe: Recipe;
}

export default function Header({ recipe }: HeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{recipe.name}</h1>
    </div>
  );
}
