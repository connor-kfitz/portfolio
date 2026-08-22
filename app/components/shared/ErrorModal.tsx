"use client";

import { useEffect } from "react";
import { useDialogA11y } from "@/app/lib/useDialogA11y";

type ErrorModalProps = {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export default function ErrorModal({ open, title, description, onClose }: ErrorModalProps) {

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
        aria-labelledby="error-modal-title"
        className="relative bg-card border border-border rounded-xl shadow-card p-6 w-full max-w-md mx-4"
      >
        <h3 id="error-modal-title" className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
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
