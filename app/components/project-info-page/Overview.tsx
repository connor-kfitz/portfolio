import { parseTextToJSX } from "../../lib/parseTextToJSX";

interface OverviewProps {
  overview?: string[];
}

export default function Overview({ overview }: OverviewProps) {
  
  if (!overview) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
      {Array.isArray(overview) ? (
        <div>
          {overview.map((line, idx) => (
            <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{parseTextToJSX(line)}</p>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground leading-relaxed">{parseTextToJSX(overview)}</p>
      )}
    </section>
  );
}
