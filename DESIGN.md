# Design System

<!-- impeccable:design-schema 1 -->

## World

**Night Instrument Panel.** Outside is ink; the panel is the only light. The site reads as the
instrument bank of the systems its owner builds — a fixed set of gauges reporting exactly what a
recruiter needs, not a themed brochure. Chosen by fusing an assigned "oscilloscope/lab-bench"
direction against a "night-flight instrument six-pack" catalog challenger (seed key `aa2651f8`,
assigned index 3, challenger 3 won on both audience-identification and product-clarity axes).

Always dark — no light-mode toggle. The physical scene (a pilot reading calm dials in the dark)
forces the answer; a light variant would break the concept, so the old unused `.dark` class was
removed rather than kept dormant.

## Palette

Committed strategy: matte near-black ground everywhere, one saturated accent (luminous green)
carrying most interactive/primary surfaces, amber reserved as the secondary/highlight lamp color.

| Token | Value | Use |
|---|---|---|
| `--color-background` | `hsl(220 22% 6%)` | Page ground |
| `--color-card` | `hsl(220 18% 9%)` | Panel/plate face |
| `--color-foreground` | `hsl(50 18% 94%)` | Body text — warm luminous white, not cold white |
| `--color-muted-foreground` | `hsl(220 10% 62%)` | Secondary text, placard labels |
| `--color-primary` | `hsl(142 68% 45%)` | Radium-green accent — CTAs, gauge needles, active states |
| `--color-accent` | `hsl(38 92% 55%)` | Amber caution lamp — secondary emphasis |
| `--color-destructive` | `hsl(4 78% 56%)` | Red lamp — errors only |
| `--color-border` | `hsl(220 15% 19%)` | Panel seams |

No neutrals warmer than the foreground's slight amber cast — avoid drifting toward cream/parchment,
which would contradict the instrument-panel scene.

## Type

- **Display** (`--font-display`, Rajdhani): headings, placard-style button labels (uppercase,
  tracked). Squarish, technical, HUD character.
- **Body** (`--font-sans`, Work Sans): all long-form prose — case studies, bios, descriptions.
- **Mono** (`--font-mono`, JetBrains Mono): every measured value — gauge readouts, tech tags,
  placard captions (`.placard-label`: 11px, 500 weight, 0.16em tracking, uppercase).

## Components

- **Gauge** (`app/components/shared/Gauge.tsx`): circular dial, radial-gradient face, inset bevel
  shadow, mono value in tone color, small pulsing status LED, placard caption below. Used in Hero
  (stat bank) — reusable anywhere a single measured value needs instrument framing.
- **Card** (`app/components/shared/Card.tsx`): the base "instrument plate" — `rounded-lg`, thin
  top accent line (primary-to-transparent gradient), inset-bevel `--shadow-card`. Backs
  ProjectCard, RecipeCard, and the About skills bank.
- **Buttons**: `font-display font-semibold tracking-wide uppercase text-xs`, `rounded-md` — read
  as toggle switches, not soft rounded pills. Applied consistently across Hero CTAs, Contact
  submit, modal actions, DemoLink/SourceLink, BottomNav, ErrorState/NotFoundState.
- **Navigation**: placard strip — logo as a small backlit square badge, links as bordered tabs
  with a lit/unlit state rather than underlines.

## Radius language

`rounded-md` / `rounded-lg` only, site-wide. No `rounded-xl`/`2xl`/`3xl` and no `rounded-full`
except genuinely circular controls (gauges, carousel dots/chevrons) — mechanical, not bubbly.

## Motion

- `--animate-fade-in`: content entrance, exponential ease-out (`cubic-bezier(0.16,1,0.3,1)`).
- `--animate-needle`: gauge entrance — scale + slight rotate settle, same exponential ease-out
  (no bounce/elastic easing — flagged by the detector once and corrected; real instruments
  decelerate, they don't overshoot).
- `--animate-glow-pulse`: slow breathing opacity on status LEDs.
- All motion respects `prefers-reduced-motion`.

## What stayed out

A tiled hairline grid-line background was tried on `body` and removed after the detector flagged
it as a recurring generated-UI signature (`codex-grid-background`) — exactly the kind of tell this
redesign exists to avoid. The panel reads through color and component language alone, not a
decorative overlay.

## Scope note

Recipes intentionally keeps a slightly softer, less rigid instrument treatment (circular numbered
steps, warmer card padding) per PRODUCT.md's directive to keep it a personal aside rather than
competing with Projects for recruiter attention — it shares tokens and radius language with the
rest of the site but wasn't pushed as hard into the gauge/placard idiom.

## Known follow-ups

- No comp/screenshot review was possible this pass (no browser/image tool available in this
  session) — dev-server route checks (200s) and a markup grep confirmed the Hero renders, but a
  full visual pass (contrast, gauge legibility at small sizes, mobile gauge-bank wrapping) is
  still owed before calling this finished.
- Contact form still has no spam mitigation (pre-existing, out of this redesign's scope).
