import { FaChevronRight } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const imagesUrl = `${import.meta.env.BASE_URL}images/`;
  const demoLink = "https://lixinjie520.github.io/";
  const codeLink = "https://github.com/lixinjie520/";

  const projects = [
    {
      imgSrc: `${imagesUrl}weatherApp.png`,
      alt: "React Weather App Project",
      projectName: "React Weather App",
      name: "React-weather-app",
      description:
        "Real-time weather app built with React and API integration.",
    },
    {
      imgSrc: `${imagesUrl}ToDoList.png`,
      alt: "To Do List Project",
      projectName: "To Do List",
      name: "2.ToDoList",
      description: "A simple task manager with dynamic state updates.",
    },
    {
      imgSrc: `${imagesUrl}QRCodeGenerator.png`,
      alt: "QRCode Generator Project",
      projectName: "QRCode Generator",
      name: "8.QRCodeGenerator",
      description: "A small tool for generating QR codes instantly.",
    },
    {
      imgSrc: `${imagesUrl}MusicPlayer.png`,
      alt: "Music Player Project",
      projectName: "Music Player",
      name: "10.MusicPlayer",
      description: "An interactive music player with basic playback controls.",
    },
    {
      imgSrc: `${imagesUrl}QuoteGenerator.png`,
      alt: "Quote Generator Project",
      projectName: "Quote Generator",
      name: "7.QuoteGenerator",
      description: "A random quote app with API fetching.",
    },
    {
      imgSrc: `${imagesUrl}Stopwatch.png`,
      alt: "Stopwatch Project",
      projectName: "Stopwatch",
      name: "11.Stopwatch",
      description: "A simple stopwatch with start, pause, and reset functions.",
    },
  ];
  return (
    <section id="projects" className="py-18 px-6 dark:bg-gray-800">
      <h2 className="text-4xl md:text-5xl pb-16 text-center font-bold dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-xl md:max-w-4xl mx-auto py-4 px-2">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            imgSrc={p.imgSrc}
            alt={p.alt}
            projectName={p.projectName}
            demoLink={`${demoLink}${p.name}/`}
            codeLink={`${codeLink}${p.name}/`}
            description={p.description}
          />
        ))}
      </div>
      <a
        href="https://github.com/lixinjie520?tab=repositories"
        target="_blank"
        className="flex items-center space-x-1 justify-center mt-10 w-60 h-10 rounded-lg border-2 border-black/50 text-lg text-black/80  mx-auto cursor-pointer hover:border-cyan-600 hover:text-cyan-600 transition-colors duration-200 font-semibold dark:bg-black/50 dark:text-white dark:border-white/80 dark:hover:text-cyan-200 dark:hover:border-cyan-200"
      >
        <button className="pb-0.5 cursor-pointer px-2.5">
          View More Projects
        </button>
        <FaChevronRight className="text-[14px] leading-none" />
      </a>
    </section>
  );
};

export default Projects;
