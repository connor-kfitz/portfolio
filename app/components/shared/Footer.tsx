"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { scrollTo } from '@/app/lib/utils';

export default function Footer() {

  const pathname = usePathname();
  const onHomeRoute = pathname === '/';

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="placard-label">
            © {new Date().getFullYear()} Connor Fitzsimmons // Built with Next.js &amp; Tailwind
          </p>
          <div className="flex items-center gap-6">
            {onHomeRoute
              ? <button onClick={() => scrollTo('hero')} className="cursor-pointer placard-label hover:text-primary transition-colors">
                  Back to Top
                </button>
              : <Link href="/" className="placard-label hover:text-primary transition-colors">
                  Back Home
                </Link>
            }
          </div>
        </div>
      </div>
    </footer>
  );
}
