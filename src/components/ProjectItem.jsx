import ProjectLinksSvg from "./ProjectLinksSvg";

function ProjectItem({ project, projectIndex }) {
  return (
    <div className=" grid grid-cols-12 grid-rows-1 mb-16 xl:mx-28">
      <div className=" row-start-1 col-start-1 col-end-13 lg:col-end-8 relative">
        <img
          src={project.imageUrl}
          alt="project image"
          className="w-full h-full rounded lg:w-[550px] hover:cursor-pointer"
        />

        <div className="bg-orange bg-opacity-50 absolute top-0 left-0 w-full lg:w-[550px] h-full hidden lg:block hover:opacity-0 transition" />
      </div>

      <div className="row-start-1 col-start-1 col-end-13 lg:col-start-5 lg:col-end-13 flex flex-col justify-center lg:items-end bg-projectDetailsBackground bg-opacity-90 lg:bg-transparent p-6 pb-2 lg:my-auto z-10 lg:z-auto">
        <h5 className="text-orange text-sm mb-2">Featured project</h5>

        <h1 className="text-2xl md:text-3xl lg:text-3xl text-white lg:text-headerColor mb-2 lg:mb-5">
          {project.name}
        </h1>

        <p className="lg:bg-projectDetailsBackground bg-opacity-90 w-full text-textColor mb-2 p-0 lg:p-6  leading-6 rounded lg:text-right z-10">
          {project.description}
        </p>

        <div className="flex gap-2">
          {project.stack.map((item) => (
            <span className="text-textColor">{item}</span>
          ))}
        </div>

        <ProjectLinksSvg Links={project.Links} />
      </div>
    </div>
  );
}

export default ProjectItem;
