import React from "react";
import Projectscard from "./projectscard";
import projects from "../DB/projects.json";
import Socials from "./socials";
import skills from "../DB/skills.json";
import Skills from "./skills";
import Experience from "./experience";
import experience from "../DB/experience.json";

function Body() {
  return (
    <section className="flex flex-wrap h-full text-white">
      <article className="w-[18rem] mx-auto  md:w-1/2 lg:w-1/2">
        <div className="flex flex-wrap items-center gap-6 text-[1.4rem]">
          <img
            // Change the image to your own image
            src="https://github.com/freedompraise.png"
            alt="priyankarpal"
            className="h-20 rounded-full"
          />
          <h1 className="text-4xl font-semibold font-dancingScript tracking-widest">
            Hi there!
          </h1>
          {/* For socials icons */}
          <Socials />
        </div>
        <p className=" text-gray-300 pt-5">
          <span className="text-green-400"> -</span> 👶 I'm Praise Dike a
          back-end web developer.
        </p>
        <p className="text-gray-300">
          {" "}
          <span className="text-green-400"> -</span> 👨‍💻 I have experience contributing to various open-source projects and collaborating with other developers.
        </p>
        <p className="text-gray-300">
          {" "}
          <span className="text-green-400"> -</span> ⚒️ I primarily work with Python, and JavaScript frameworks like NodeJs and ReactJs.
        </p>
        <p className="text-gray-300">
          {" "}
          <span className="text-green-400"> -</span> 📚 I enjoy learning and staying up-to-date with the latest developments in the industry.
        </p>

        <p className="pt-5 pb-5 text-gray-300">
        A chemical engineering student turned programmer with a passion for problem-solving and a well-rounded understanding of design principles and web flows. A lover of music and sports, with a curious mind and a thirst for knowledge, always seeking out new information on business, tech startups, and entrepreneurship
        </p>
        {/* Projects section*/}

        <h1 className="text-3xl font-semibold pb-5">🛠 Projects</h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 ">
          {projects.map((project, i) => (
            <Projectscard
              link={project.github}
              title={project.name}
              description={project.description}
              key={i}
            />
          ))}
        </div>
        {/* For Skiils Section */}
        <h1 className="text-3xl font-bold pt-5">🤓 Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-8 ">
          {skills.map((skills, i) => (
            <Skills image={skills.image} name={skills.name} key={i} />
          ))}
        </div>
        {/* For Experience Section */}
        <h1 className="text-3xl font-bold pt-5  pb-5">🤝 Experience</h1>
        <div className="grid grid-cols-1  gap-5  md:grid-cols-1 lg:grid-cols-1 ">
          {experience.map((experience, i) => (
            <Experience
              link={experience.link}
              title={experience.title}
              description={experience.description}
              date={experience.date}
              key={i}
            />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Body;
