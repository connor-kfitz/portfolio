import type { Metadata } from "next";

import "./theme.css";

export const metadata: Metadata = {
  title: "Redesign Preview — Connor Fitzsimmons",
  robots: { index: false, follow: false }
};

export default function RedesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
