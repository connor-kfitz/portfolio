"use client";

import Image from 'next/image';
import Link from 'next/link';
import Gauge from '../shared/Gauge';

import { ChevronDown } from 'lucide-react';
import { githubUrl, linkedinUrl, skills } from '@/app/lib/constants';
import { scrollTo } from '@/app/lib/utils';
import { getYearsOfExperience } from '@/app/lib/utils';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >

      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in flex flex-col items-center">

          {/* Status placard */}
          <div className="flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border bg-card/60">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" style={{ boxShadow: '0 0 6px var(--color-primary)' }}/>
            <span className="placard-label">Panel Online // Open to Work</span>
          </div>

          {/* Header */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight">
            Connor Fitzsimmons
          </h1>

          <p className="placard-label mb-12">Full-Stack Engineer // Web &amp; Mobile Applications</p>

          {/* Gauge bank */}
          <div className="flex items-start justify-center gap-8 sm:gap-14 mb-12">
            <Gauge value={`${getYearsOfExperience(2022)}+`} label="Years Exp." tone="primary"/>
            <Gauge value={String(skills.length)} label="Core Stacks" tone="accent"/>
            <Gauge value="OPEN" label="Availability" tone="primary"/>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollTo('projects')}
              className="cursor-pointer px-8 py-4 bg-primary text-primary-foreground rounded-md font-display font-semibold tracking-wide uppercase text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="cursor-pointer px-8 py-4 border border-border text-foreground rounded-md font-display font-semibold tracking-wide uppercase text-sm hover:border-primary hover:text-primary transition-all"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-border bg-card/60 text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Image src="/images/home/github.svg" alt="GitHub" width={20} height={20}/>
            </Link>
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-border bg-card/60 text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Image src="/images/home/linkedin.svg" alt="LinkedIn" width={20} height={20}/>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrow */}
      <button
        onClick={() => scrollTo('projects')}
        className="cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2 animate-float flex flex-col items-center gap-1"
        aria-label="Scroll to projects"
      >
        <span className="placard-label">Scroll</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground"/>
      </button>

    </section>
  );
}
