import Link from "next/link";
import Image from "next/image";
import Card from "./Card";

import { ExternalLink, StickyNote } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
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

      <div className="flex items-center flex-wrap gap-4">
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ExternalLink className="w-4 h-4"/>
          Live Demo
        </Link>
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <StickyNote className="w-4 h-4"/>
          Details
        </Link>
        <Link
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <Image src="/images/home/github.svg" alt="GitHub" width={20} height={20}/>
          Source Code
        </Link>
      </div>
    </Card>
  );
}
