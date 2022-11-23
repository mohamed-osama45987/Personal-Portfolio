import React from "react";
import portfolioData from "../data/portfolio";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section className="container border border-orange">
      <h4>02.My Projects</h4>

      {portfolioData.map((project) => {
        return <ProjectItem project={project}></ProjectItem>;
      })}
    </section>
  );
}

export default Projects;
