interface ListPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ListPageLayout({ title, description, children }: ListPageLayoutProps) {
  return (
    <main className="flex-1 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 pt-24">

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>

        {children}

      </div>
    </main>
  );
}
