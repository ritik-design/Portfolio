import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Vite"],
    link: "#",
  },
  {
    title: "Calculator App",
    description: "A fully functional calculator with clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Todo App",
    description: "Task management app with add, delete and update features.",
    tech: ["React", "JavaScript"],
    link: "#",
  },
];

const Section3 = () => {
  return (
    <section id="Project">
    <div className="min-h-screen bg-black w-full text-white p-10 ">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 mt-20">
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-sm bg-zinc-800 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={project.link}
              className="inline-block mt-2 text-sm text-black bg-white px-4 py-2 rounded-full hover:bg-gray-200"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

    </div>
    </section>
  );
};

export default Section3;
