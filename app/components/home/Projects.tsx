import Link from 'next/link';
import Image from 'next/image';

import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of recent projects. Click on the links to view live demos or explore the source code.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group bg-card rounded-2xl p-8 card-hover border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <Link
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4"/>
                    Live Demo
                  </Link>
                  <Link
                    href={project.repoUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Image src="/images/home/github.svg" alt="GitHub" width={20} height={20}/>
                    Source Code
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  )
}
