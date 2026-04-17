import { FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ imgSrc, alt, projectName, demoLink, codeLink}) => {
  return (
    <div className="projects-card">
      <img
        src={imgSrc}
        alt={alt}
        className="projects-card-img "
      />
          <p className="pt-4 text-lg text-green-600">{ projectName }</p>
      <div className="flex gap-6 py-4 items-center">
        <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
          <a
            href={demoLink}
            className="inline-block pb-0.5"
            target="_blank"
          >
            Live Demo
          </a>
          <FaChevronRight className="text-[11px] leading-none" />
        </div>
        <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
          <a
            href={codeLink}
            className="inline-block pb-0.5"
            target="_blank"
          >
            View Code
          </a>
          <FaChevronRight className="text-[11px] leading-none" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard