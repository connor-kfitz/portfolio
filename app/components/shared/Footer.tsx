"use client";

import { usePathname } from "next/navigation";
import { scrollTo } from '@/app/lib/utils';

export default function Footer() {

  const pathname = usePathname();
  const onProjectsRoute = pathname ? pathname.includes('projects') : false;

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Connor Fitzsimmons. Built with Next & Tailwind.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollTo(onProjectsRoute ? 'projects' : 'hero')} className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
