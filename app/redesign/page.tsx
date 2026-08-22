import Link from "next/link";

import { accentVariants } from "./_lib/accents";

const variations = [
  {
    href: "/redesign/command-deck",
    title: "Command Deck",
    influence: "ref_1 (portrait hero, stat/skill panels) + ref_4 (dashboard glow)",
    description: "Asymmetric split hero, glass stat bar, a project-impact dashboard, and skills grouped into category panels. The densest, most \"engineered\" of the three."
  },
  {
    href: "/redesign/glass-console",
    title: "Glass Console",
    influence: "ref_3 (glass panel over full-bleed backdrop) + ref_2 (centered hero, inline trust row)",
    description: "Centered hero over a full-bleed ambient placeholder, a three-column glass console for stack/impact/contact, and alternating editorial project rows. The calmest, most spacious of the three."
  },
  {
    href: "/redesign/studio-portrait",
    title: "Studio Portrait",
    influence: "ref_1 (framed portrait treatment)",
    description: "Full-width headline over a framed portrait placeholder paired with an original radial \"engineering philosophy\" diagram, a stat ticker strip, and case-file style project reveals."
  }
];

export default function RedesignIndexPage() {
  return (
    <div className="rd-theme relative min-h-screen">
      <div className="relative overflow-hidden">
      <div
        className="rd-glow-orb"
        style={{ width: 520, height: 520, top: "-200px", left: "50%", transform: "translateX(-50%)", background: "var(--rd-accent)", opacity: 0.12 }}
      />
      <div className="rd-container relative z-10 py-20">
        <div className="mb-4 flex items-center justify-between">
          <span className="rd-chip">Internal Preview</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Home Page Redesign — <span style={{ color: "var(--rd-accent)" }}>3 Variations</span>
        </h1>
        <p className="mb-14 max-w-2xl" style={{ color: "var(--rd-fg-muted)" }}>
          Dark-mode, single-accent (orange-red) redesigns of the landing page, built from the site&apos;s existing
          content. Each hero includes a marked HERO_IMAGE_PLACEHOLDER ready for real photography or artwork.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {variations.map((v) => (
            <Link key={v.href} href={v.href} className="rd-glass group flex flex-col p-6 transition-colors hover:border-[var(--rd-border-strong)]">
              <h2 className="mb-2 text-xl font-bold group-hover:text-[var(--rd-accent)] transition-colors">{v.title}</h2>
              <p className="rd-label mb-4">{v.influence}</p>
              <p className="text-sm" style={{ color: "var(--rd-fg-muted)" }}>{v.description}</p>
              <span className="mt-6 text-sm font-medium" style={{ color: "var(--rd-accent)" }}>View variation →</span>
            </Link>
          ))}
        </div>

        <div className="mb-4 mt-20 flex items-center justify-between">
          <span className="rd-chip">Selected Direction</span>
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Command Deck — <span style={{ color: "var(--rd-accent)" }}>3 Redder Accents</span>
        </h2>
        <p className="mb-10 max-w-2xl" style={{ color: "var(--rd-fg-muted)" }}>
          Same Command Deck layout, walking the accent hue from the original orange-red toward true red.
        </p>
        <div className="grid gap-6 md:grid-cols-4">
          <Link href="/redesign/command-deck" className="rd-glass group flex flex-col p-6 transition-colors hover:border-[var(--rd-border-strong)]">
            <span className="mb-4 h-6 w-6 rounded-full" style={{ background: "hsl(16 92% 56%)" }} />
            <h3 className="mb-1 font-bold group-hover:text-[var(--rd-accent)] transition-colors">Original</h3>
            <p className="rd-label mb-4">hsl(16 92% 56%)</p>
            <p className="text-sm" style={{ color: "var(--rd-fg-muted)" }}>The baseline orange-red accent.</p>
            <span className="mt-6 text-sm font-medium" style={{ color: "var(--rd-accent)" }}>View →</span>
          </Link>
          {accentVariants.map((v, i) => (
            <Link key={v.slug} href={`/redesign/${v.slug}`} className="rd-glass group flex flex-col p-6 transition-colors hover:border-[var(--rd-border-strong)]">
              <span className="mb-4 h-6 w-6 rounded-full" style={{ background: v.swatch }} />
              <h3 className="mb-1 font-bold group-hover:text-[var(--rd-accent)] transition-colors">{v.label} <span style={{ color: "var(--rd-fg-subtle)" }}>({i + 1}/3)</span></h3>
              <p className="rd-label mb-4">{v.swatch}</p>
              <p className="text-sm" style={{ color: "var(--rd-fg-muted)" }}>{v.description}</p>
              <span className="mt-6 text-sm font-medium" style={{ color: "var(--rd-accent)" }}>View →</span>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
