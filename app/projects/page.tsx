import ProjectCard from '@/app/components/shared/ProjectCard';
import BottomNav from '@/app/components/navigation/BottomNav';

export default async function ProjectsPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: 'no-store'
  });

  const projects: Project[] = await res.json();

  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="section-container">

        <div className="text-center mb-16">
          <h1 className="section-title text-foreground">All Projects</h1>
          <p className="section-subtitle">
            Every project I&apos;ve shipped. Click on the links to view live demos or explore the source code.
          </p>
        </div>

        {projects.length > 0
          ? <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} animationDelay={index * 100}/>
              ))}
            </div>
          : <p className="text-center text-muted-foreground">No projects to show yet. Check back soon.</p>
        }

        <BottomNav/>
      </div>
    </main>
  );
}
