"use client";

import Link from "next/link";

import { ExternalLink } from "lucide-react";

interface DemoLinkProps {
  href?: string;
}

export default function DemoLink({ href }: DemoLinkProps) {

  if (!href) return null;
  
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <button className="cursor-pointer inline-flex items-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-4 text-sm font-medium transition">
        <ExternalLink className="w-4 h-4 mr-2"/>
        Live Demo
      </button>
    </Link>
  );
}
