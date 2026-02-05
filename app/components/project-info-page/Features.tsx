import { CheckCircle2 } from "lucide-react";

interface FeaturesProps {
  features?: string[];
}

export default function Features({ features }: FeaturesProps) {

  if (!features || features.length === 0) return null;
  
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
            <span className="text-card-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
