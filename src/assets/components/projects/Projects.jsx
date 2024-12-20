import React from "react";
import dice from "../../images/dice.png";
import figma from "../../images/figma.png";
import movies from "../../images/movies.png";

import shopmate from "../../images/shomate.png";
import wordCounter from "../../images/word-counter.png";
const Projects = () => {
  const myProjects = [
    {
      name: "Figma to HTML CSS",
      imageSource: figma,
      description: "figma to html css",
      link: "https://talha-tn.github.io/Figma-layout/",
    },
    {
      name: "Dice Game",
      imageSource: dice,
      description: "multiplayer dice gaming ",
      link: "https://talha-tn.github.io/Dice-Rolling-Game/",
    },
    {
      name: "Cinemate",
      imageSource: movies,
      description: "Movies details website ",
      link: "https://cinemate-talhanawaz.netlify.app",
    },
    {
      name: "Positivius",
      imageSource: figma,
      description: "figma to tailwind ",
      link: "https://positivus-t.netlify.app",
    },
    {
      name: "Shopmate",
      imageSource: shopmate,
      description: "e commerce store ",
      link: "https://talha-redux.netlify.app",
    },
    {
      name: "Word Counter",
      imageSource: wordCounter,
      description: "Word counter website",
      link: "https://positivus-t.netlify.app",
    },
  ];
  return (
    <>
    <div className="dark:bg-gray-900">
      <h1 className="text-center text-indigo-600 text-2xl font-semibold md:text-3xl md:font-semibold heading">
        Projects
      </h1>
      <div className="grid mt-6 grid-cols-1 m-auto  gap-8  md:grid-cols-3 md:gap-2 max-w-[1200px] ">
        {myProjects.map((project,index) => {
          return (
            <div key={index} className="max-w-sm  bg-white border m-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg w-[280px] h-[100px] md:w-[350px] md:h-[220px]"
                src={project.imageSource}
                alt="img"
              />

              <div className="p-5">
                <h5 className="mb-2 text-lg md:text-xl font-medium tracking-tight text-gray-900 dark:text-gray-400 paragraph hover:cursor-pointer hover:dark:text-white hover:underline underline-offset-4">
                  {project.name}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 paragraph hover:dark:text-white hover:underline underline-offset-4 hover:cursor-pointer">
                  {project.description}
                </p>
                <a
                  target="_blank"
                  href={project.link}
                  className="paragraph inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:text-gray-300"
                >
                  view project
                </a>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Projects;
