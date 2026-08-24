import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="border-t border-border pt-8">
      <Link href="/#projects">
        <button className="cursor-pointer inline-flex items-center rounded-md h-11 px-4 text-sm font-medium border border-border text-foreground bg-transparent hover:bg-muted transition">
          <ArrowLeft className="w-4 h-4 mr-2"/>
          Go Back Home
        </button>
      </Link>
    </nav>
  );
}
