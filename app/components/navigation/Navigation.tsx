"use client";

import Link from 'next/link';

import { ArrowLeft, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { scrollTo } from '@/app/lib/utils';

export default function Navigation() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const pathname = usePathname();
  const onProjectsRoute = pathname ? pathname.includes('projects') : false;

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (onProjectsRoute) return;

    const sectionIds = ['hero', 'projects', 'about', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onProjectsRoute]);

  const handleNavClick = (href: string) => {
    scrollTo(href.replace('#', ''));
    setMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {!onProjectsRoute
          // Home Page Nav Links
          ? <>
              <button
                onClick={() => scrollTo('hero')}
                className="cursor-pointer text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                CF
              </button>
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`cursor-pointer text-sm font-medium transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setMenuOpen((open) => !open)}
                className="cursor-pointer md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-muted transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
              </button>
            </>
          // Project Details Nav Link
          : <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4"/>
              Back
            </Link>
          }
      </div>

      {!onProjectsRoute && (
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1 bg-background/80 backdrop-blur-lg">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-left text-sm font-medium py-3 px-3 rounded-md transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-foreground bg-muted'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
