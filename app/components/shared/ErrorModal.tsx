"use client";

import { useEffect } from "react";

type ErrorModalProps = {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export default function ErrorModal({ open, title, description, onClose }: ErrorModalProps) {

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    return () => {
      document.body.style.overflow = "scroll";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}/>

      <div className="relative bg-card border border-border rounded-xl shadow-card p-6 w-full max-w-md mx-4">
        <h3 className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{description}</p>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-destructive text-destructive-foreground font-medium hover:opacity-95 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
