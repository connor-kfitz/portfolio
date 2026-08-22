"use client";

import ErrorState from "../../components/shared/ErrorState";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorState
      title="Something Went Wrong"
      message="This recipe couldn't be loaded. Please try again."
      backHref="/recipes"
      backLabel="View All Recipes"
      onRetry={reset}
    />
  );
}
