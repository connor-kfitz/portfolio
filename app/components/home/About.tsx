"use client";

import { useState } from "react";
import { skills } from "@/app/lib/constants";
import { getYearsOfExperience } from "@/app/lib/utils";

const VISIBLE_COUNT = 4;

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const visibleSkills = expanded ? skills : skills.slice(0, VISIBLE_COUNT);
  const hiddenCount = skills.length - VISIBLE_COUNT;

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Bio */}
          <div>
            <h2 className="section-title text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I&apos;m a software developer with {getYearsOfExperience(2022)}+ years of experience building web and mobile applications.
                I focus on solving problems with clear, practical solutions.
              </p>
              <p>
                My background in mechatronics engineering shapes how I approach software development.
                It enhances systems thinking, problem decomposition, and long-term reliability.
              </p>
              <p>
                My work emphasizes clarity, maintainability, and scalability.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-md border border-border flex items-center justify-center font-display font-bold text-lg text-primary"
                style={{ background: 'radial-gradient(circle at 50% 35%, hsl(220 18% 12%), hsl(220 22% 7%))' }}
              >
                CF
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Connor Fitzsimmons</h3>
                <p className="placard-label">Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="placard-label mb-4">Skills &amp; Tools Bank</h3>
            <div className="border border-border rounded-lg divide-y divide-border overflow-hidden bg-card/40">
              {visibleSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
                >
                  <div className="flex items-center gap-3 shrink-0 sm:w-36">
                    <span className="w-8 h-8 rounded-md border border-border bg-background/60 flex items-center justify-center">
                      <skill.icon className="w-4 h-4 text-primary"/>
                    </span>
                    <span className="font-display font-semibold text-sm text-foreground">{skill.name}</span>
                    <span className="font-mono text-xs text-muted-foreground ml-auto sm:hidden">{skill.items.length}</span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                    {skill.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
            {hiddenCount > 0 &&
              <button
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="cursor-pointer mt-3 placard-label text-primary hover:underline"
              >
                {expanded ? "Show fewer" : `Show ${hiddenCount} more`}
              </button>
            }
          </div>

        </div>
      </div>
    </section>
  );
}
