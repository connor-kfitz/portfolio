import { skills } from "@/app/lib/constants";
import { getYearsOfExperience } from "@/app/lib/utils";

export default function About() {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Bio */}
          <div>
            <h2 className="section-title text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I&apos;m a software developer with a background in mechatronics engineering — a foundation
                that shapes how I approach systems thinking, problem decomposition, and long-term reliability
                in the software I build.
              </p>
              <p>
                With {getYearsOfExperience(2022)}+ years of experience building web and mobile applications,
                I focus on solving problems with clear, practical solutions that emphasize clarity,
                maintainability, and scalability.
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

          {/* Skills Grid */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Skills & Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <skill.icon className="w-5 h-5 text-primary"/>
                    <span className="font-medium text-card-foreground">{skill.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
