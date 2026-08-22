interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <article className="group relative bg-card rounded-lg p-8 pt-9 card-hover border border-border overflow-hidden">
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/40 to-transparent"/>
      <div className="flex flex-col h-full">
        {children}
      </div>
    </article>
  );
}
