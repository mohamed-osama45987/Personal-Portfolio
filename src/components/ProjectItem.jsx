import React from "react";

function ProjectItem({ project }) {
 return(

    <div className="grid grid-rows-1 grid-cols-12">

        <div>
            <img src={project.imageUrl} alt="project image" />
        </div>

        <div className="z">
            some description 
        </div>


    </div>







 )
}

export default ProjectItem;
