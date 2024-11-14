import React, { useState } from 'react';
import Profile from "../../images/profile.jpeg";
import Dice from "../../images/dice.png";
import figma from "../../images/figma.png";
import movies from "../../images/movies.png";
import portfolio from "../../images/portfolio.png";


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    Profile,
    Dice,
    figma,
    movies,
    portfolio,
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-5xl mx-auto ">
      <div id="carousel" className="relative w-full">
        <div className="relative h-56 md:h-80 lg:h-96 overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute z-30 flex bottom-2 left-1/2 transform -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 bg-white/70 rounded-full">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 bg-white/70 rounded-full">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
