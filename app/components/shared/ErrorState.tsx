"use client";

import Link from "next/link";

import { ArrowLeft, RefreshCcw } from "lucide-react";

interface ErrorStateProps {
  title: string;
  message: string;
  backHref: string;
  backLabel: string;
  onRetry: () => void;
}

export default function ErrorState({ title, message, backHref, backLabel, onRetry }: ErrorStateProps) {
  return (
    <div className="flex-1 bg-background flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-muted-foreground mb-8">{message}</p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={onRetry}
            className="cursor-pointer inline-flex items-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2.5 font-display font-semibold tracking-wide uppercase text-xs transition"
          >
            <RefreshCcw className="w-4 h-4 mr-2"/>
            Try Again
          </button>
          <Link href={backHref}>
            <button className="cursor-pointer inline-flex items-center rounded-md border border-border text-foreground hover:bg-card px-4 py-2.5 font-display font-semibold tracking-wide uppercase text-xs transition">
              <ArrowLeft className="w-4 h-4 mr-2"/>
              {backLabel}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
