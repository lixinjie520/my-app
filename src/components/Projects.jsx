import React from 'react'
import {
  FaChevronRight,
} from "react-icons/fa";
const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 dark:bg-gray-800">
      <h2 className="text-4xl md:text-5xl pb-16 text-center font-bold dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-xl md:max-w-4xl mx-auto py-4 px-2">
        <div className="projects-card">
          <img
            src={`${import.meta.env.BASE_URL}/images/weatherApp.png`} 
            alt="Weather App Project"
            className="projects-card-img "
          />
          <p className="pt-4 text-lg text-green-600">Weather App</p>
          <div className="flex gap-6 py-4 items-center">
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://lixinjie520.github.io/1.WeatherApp/"
                className="inline-block pb-0.5"
                target="_blank"
              >
                Live Demo
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://github.com/lixinjie520/1.WeatherApp"
                className="inline-block pb-0.5"
                target="_blank"
              >
                View Code
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
          </div>
        </div>
        <div className="projects-card">
          <img
            src={`${import.meta.env.BASE_URL}/images/QuoteGenerator.png`}
            alt="Random Quote Machine Project"
            className="projects-card-img"
          />
          <p className="pt-4 text-lg text-green-600">Random Quote Machine</p>
          <div className="flex gap-6 py-4 items-center">
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://lixinjie520.github.io/7.QuoteGenerator/"
                className="inline-block pb-0.5"
                target="_blank"
              >
                Live Demo
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://github.com/lixinjie520/7.QuoteGenerator"
                className="inline-block pb-0.5"
                target="_blank"
              >
                View Code
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
          </div>
        </div>
        <div className="projects-card">
          <img
            src={`${import.meta.env.BASE_URL}/images/QRCodeGenerator.png`}
            alt="QR Code Project"
            className="projects-card-img"
          />
          <p className="pt-4 text-lg text-green-600">QR Code Generator</p>
          <div className="flex gap-6 py-4 items-center">
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://lixinjie520.github.io/8.QRCodeGenerator/"
                className="inline-block pb-0.5"
                target="_blank"
              >
                Live Demo
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://github.com/lixinjie520/8.QRCodeGenerator"
                className="inline-block pb-0.5"
                target="_blank"
              >
                View Code
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
          </div>
        </div>
        <div className="projects-card">
          <img
            src={`${import.meta.env.BASE_URL}/images/MusicPlayer.png`}
            alt="Music Player Project"
            className="projects-card-img"
          />
          <p className="pt-4 text-lg text-green-600">Music Player</p>
          <div className="flex gap-6 py-4 items-center">
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://lixinjie520.github.io/10.MusicPlayer/"
                className="inline-block pb-0.5"
                target="_blank"
              >
                Live Demo
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://github.com/lixinjie520/10.MusicPlayer"
                className="inline-block pb-0.5"
                target="_blank"
              >
                View Code
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
          </div>
        </div>
        <div className="projects-card">
          <img
            src={`${import.meta.env.BASE_URL}/images/Stopwatch.png`}
            alt="Stopwatch Project"
            className="projects-card-img"
          />
          <p className="pt-4 text-lg text-green-600">Stopwatch</p>
          <div className="flex gap-6 py-4 items-center">
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://lixinjie520.github.io/11.Stopwatch/"
                className="inline-block pb-0.5"
                target="_blank"
              >
                Live Demo
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://github.com/lixinjie520/11.Stopwatch"
                className="inline-block pb-0.5"
                target="_blank"
              >
                View Code
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
          </div>
        </div>
        <div className="projects-card">
          <img
            src={`${import.meta.env.BASE_URL}/images/ToDoList.png`}
            alt="To Do List Project"
            className="projects-card-img"
          />
          <p className="pt-4 text-lg text-green-600">To Do List</p>
          <div className="flex gap-6 py-4 items-center">
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://lixinjie520.github.io/2.ToDoList/"
                className="inline-block pb-0.5"
                target="_blank"
              >
                Live Demo
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
            <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
              <a
                href="https://github.com/lixinjie520/2.ToDoList"
                className="inline-block pb-0.5"
                target="_blank"
              >
                View Code
              </a>
              <FaChevronRight className="text-[11px] leading-none" />
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/lixinjie520?tab=repositories"
        target="_blank"
        className="flex items-center space-x-1 justify-center mt-10 w-32 h-12 rounded text-white text-2xl  mx-auto bg-gray-600 cursor-pointer hover:bg-blue-800 transition-colors duration-200"
      >
        <button className="pb-0.5 cursor-pointer">More</button>
        <FaChevronRight className="text-[14px] leading-none" />
      </a>
    </section>
  );
}

export default Projects