import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

export default async function Home() {

  const projects = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: 'no-store'
  });

  const featuredProjects: Project[] = (await projects.json()).filter((project: Project) => project.featured);

  return (
    <main className="flex-1">
      <Hero/>
      <Projects projects={featuredProjects}/>
      <About/>
      <Contact/>
    </main>
  );
}
