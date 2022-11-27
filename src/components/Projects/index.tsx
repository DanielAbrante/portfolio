import { projects } from "../../data";
import "./style.css";

export function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <section className="projects-set">
        {projects.map((project) => (
          <div className="project-container">
            <a href={project.link} target="_blank"><img src={project.url} alt={project.title} /></a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
