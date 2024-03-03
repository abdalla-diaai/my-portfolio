import React from "react";
import Project from "./Project";
import projects from "../utils/projects.json";
import weather from "../../assets/weather-dashboard.png";
import quiz from "../../assets/coding-quiz.png";

export default function ProjectGallery() {
  return (
    <div>
      <Project
        title={projects[0].title}
        repoUrl={projects[0].repoUrl}
        pageUrl={projects[0].pageUrl}
        image={projects[0].image}
      />
      <Project
        title={projects[1].title}
        repoUrl={projects[1].repoUrl}
        pageUrl={projects[1].pageUrl}
        image={weather}
      />
      <Project
        title={projects[2].title}
        repoUrl={projects[2].repoUrl}
        pageUrl={projects[2].pageUrl}
        image={quiz}
      />
    </div>
  );
}
