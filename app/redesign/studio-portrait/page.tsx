import Link from "next/link";
import Image from "next/image";

import { ArrowRight, ExternalLink, StickyNote, Mail, MapPin } from "lucide-react";

import HeroImagePlaceholder from "../_components/HeroImagePlaceholder";
import {
  name,
  bioParagraphs,
  philosophyNodes,
  heroStats,
  featuredProjects,
  contactInfo,
  skillCategories
} from "../_lib/data";

const diagramNodes = philosophyNodes.map((label, i) => {
  const angle = (i / philosophyNodes.length) * 2 * Math.PI - Math.PI / 2;
  const radius = 40;
  return {
    label,
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle)
  };
});

export default function StudioPortraitPage() {
  const [firstName, ...lastRest] = name.split(" ");
  const lastName = lastRest.join(" ");

  return (
    <div className="rd-theme relative min-h-screen">
      <div className="relative overflow-hidden">
      <div
        className="rd-glow-orb"
        style={{ width: 560, height: 560, top: "-200px", left: "-120px", background: "var(--rd-accent)", opacity: 0.13 }}
      />

      {/* Nav */}
      <header className="relative z-10">
        <div className="rd-container flex items-center justify-between py-6">
          <span className="text-lg font-bold tracking-tight">CF</span>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#work" className="rd-label hover:text-[var(--rd-fg)] transition-colors">Work</a>
            <a href="#skills" className="rd-label hover:text-[var(--rd-fg)] transition-colors">Skills</a>
            <a href="#contact" className="rd-label hover:text-[var(--rd-fg)] transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="rd-icon-btn" aria-label="GitHub">
              <Image src="/images/home/github.svg" alt="" width={16} height={16} className="opacity-80 invert" />
            </Link>
            <Link href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="rd-icon-btn" aria-label="LinkedIn">
              <Image src="/images/home/linkedin.svg" alt="" width={16} height={16} className="opacity-80 invert" />
            </Link>
          </div>
        </div>
      </header>

      {/* Full-width headline */}
      <section className="rd-fade-up relative z-10 rd-container pb-10 pt-12 md:pt-20">
        <span className="rd-chip mb-8 inline-flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--rd-accent)", boxShadow: "var(--rd-glow-sm)" }} />
          Open to Opportunities
        </span>
        <h1 className="mb-6 max-w-4xl text-6xl font-bold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
          {firstName}<br />{lastName}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl" style={{ color: "var(--rd-fg-muted)" }}>
          Full-stack engineer creating <span style={{ color: "var(--rd-fg)" }}>intuitive</span>,{" "}
          <span style={{ color: "var(--rd-accent)" }}>user-focused</span> web applications.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#work" className="rd-btn-primary">
            View My Work <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="rd-btn-outline">Get in Touch</a>
        </div>
      </section>
      </div>

      {/* Portrait + philosophy band */}
      <section className="relative z-10 rd-container grid gap-6 py-14 md:grid-cols-[0.85fr_1.15fr] md:py-20">
        <div className="relative">
          <HeroImagePlaceholder className="aspect-[3/4] w-full" />
          <span className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2" style={{ borderColor: "var(--rd-accent)" }} />
          <span className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2" style={{ borderColor: "var(--rd-accent)" }} />
        </div>

        <div className="rd-glass rd-glass-accent flex flex-col justify-center p-8 md:p-10">
          <h2 className="rd-label mb-8" style={{ color: "var(--rd-accent)" }}>Engineering Philosophy</h2>

          {/* Mobile fallback: the radial diagram's labels overlap below sm, so list the same nodes instead */}
          <div className="flex flex-wrap gap-2 sm:hidden">
            {philosophyNodes.map((label) => (
              <span key={label} className="rd-chip">{label}</span>
            ))}
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-md sm:block">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {diagramNodes.map((node) => (
                <line
                  key={node.label}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  stroke="var(--rd-border-strong)"
                  strokeWidth="0.4"
                />
              ))}
              <circle cx="50" cy="50" r="14" fill="var(--rd-bg-raised)" stroke="var(--rd-border-strong)" strokeWidth="0.4" />
            </svg>
            <div className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-[0.6rem] font-semibold leading-tight">Mechatronics-Trained Engineer</p>
            </div>
            {diagramNodes.map((node) => (
              <div
                key={node.label}
                className="rd-chip absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                {node.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat ticker strip */}
      <section className="relative z-10 border-y" style={{ borderColor: "var(--rd-border)" }}>
        <div className="rd-container grid grid-cols-2 divide-x md:grid-cols-4" style={{ borderColor: "var(--rd-border)" }}>
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 first:pl-0 last:pr-0 md:px-8">
              <p className="text-3xl font-bold md:text-4xl" style={{ color: "var(--rd-accent)" }}>{stat.value}</p>
              <p className="rd-label mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section className="relative z-10 rd-container py-20">
        <div className="grid gap-10 md:grid-cols-[auto_1fr]">
          <span
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm text-xl font-bold"
            style={{ background: "var(--rd-accent-soft)", color: "var(--rd-accent)" }}
          >
            CF
          </span>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed md:text-lg" style={{ color: "var(--rd-fg-muted)" }}>
            {bioParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — case files */}
      <section id="work" className="relative z-10 border-t" style={{ borderColor: "var(--rd-border)" }}>
        <div className="rd-container py-20">
          <h2 className="mb-14 text-3xl font-bold md:text-4xl">Featured Case Studies</h2>
          <div className="space-y-10">
            {featuredProjects.map((project) => (
              <div key={project.id} className="relative overflow-hidden rounded-sm border" style={{ borderColor: "var(--rd-border)" }}>
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src={project.images[0]}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.45) saturate(0.85)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(0deg, hsla(20,14%,6%,0.96) 8%, hsla(20,14%,6%,0.55) 55%, hsla(20,14%,6%,0.25) 100%)" }}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
                  <p className="mb-5 max-w-2xl" style={{ color: "var(--rd-fg-muted)" }}>{project.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rd-chip">{tech}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-5">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--rd-accent)" }}>
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Link>
                    <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
                      <StickyNote className="h-4 w-4" /> Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills — spec sheet */}
      <section id="skills" className="relative z-10 border-t" style={{ borderColor: "var(--rd-border)" }}>
        <div className="rd-container py-20">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Skills &amp; Tech Stack</h2>
          <div className="divide-y" style={{ borderColor: "var(--rd-border)" }}>
            {skillCategories.map((skill) => (
              <div key={skill.name} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-8">
                <div className="flex items-center gap-2">
                  <skill.icon className="h-4 w-4" style={{ color: "var(--rd-accent)" }} />
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <p style={{ color: "var(--rd-fg-muted)" }}>{skill.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="relative z-10 border-t" style={{ borderColor: "var(--rd-border)" }}>
        <div className="rd-container grid gap-10 py-20 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Let&apos;s build something <span style={{ color: "var(--rd-accent)" }}>great</span>.
            </h2>
            <p className="max-w-md" style={{ color: "var(--rd-fg-muted)" }}>
              Feel free to reach out for collaborations, opportunities, or just to chat. I will get back to you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center gap-3">
              <span className="rd-icon-btn"><Mail className="h-4 w-4" /></span>
              <Link href={`mailto:${contactInfo.email}`} className="break-all hover:text-[var(--rd-accent)] transition-colors">{contactInfo.email}</Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="rd-icon-btn"><MapPin className="h-4 w-4" /></span>
              <span>{contactInfo.location}</span>
            </div>
            <a href={`mailto:${contactInfo.email}`} className="rd-btn-primary mt-2 w-fit">
              <Mail className="h-4 w-4" /> Email Me
            </a>
          </div>
        </div>
        <div className="rd-container pb-10">
          <div className="rd-hairline mb-6" />
          <p className="text-sm" style={{ color: "var(--rd-fg-subtle)" }}>© 2026 Connor Fitzsimmons. Built with Next &amp; Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}
