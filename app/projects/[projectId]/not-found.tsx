import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/#projects">
          <button className="cursor-pointer inline-flex items-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 text-sm font-medium transition">
            <ArrowLeft className="w-4 h-4 mr-2"/>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
