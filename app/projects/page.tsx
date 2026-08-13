import ListPageLayout from "../components/shared/ListPageLayout";
import CardGrid from "../components/shared/CardGrid";
import ProjectCard from "../components/shared/ProjectCard";
import EmptyState from "../components/shared/EmptyState";

import { FolderOpen } from "lucide-react";

export default async function ProjectsPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/projects`, {
    cache: 'no-store'
  });

  if (!res.ok) throw new Error("Failed to load projects");

  const projects: Project[] = await res.json();

  return (
    <ListPageLayout
      title="Projects"
      description="Collection of all projects I have worked on or maintain. Click on the links to view live demos, see more details, or explore the source code."
    >
      <CardGrid
        items={projects}
        renderItem={(project) => <ProjectCard key={project.id} project={project}/>}
        emptyState={<EmptyState icon={FolderOpen} title="No projects yet" message="Check back later."/>}
      />
    </ListPageLayout>
  );
}
