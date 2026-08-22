import Link from "next/link";

import { ArrowLeft } from "lucide-react";

interface NotFoundStateProps {
  title: string;
  message: string;
  backHref: string;
}

export default function NotFoundState({ title, message, backHref }: NotFoundStateProps) {
  return (
    <div className="flex-1 bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-muted-foreground mb-8">{message}</p>
        <Link href={backHref}>
          <button className="cursor-pointer inline-flex items-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2.5 font-display font-semibold tracking-wide uppercase text-xs transition">
            <ArrowLeft className="w-4 h-4 mr-2"/>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
