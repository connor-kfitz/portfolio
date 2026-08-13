import Link from 'next/link';
import CardGrid from '../shared/CardGrid';
import ProjectCard from '../shared/ProjectCard';
import EmptyState from '../shared/EmptyState';

import { ArrowRight, FolderOpen } from 'lucide-react';

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
        <CardGrid
          items={projects}
          renderItem={(project) => <ProjectCard key={project.id} project={project}/>}
          emptyState={<EmptyState icon={FolderOpen} title="No projects yet" message="Check back later."/>}
        />

        {/* View All CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View All Projects
            <ArrowRight className="w-3.5 h-3.5"/>
          </Link>
        </div>

      </div>
    </section>
  );
}
