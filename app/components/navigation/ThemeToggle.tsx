"use client";

import { Moon, Sun } from 'lucide-react';
import { THEME_STORAGE_KEY } from '@/app/lib/theme';

export default function ThemeToggle({ className = '' }: { className?: string }) {

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {}
  }

  // Both icons are rendered and swapped with the `dark:` variant, so server and client markup match.
  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ${className}`}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <Moon className="w-5 h-5 dark:hidden"/>
      <Sun className="w-5 h-5 hidden dark:block"/>
    </button>
  );
}
