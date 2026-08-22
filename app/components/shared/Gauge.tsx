interface GaugeProps {
  value: string;
  label: string;
  tone?: "primary" | "accent" | "muted";
  size?: "md" | "sm";
}

const TONE_VAR: Record<NonNullable<GaugeProps["tone"]>, string> = {
  primary: "var(--color-primary)",
  accent: "var(--color-accent)",
  muted: "var(--color-muted-foreground)",
};

export default function Gauge({ value, label, tone = "primary", size = "md" }: GaugeProps) {
  const toneColor = TONE_VAR[tone];
  const dimension = size === "md" ? "w-24 h-24 sm:w-28 sm:h-28" : "w-16 h-16";
  const valueSize = size === "md" ? "text-2xl sm:text-3xl" : "text-base";

  return (
    <div className="animate-needle flex flex-col items-center gap-3">
      <div
        className={`relative ${dimension} rounded-full flex items-center justify-center shrink-0`}
        style={{
          background: "radial-gradient(circle at 50% 38%, hsl(220 18% 12%), hsl(220 22% 7%))",
          border: "1px solid var(--color-border)",
          boxShadow: `inset 0 1px 2px hsl(220 15% 30% / 0.5), inset 0 -6px 14px hsl(220 30% 2% / 0.6), 0 0 18px ${toneColor}1f`,
        }}
      >
        <span
          className="absolute top-2.5 w-1.5 h-1.5 rounded-full animate-glow-pulse"
          style={{ backgroundColor: toneColor, boxShadow: `0 0 6px ${toneColor}` }}
        />
        <span className={`font-mono font-semibold ${valueSize}`} style={{ color: toneColor }}>
          {value}
        </span>
      </div>
      <span className="placard-label text-center">{label}</span>
    </div>
  );
}
