import React from "react";
import Profile from "../../images/profile.jpeg"
const HeroSection = () => {
    // bg-gray-900
  return (
 
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-2 py-12 m-auto lg:gap-10">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">
            Hi, I'm <span className="text-indigo-600">Talha Nawaz</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black">
            A passionate developer specializing in React JS. Let's build something amazing together.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block bg-indigo-600 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-300 transition duration-300 hover:cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-end">
          <img
            src={Profile}
            alt="Hero"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-full shadow-lg"
          />
        </div>
      </div>
  
  );
};

export default HeroSection;