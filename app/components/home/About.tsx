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
    <section id="about" className="bg-secondary/50">
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
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">CF</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Connor Fitzsimmons</h3>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Skills & Tools</h3>
            <div className="divide-y divide-border">
              {visibleSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="py-4 first:pt-0 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6"
                >
                  <div className="flex items-center gap-2 shrink-0 sm:w-32">
                    <skill.icon className="w-4 h-4 text-primary"/>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
            {hiddenCount > 0 &&
              <button
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="cursor-pointer mt-3 text-sm font-medium text-primary hover:underline"
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
