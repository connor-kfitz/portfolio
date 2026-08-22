"use client";

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  const navLinks: NavLink[] = [
    { name: 'Projects', href: '/projects' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-background/85 backdrop-blur-lg border-border shadow-sm'
          : 'bg-background/40 border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
        >
          <span
            className="w-8 h-8 rounded-md border border-border flex items-center justify-center font-display font-bold text-sm text-primary group-hover:border-primary transition-colors"
            style={{ background: 'radial-gradient(circle at 50% 35%, hsl(220 18% 12%), hsl(220 22% 7%))' }}
          >
            CF
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`placard-label px-3.5 py-2 rounded-md border transition-colors ${
                    isActive
                      ? 'text-primary border-border bg-card'
                      : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="cursor-pointer md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-foreground hover:border-primary transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>
      <MobileMenu open={menuOpen} navLinks={navLinks} pathname={pathname}/>
    </nav>
  );
}

interface MobileMenuProps {
  open: boolean;
  navLinks: NavLink[];
  pathname: string | null;
}

function MobileMenu({ open, navLinks, pathname }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'
        }`}
    >
      <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1 bg-background/95 backdrop-blur-lg border-t border-border">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`placard-label block py-3 px-3 rounded-md border transition-colors ${isActive
                    ? 'text-primary border-border bg-card'
                    : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                  }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
