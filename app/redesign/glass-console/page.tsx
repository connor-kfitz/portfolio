import Link from "next/link";
import Image from "next/image";

import { ArrowRight, ExternalLink, StickyNote, Mail, MapPin } from "lucide-react";

import HeroImagePlaceholder from "../_components/HeroImagePlaceholder";
import {
  name,
  yearsExperience,
  toolCount,
  skillDomainCount,
  bioParagraphs,
  impactStats,
  featuredProjects,
  contactInfo,
  skillCategories
} from "../_lib/data";

export default function GlassConsolePage() {
  const [firstName, ...lastRest] = name.split(" ");
  const lastName = lastRest.join(" ");
  const allTools = skillCategories.flatMap((s) => s.items);

  return (
    <div className="rd-theme relative min-h-screen">
      {/* Hero with full-bleed placeholder backdrop */}
      <section className="relative overflow-hidden">
        <HeroImagePlaceholder
          className="rd-hero-placeholder-bleed absolute inset-0 h-full w-full"
          label="HERO_IMAGE_PLACEHOLDER — full-bleed ambient background"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsla(20,14%,6%,0.55) 0%, hsla(20,14%,6%,0.75) 55%, var(--rd-bg) 100%)" }}
        />
        <div className="rd-glow-orb" style={{ width: 700, height: 700, top: "-260px", left: "50%", transform: "translateX(-50%)", background: "var(--rd-accent)", opacity: 0.16 }} />

        <header className="relative z-10">
          <div className="rd-container flex items-center justify-between py-6">
            <span className="text-lg font-bold tracking-tight">CF</span>
            <nav className="hidden items-center gap-8 md:flex">
              <a href="#work" className="rd-label hover:text-[var(--rd-fg)] transition-colors">Work</a>
              <a href="#console" className="rd-label hover:text-[var(--rd-fg)] transition-colors">Stack</a>
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

        <div className="rd-fade-up relative z-10 rd-container flex flex-col items-center py-24 text-center md:py-36">
          <span className="rd-chip mb-8">
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--rd-accent)", boxShadow: "var(--rd-glow-sm)" }} />
            Open to Opportunities
          </span>
          <h1 className="mb-6 text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            {firstName} <span style={{ color: "var(--rd-accent)" }}>{lastName}</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg md:text-xl" style={{ color: "var(--rd-fg-muted)" }}>
            Full-stack engineer creating <span style={{ color: "var(--rd-fg)" }}>intuitive</span>,{" "}
            <span style={{ color: "var(--rd-accent)" }}>user-focused</span> web applications.
          </p>
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <a href="#work" className="rd-btn-primary">
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="rd-btn-outline">Get in Touch</a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rd-label">
            <span>{yearsExperience}+ Years Experience</span>
            <span className="hidden h-3 w-px sm:block" style={{ background: "var(--rd-border)" }} />
            <span>{toolCount}+ Technologies</span>
            <span className="hidden h-3 w-px sm:block" style={{ background: "var(--rd-border)" }} />
            <span>{skillDomainCount} Skill Domains</span>
          </div>
        </div>
      </section>

      {/* About manifesto strip */}
      <section className="relative z-10 rd-container py-20 md:py-24">
        <p className="max-w-3xl text-2xl font-medium leading-snug md:text-3xl">
          {bioParagraphs[0]}
        </p>
        <div className="mt-8 grid gap-4 max-w-3xl sm:grid-cols-2" style={{ color: "var(--rd-fg-muted)" }}>
          <p>{bioParagraphs[1]}</p>
          <p>{bioParagraphs[2]}</p>
        </div>
      </section>

      {/* Console panel */}
      <section id="console" className="relative z-10 border-t" style={{ borderColor: "var(--rd-border)" }}>
        <div className="rd-container py-20">
          <div className="rd-glass rd-glass-accent grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0" style={{ borderColor: "var(--rd-border)" }}>
            <div className="p-8">
              <h3 className="rd-label mb-5" style={{ color: "var(--rd-accent)" }}>Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {allTools.map((tool) => (
                  <span key={tool} className="rd-chip">{tool}</span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <h3 className="rd-label mb-5" style={{ color: "var(--rd-accent)" }}>Case Study Impact</h3>
              <div className="space-y-4">
                {impactStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm" style={{ color: "var(--rd-fg-muted)" }}>{stat.label}</span>
                      <span className="font-bold" style={{ color: "var(--rd-accent)" }}>{stat.value}</span>
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full" style={{ background: "var(--rd-border)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${Math.min(Math.abs(parseInt(stat.value, 10)), 100)}%`, background: "var(--rd-accent)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8">
              <h3 className="rd-label mb-5" style={{ color: "var(--rd-accent)" }}>Say Hello</h3>
              <div className="mb-4 flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" style={{ color: "var(--rd-accent)" }} />
                <Link href={`mailto:${contactInfo.email}`} className="break-all text-sm hover:text-[var(--rd-accent)] transition-colors">
                  {contactInfo.email}
                </Link>
              </div>
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0" style={{ color: "var(--rd-accent)" }} />
                <span className="text-sm">{contactInfo.location}</span>
              </div>
              <a href="#contact" className="rd-btn-outline w-full">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects — alternating editorial rows */}
      <section id="work" className="relative z-10 border-t" style={{ borderColor: "var(--rd-border)" }}>
        <div className="rd-container py-20">
          <h2 className="mb-14 text-3xl font-bold md:text-4xl">Featured Case Studies</h2>
          <div className="divide-y" style={{ borderColor: "var(--rd-border)" }}>
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`grid gap-8 py-14 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-video overflow-hidden rounded-sm border" style={{ borderColor: "var(--rd-border)" }}>
                  <Image src={project.images[0]} alt={`${project.name} screenshot`} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold">{project.name}</h3>
                  <p className="mb-6" style={{ color: "var(--rd-fg-muted)" }}>{project.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rd-chip">{tech}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-5">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--rd-accent)" }}>
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Link>
                    <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--rd-fg-muted)" }}>
                      <StickyNote className="h-4 w-4" /> Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <footer id="contact" className="relative z-10 border-t" style={{ borderColor: "var(--rd-border)" }}>
        <div className="rd-container py-24 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Let&apos;s work <span style={{ color: "var(--rd-accent)" }}>together</span>.
          </h2>
          <p className="mx-auto mb-10 max-w-xl" style={{ color: "var(--rd-fg-muted)" }}>
            Feel free to reach out for collaborations, opportunities, or just to chat. I will get back to you as soon as possible.
          </p>
          <a href={`mailto:${contactInfo.email}`} className="rd-btn-primary mb-14 inline-flex">
            <Mail className="h-4 w-4" /> {contactInfo.email}
          </a>
          <div className="rd-hairline mb-8" />
          <p className="text-sm" style={{ color: "var(--rd-fg-subtle)" }}>© 2026 Connor Fitzsimmons. Built with Next &amp; Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}
