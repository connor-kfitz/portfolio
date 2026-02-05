import { parseTextToJSX } from "../../lib/parseTextToJSX";

interface OutcomesProps {
  outcomes?: string[];
}

export default function Outcomes({ outcomes }: OutcomesProps) {

  if (!outcomes) return null;
  
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">Outcome & Results</h2>
      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        {Array.isArray(outcomes) ? (
          <div>
            {outcomes.map((line, idx) => (
              <p key={idx} className="text-foreground leading-relaxed mb-4">{parseTextToJSX(line)}</p>
            ))}
          </div>
        ) : (
          <p className="text-foreground leading-relaxed">{parseTextToJSX(outcomes)}</p>
        )}
      </div>
    </section>
  );
}
