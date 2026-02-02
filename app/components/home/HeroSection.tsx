import Image from 'next/image';
import Link from 'next/link';

import { ArrowDown } from 'lucide-react';
import { githubUrl, linkedinUrl } from '@/app/lib/constants';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--hero-gradient)' }}
    >

      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"/>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
      
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in">
          
          {/* Header */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
            <span>Connor Fitzsimmons</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            Full-stack engineer creating intuitive, user-focused web applications
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-foreground/20 text-foreground rounded-xl font-medium hover:border-primary hover:text-primary transition-all"
            >
              Get in Touch
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Image src="/images/home/github.svg" alt="GitHub" width={20} height={20}/>
            </Link>
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Image src="/images/home/linkedin.svg" alt="LinkedIn" width={20} height={20}/>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrow */}
      <Link
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground"/>
      </Link>
    </section>
  )
}
