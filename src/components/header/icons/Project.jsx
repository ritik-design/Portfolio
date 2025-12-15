import React from "react";



const Project = () => {
  const scrollToProject = () => {
    document.getElementById("Project").scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div><button className="hover:underline decoration-2 decoration-blue-400 underline-offset-6 cursor-pointer" onClick={scrollToProject}>Project</button>
      
      </div>
  )
}

export default Project