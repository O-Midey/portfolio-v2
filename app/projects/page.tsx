import ProjectCard from "../_components/ProjectCard";
import { projects } from "../_data/projects";

function ProjectsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold  text-gray-900">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <main className="container mx-auto px-6 py-12">
      <ProjectsSection />
    </main>
  );
}
