import Technologies from "./Technologies";
import DemoLink from "./DemoLink";
import SourceLink from "./SourceLink";

interface HeaderProps {
  project: Project;
}

export default function Header({ project }: HeaderProps) {
  return (
    <div className="mb-12">
      {/* Title & Description */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.name}</h1>
      <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

      <Technologies technologies={project.technologies}/>

      {/* Links */}
      <div className="flex items-center flex-wrap gap-4">
        <DemoLink href={project.liveUrl}/>
        <SourceLink href={project.repoUrl}/>
      </div>
    </div>
  );
}
