import Link from "next/link";

import { LayoutGrid } from "lucide-react";

interface BottomNavProps {
  href?: string;
  label?: string;
}

export default function BottomNav({ href="/projects", label="View All Projects" }: BottomNavProps) {
  return (
    <nav className="border-t border-border pt-8 flex flex-wrap items-center gap-4">
      <Link href={href} className="w-full sm:w-auto">
        <button className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center rounded-md h-11 px-4 text-sm font-medium border border-border text-foreground bg-transparent hover:bg-muted transition">
          <LayoutGrid className="w-4 h-4 mr-2"/>
          {label}
        </button>
      </Link>
    </nav>
  );
}
