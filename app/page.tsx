import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";

export default async function Home() {

  const projects = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: 'no-store'
  });

  return (
    <main>
      <Hero/>
      <Projects projects={await projects.json()}/>
    </main>
  )
}
