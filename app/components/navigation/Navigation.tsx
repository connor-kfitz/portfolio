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

  if (pathname?.startsWith('/redesign')) return null;

  const navLinks: NavLink[] = [
    { name: 'Projects', href: '/projects' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Blog', href: '/blog' }
  ];

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
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          CF
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                    isActive
                      ? 'text-foreground border-primary'
                      : 'text-muted-foreground hover:text-foreground border-transparent'
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
          className="cursor-pointer md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-muted transition-colors"
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
      <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1 bg-background/80 backdrop-blur-lg">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`block text-sm font-medium py-3 px-3 rounded-md transition-colors ${isActive
                    ? 'text-foreground bg-muted'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
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
