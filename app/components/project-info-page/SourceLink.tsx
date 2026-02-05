"use client";

import Link from "next/link";
import Image from "next/image";

interface SourceLinkProps {
  href?: string;
}

export default function SourceLink({ href }: SourceLinkProps) {

  if (!href) return null;
  
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <button className="cursor-pointer inline-flex items-center rounded-md h-11 px-4 text-sm font-medium border border-border text-foreground bg-transparent hover:bg-muted transition">
        <Image src="/images/home/github.svg" alt="GitHub" width={20} height={20} className="mr-2"/>
        View Source
      </button>
    </Link>
  );
}
