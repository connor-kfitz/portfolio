interface CardGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  emptyState: React.ReactNode;
}

export default function CardGrid<T>({ items, renderItem, emptyState }: CardGridProps<T>) {
  
  if (items.length === 0) return emptyState;
  
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map(renderItem)}
    </div>
  );
}
