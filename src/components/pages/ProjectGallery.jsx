import React from "react";
import Project from "./Project";
import projects from "../utils/projects.json";
import Footer from "../Footer";

export default function ProjectGallery() {
  return (
    <div className="container" id="projects-container">
      <h3 id="project-heading">Project Examples</h3>
      {projects.map((project) => (
        <Project
          title={project.title}
          image={project.image}
          description={project.description}
          repoUrl={project.repoUrl}
          pageUrl={project.pageUrl}
        />
      ))}
      <Footer />
    </div>
  );
}
