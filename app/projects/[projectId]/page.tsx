import Header from "../../components/project-info-page/Header";
import Images from "../../components/project-info-page/Images";
import Overview from "../../components/project-info-page/Overview";
import Features from "../../components/project-info-page/Features";
import Challenges from "../../components/project-info-page/Challenges";
import Outcomes from "../../components/project-info-page/Outcomes";
import BottomNav from "@/app/components/navigation/BottomNav";

import { notFound } from "next/navigation";

type ProjectInfoPageProps = {
  params: Promise<{ projectId: string }>
}

export default async function ProjectInfoPage({ params }: ProjectInfoPageProps) {
  
  const { projectId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/projects/${projectId}`);

  if (res.status === 404) return notFound();
  if (!res.ok) throw new Error("Failed to load project");

  const project: Project = await res.json();

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 pt-24" id="projects">
        <Header project={project}/>
        <Images images={project.images}/>
        <Overview overview={project.overview}/>
        <Features features={project.keyFeatures}/>
        <Challenges challenges={project.challenges}/>
        <Outcomes outcomes={project.outcomes}/>
        <BottomNav/>
      </div>
    </main>
  );
}
