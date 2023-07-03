import React from "react";
import portfolioData from "../data/portfolioProjects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section
      id="Projects"
      className="container mx-auto flex flex-col p-5 md:p-8 gap-x-16 mt-10 min-h-screen"
    >
      <h4 className="text-3xl text-headerColor mb-16 font-semibold">
        02.My Projects
      </h4>

      {portfolioData.map((project, idx) => {
        return <ProjectItem project={project} projectIndex={idx}></ProjectItem>;
      })}
    </section>
  );
}

export default Projects;
