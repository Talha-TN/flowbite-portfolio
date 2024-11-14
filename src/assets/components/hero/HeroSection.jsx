import React from "react";
import Profile from "../../images/profile.jpeg"
const HeroSection = () => {
    // bg-gray-900
  return (
 
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-2 py-2 m-auto lg:gap-10 md:mt-10">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl  font-bold text-gray-700 leading-tight heading">
            Hi, I'm <span className="text-indigo-600 heading">Talha Nawaz</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-black paragraph">
           I am  a passionate frontend developer specializing in React.js, skilled in creating responsive and dynamic web applications using tools like Tailwind CSS, Next.js, and Redux. With a background in Software Engineering, he continuously enhances his skills to deliver engaging, modern user experiences.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="paragraph inline-block bg-indigo-600 text-gray-900 md:text-xl py-2 md:py-3 px-6 rounded-lg shadow-md hover:bg-indigo-300 transition duration-300 hover:cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-end">
          <img
            src={Profile}
            alt="Hero"
            className="w-[250px] md:w-[400px] lg:w-[500px]  rounded-full shadow-lg"
          />
        </div>
      </div>
  
  );
};

export default HeroSection;