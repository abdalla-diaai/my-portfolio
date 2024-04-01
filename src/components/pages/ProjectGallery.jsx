import React from "react";
import Project from "./Project";
import projects from "../utils/projects.json";
import Footer from "../Footer";

export default function ProjectGallery() {
  return (
    <div className="container" id="projects-container">
      <h3 id="project-heading">Project Examples</h3>
      {/* this approach did not work on deployment */}
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          image={project.image}
          description={project.description}
          repoUrl={project.repoUrl}
          pageUrl={project.pageUrl}
        />
      ))}

      {/* <Project title={projects[0].title} description={projects[0].description} image={projects[0].image} repoUrl={projects[0].repoUrl} pageUrl={projects[0].pageUrl}/>
      <Project title={projects[1].title} description={projects[1].description} image={weather} repoUrl={projects[1].repoUrl} pageUrl={projects[1].pageUrl}/>
      <Project title={projects[2].title} description={projects[2].description} image="/coding-quiz.gif" repoUrl={projects[2].repoUrl} pageUrl={projects[2].pageUrl}/> */}
      <Footer />
    </div>
  );
}
