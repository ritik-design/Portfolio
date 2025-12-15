import React from "react";

const Section4 = () => {
  return (
    <section id="About">
    <div className="min-h-screen bg-black w-full text-white p-10 flex items-center border-t-2 border-amber-100">
      
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-gray-400 leading-relaxed mb-4">
            Hi, I'm <span className="text-white font-semibold">Ritik</span>, a passionate
            frontend developer who loves building clean, responsive, and
            user-friendly web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I work with modern technologies like React, Tailwind CSS, and
            JavaScript to create fast and scalable websites. I enjoy learning
            new tools and improving my development skills every day.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My goal is to become a professional software developer and build
            real-world projects that make an impact.
          </p>
        </div>

        {/* Right Content */}
        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git & GitHub",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-black px-4 py-2 rounded-full text-sm border border-zinc-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
    </section>
  );
};

export default Section4;
