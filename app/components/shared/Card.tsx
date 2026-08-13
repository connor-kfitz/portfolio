interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <article className="group bg-card rounded-2xl p-8 card-hover border border-border">
      <div className="flex flex-col h-full">
        {children}
      </div>
    </article>
  );
}
