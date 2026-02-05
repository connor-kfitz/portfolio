"use client";

import Image from "next/image";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImagesProps {
  images?: string[];
}

export default function Images({ images }: ImagesProps) {

  const [index, setIndex] = useState(0);

  const imgs = images ? (Array.isArray(images) ? images : [images]) : [];

  if (imgs.length === 0) return null;

  function prev() {
    setIndex((i) => (i - 1 + imgs.length) % imgs.length);
  }

  function next() {
    setIndex((i) => (i + 1) % imgs.length);
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl mb-12">
      <div className="relative aspect-video bg-muted rounded-2xl border border-border">
        <div className="flex h-full transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {imgs.map((src, i) => (
            <div key={i} className="min-w-full h-full flex-shrink-0 flex items-center justify-center">
              <Image src={src} alt={`Project image ${i + 1}`} width={1104} height={621} className="object-cover w-full h-full rounded-2xl"/>
            </div>
          ))}
        </div>

        {/* Chevrons */}
        {imgs.length > 1 && (
          <>
            <button onClick={prev} aria-label="Previous" className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/70 border border-border flex items-center justify-center text-foreground hover:bg-background/90 transition">
              <ChevronLeft className="w-5 h-5"/>
            </button>
            <button onClick={next} aria-label="Next" className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/70 border border-border flex items-center justify-center text-foreground hover:bg-background/90 transition">
              <ChevronRight className="w-5 h-5"/>
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-20 flex gap-2">
              {imgs.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-2 w-8 rounded-full ${i === index ? "bg-foreground" : "bg-border/50"}`}/>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
