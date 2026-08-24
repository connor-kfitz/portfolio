"use client";

import { useEffect } from "react";

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

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-modal-title"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}/>

      <div className="relative bg-card border border-border rounded-xl shadow-card p-6 w-full max-w-md mx-4">
        <h3 id="confirmation-modal-title" className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{description}</p>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-95 transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
