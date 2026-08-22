import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";

import { ArrowRight, ExternalLink, StickyNote, Clock, LayoutGrid, Grid3x3, FolderGit2, Mail, MapPin } from "lucide-react";

import HeroImagePlaceholder from "./HeroImagePlaceholder";
import {
  name,
  yearsExperience,
  bioParagraphs,
  heroStats,
  impactStats,
  featuredProjects,
  contactInfo,
  skillCategories
} from "../_lib/data";

const statIcons = [Clock, LayoutGrid, Grid3x3, FolderGit2];

interface CommandDeckProps {
  accentStyle?: CSSProperties;
}

export default function CommandDeck({ accentStyle }: CommandDeckProps) {
  const [firstName, ...lastRest] = name.split(" ");
  const lastName = lastRest.join(" ");
  const spotlight = featuredProjects[0];
  const rest = featuredProjects.slice(1);

  return (
    <div className="rd-theme relative min-h-screen" style={accentStyle}>
      <div className="relative overflow-hidden">
      <div
        className="rd-glow-orb"
        style={{ width: 620, height: 620, top: "-220px", right: "-160px", background: "var(--rd-accent)", opacity: 0.14 }}
      />

      {/* Nav */}
      <header className="relative z-10">
        <div className="rd-container flex items-center justify-between py-5">
          <span className="text-lg font-bold tracking-tight">CF</span>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#work" className="rd-label hover:text-[var(--rd-fg)] transition-colors">Work</a>
            <a href="#skills" className="rd-label hover:text-[var(--rd-fg)] transition-colors">Skills</a>
            <a href="#contact" className="rd-label hover:text-[var(--rd-fg)] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 rd-container grid items-center gap-12 pb-16 pt-16 md:pt-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rd-fade-up">
          <h1 className="mb-6 text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            {firstName} <span className="rd-gradient-text">{lastName}</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg md:text-xl" style={{ color: "var(--rd-fg-muted)" }}>
            Full-stack engineer creating <span style={{ color: "var(--rd-fg)" }}>intuitive</span>,{" "}
            <span style={{ color: "var(--rd-accent)" }}>user-focused</span> web applications.
          </p>
          <div className="mb-10 flex flex-wrap gap-4">
            <a href="#work" className="rd-btn-primary">
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="rd-btn-outline">Get in Touch</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="rd-icon-btn" aria-label="GitHub">
              <Image src="/images/home/github.svg" alt="" width={18} height={18} className="opacity-80 invert" />
            </Link>
            <Link href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="rd-icon-btn" aria-label="LinkedIn">
              <Image src="/images/home/linkedin.svg" alt="" width={18} height={18} className="opacity-80 invert" />
            </Link>
          </div>
        </div>

        <div className="rd-fade-up relative">
          <HeroImagePlaceholder className="aspect-[4/5] w-full" />
          <div className="rd-glass rd-glass-accent absolute -bottom-6 -left-6 hidden px-5 py-4 sm:block">
            <p className="text-2xl font-bold" style={{ color: "var(--rd-accent)" }}>{yearsExperience}+</p>
            <p className="rd-label mt-1">Years Experience</p>
          </div>
        </div>
      </section>
      </div>

      {/* Stat bar */}
      <section className="relative z-10 rd-container pb-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {heroStats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div key={stat.label} className="rd-glass p-6">
                <Icon className="mb-4 h-5 w-5" style={{ color: "var(--rd-accent)" }} />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="rd-label mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="relative z-10">
        <div className="rd-container py-20">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Featured Case Studies</h2>
          <p className="mb-12 max-w-2xl" style={{ color: "var(--rd-fg-muted)" }}>
            A selection of recent projects. Click through for live demos or source code.
          </p>

          <div className="grid gap-6">
            {spotlight && (
              <div className="rd-glass rd-glass-accent grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_0.8fr]">
                <div>
                  <h3 className="mb-3 text-2xl font-bold">{spotlight.name}</h3>
                  <p className="mb-6" style={{ color: "var(--rd-fg-muted)" }}>{spotlight.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {spotlight.technologies.map((tech) => (
                      <span key={tech} className="rd-chip">{tech}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-5">
                    <Link href={spotlight.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--rd-accent)" }}>
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Link>
                    <Link href={`/projects/${spotlight.id}`} className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--rd-fg-muted)" }}>
                      <StickyNote className="h-4 w-4" /> Details
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 content-start">
                  {impactStats.map((stat) => (
                    <div key={stat.label} className="rd-glass p-4">
                      <p className="text-xl font-bold" style={{ color: "var(--rd-accent)" }}>{stat.value}</p>
                      <p className="rd-label mt-1 leading-snug">{stat.label}</p>
                      <div className="mt-3 h-1 w-full overflow-hidden rounded-full" style={{ background: "var(--rd-border)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min(Math.abs(parseInt(stat.value, 10)), 100)}%`,
                            background: "var(--rd-accent)"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {rest.map((project) => (
              <div key={project.id} className="rd-glass grid gap-6 p-6 md:grid-cols-[1fr_1.4fr] md:p-8">
                <div className="relative aspect-video overflow-hidden rounded-sm border" style={{ borderColor: "var(--rd-border)" }}>
                  <Image src={project.images[0]} alt={`${project.name} screenshot`} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{project.name}</h3>
                  <p className="mb-5" style={{ color: "var(--rd-fg-muted)" }}>{project.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
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

      {/* Skills */}
      <section id="skills" className="relative z-10">
        <div className="rd-container py-20">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Skills &amp; Tech Stack</h2>
          <p className="mb-12 max-w-2xl" style={{ color: "var(--rd-fg-muted)" }}>
            Tools and technologies across the stack, from interface to infrastructure.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((skill) => (
              <div key={skill.name} className="rd-glass p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm" style={{ background: "var(--rd-accent-soft)" }}>
                    <skill.icon className="h-4 w-4" style={{ color: "var(--rd-accent)" }} />
                  </span>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rd-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative z-10">
        <div className="rd-container py-20">
          <div className="rd-glass grid gap-10 p-8 md:grid-cols-[auto_1fr] md:p-12">
            <div className="flex flex-row items-center gap-4 md:flex-col md:items-start">
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm text-xl font-bold"
                style={{ background: "var(--rd-accent-soft)", color: "var(--rd-accent)" }}
              >
                CF
              </span>
              <div>
                <p className="font-semibold">{name}</p>
                <p className="rd-label mt-1">Software Engineer</p>
              </div>
            </div>
            <div className="space-y-4 text-base leading-relaxed md:text-lg" style={{ color: "var(--rd-fg-muted)" }}>
              {bioParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="relative z-10">
        <div className="rd-container py-20">
          <div className="rd-glass rd-glass-accent grid gap-10 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Let&apos;s build something <span style={{ color: "var(--rd-accent)" }}>great</span>.
              </h2>
              <p className="mb-8 max-w-md" style={{ color: "var(--rd-fg-muted)" }}>
                Feel free to reach out for collaborations, opportunities, or just to chat. I will get back to you as soon as possible.
              </p>
              <a href={`mailto:${contactInfo.email}`} className="rd-btn-primary">
                <Mail className="h-4 w-4" /> Email Me
              </a>
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
              <p className="text-sm" style={{ color: "var(--rd-fg-subtle)" }}>© 2026 Connor Fitzsimmons. Built with Next &amp; Tailwind.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
