import Container from "../_components/Container";
import ProjectCard from "../_components/ProjectCard";
import { projects } from "../_data/projects";

export default function Projects() {
  return (
    <Container heading="Projects.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Container>
  );
}
