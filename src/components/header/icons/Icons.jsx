import React from "react";


import About from "./about";
import Home from "./home";
import Contact from "./contact";
import Project from "./project";

const Icons = () => {
  return (
    <div className="flex justify-between gap-15 p-5 mr-10  items-center font-semibold max-md:hidden ">
        <Home />
        <Contact />
        <Project />
        <About />

    </div>
  )
}

export default Icons