import type { CSSProperties } from "react";

/**
 * Derives the full set of accent-dependent CSS custom properties from a single
 * HSL triplet, so each "more red" variant only has to name one color.
 */
function makeAccent(hue: number, sat: number, light: number): CSSProperties {
  const solid = `hsl(${hue} ${sat}% ${light}%)`;
  const strongLight = Math.min(light + 9, 72);
  const strongSat = Math.min(sat + 6, 100);
  const borderLight = Math.min(light + 6, 70);

  return {
    "--rd-accent": solid,
    "--rd-accent-strong": `hsl(${hue} ${strongSat}% ${strongLight}%)`,
    "--rd-accent-soft": `hsla(${hue} ${sat}% ${light}% / 0.14)`,
    "--rd-accent-line": `hsla(${hue} ${sat}% ${light}% / 0.45)`,
    "--rd-border-strong": `hsla(${hue} ${sat}% ${borderLight}% / 0.35)`,
    "--rd-glow-lg": `0 0 120px hsla(${hue} ${sat}% ${light}% / 0.22)`,
    "--rd-glow-sm": `0 0 24px hsla(${hue} ${sat}% ${light}% / 0.35)`
  } as CSSProperties;
}

export interface AccentVariant {
  slug: string;
  label: string;
  swatch: string;
  description: string;
  style: CSSProperties;
}

/* Base Command Deck accent for reference: hue 16 (orange-red). Each step below
   walks the hue down toward true red (0) while deepening saturation/lightness
   slightly so the accent reads as "red," not just "darker orange." */
export const accentVariants: AccentVariant[] = [
  {
    slug: "command-deck-red-1",
    label: "Red Shift 1",
    swatch: "hsl(8 90% 54%)",
    description: "A step off the base orange-red toward true red — still warm, less amber.",
    style: makeAccent(8, 90, 54)
  },
  {
    slug: "command-deck-red-2",
    label: "Red Shift 2",
    swatch: "hsl(2 88% 50%)",
    description: "Firmly red with only a whisper of orange left in it.",
    style: makeAccent(2, 88, 50)
  },
  {
    slug: "command-deck-red-3",
    label: "Red Shift 3",
    swatch: "hsl(355 85% 46%)",
    description: "The reddest of the three — deep, saturated, no orange left.",
    style: makeAccent(355, 85, 46)
  }
];
