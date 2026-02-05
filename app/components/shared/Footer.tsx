"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

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
            <Link href={onProjectsRoute ? `${pathname}#projects` :  "#hero"} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
