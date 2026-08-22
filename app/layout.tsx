import Navigation from "./components/navigation/Navigation";
import Footer from "./components/shared/Footer";

import type { Metadata } from "next";
import { Rajdhani, Work_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"]
});

const workSans = Work_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Connor Fitzsimmons",
  description: "Full-stack engineer creating intuitive, user-focused web applications."
}

metadata.icons = { icon: '/favicon.svg' }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${workSans.variable} ${jetbrains.variable} antialiased min-h-screen flex flex-col`}
      >
        {/*
          THESIS: This site is the proof, not a gallery about the proof — a portfolio that reads
          like the instrument panel of the systems its owner builds, not a themed brochure.
          OWN-WORLD: Matte near-black panel ground, luminous white/green/amber readouts, Rajdhani
          display caps on placard labels, JetBrains Mono for every measured value, Work Sans body.
          STORY: A recruiter lands in a dark cockpit at night — the panel is the only light, six
          gauges report exactly what matters, and every further screen is another honest instrument.
          FIRST VIEWPORT: Name as an engraved placard, a fixed bank of stat gauges (years, stack,
          status) below it, two toggle-switch CTAs, damped needle motion on load.
          FORM: Night-flight instrument six-pack, fused with an engineering-datasheet's tolerance
          precision; seed key aa2651f8, assigned index 3, challenger 3 won the fusion round.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
          review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
        */}
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
