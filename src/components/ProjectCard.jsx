import { FaChevronRight } from "react-icons/fa";

const ProjectCard = ({
  imgSrc,
  alt,
  projectName,
  demoLink,
  codeLink,
  description,
}) => {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 dark:border-white/50 dark:border-2">
      {/* 圖片區 */}
      <div className="relative">
        <img src={imgSrc} alt={alt} className="w-full h-56 object-cover" />

        {/* hover overlay */}
        <div
          className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
        >
          <a
            href={demoLink}
            className="px-4 py-2 bg-white text-black rounded-lg text-sm"
            target="_blank"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            className="px-4 py-2 border border-white text-white rounded-lg text-sm"
            target="_blank"
          >
            View Code
          </a>
        </div>
      </div>

      {/* 文字區 */}
      <div className="p-4 bg-white dark:bg-gray-800 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {projectName}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-[280px] mx-auto">
          {description}
        </p>
      </div>
    </div>
    // <div className="projects-card">
    //   <img src={imgSrc} alt={alt} className="projects-card-img " />
    //   <p className="pt-4 text-lg text-green-600">{projectName}</p>
    //   <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed m-1">
    //     {description}
    //   </p>
    //   <div className="flex gap-6 py-4 items-center">
    //     <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
    //       <a href={demoLink} className="inline-block pb-0.5" target="_blank">
    //         Demo
    //       </a>
    //       <FaChevronRight className="text-[11px] leading-none" />
    //     </div>
    //     <div className="flex items-center hover:text-green-700 space-x-1 font-semibold">
    //       <a href={codeLink} className="inline-block pb-0.5" target="_blank">
    //         Code
    //       </a>
    //       <FaChevronRight className="text-[11px] leading-none" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
