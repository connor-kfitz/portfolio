"use client";

import { useEffect } from "react";
import { useDialogA11y } from "@/app/lib/useDialogA11y";

type ConfirmationModalProps = {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export default function ConfirmationModal({ open, title, description, onClose }: ConfirmationModalProps) {

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);

  const dialogRef = useDialogA11y(open, onClose);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}/>

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-modal-title"
        className="relative bg-card border border-border rounded-lg shadow-card p-6 w-full max-w-md mx-4"
      >
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/40 to-transparent rounded-t-lg"/>
        <h3 id="confirmation-modal-title" className="font-display text-xl font-bold text-card-foreground mb-2 mt-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{description}</p>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-display font-semibold tracking-wide uppercase text-xs hover:opacity-95 transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
