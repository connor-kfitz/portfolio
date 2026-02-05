import { parseTextToJSX } from "../../lib/parseTextToJSX";

interface ChallengesProps {
  challenges?: string[];
}

export default function Challenges({ challenges }: ChallengesProps) {
  
  if (!challenges) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">Challenges & Solutions</h2>
      <div className="bg-card rounded-xl p-6 border border-border">
        {Array.isArray(challenges) ? (
          <div>
            {challenges.map((line, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{parseTextToJSX(line)}</p>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground leading-relaxed">{parseTextToJSX(challenges)}</p>
        )}
      </div>
    </section>
  );
}
