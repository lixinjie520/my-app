import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
    { icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
    { icon: FaJs, color: "text-yellow-300", name: "JavaScript" },
    { icon: FaReact, color: "text-blue-400", name: "React" },
    { icon: FaGitAlt, color: "text-orange-500", name: "GIT" },
    { icon: FaNodeJs, color: "text-green-400", name: "NodeJS" },
    { icon: SiTailwindcss, color: "text-blue-300", name: "TailwindCSS" },
    { icon: SiGithub, color: "text-black", name: "Github" },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      <h2 className="text-4xl md:text-5xl p-2 mb-6 text-center font-bold ">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-xl md:max-w-4xl mx-auto py-16">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            color={skill.color}
            name={skill.name}
          />
        ))}
        {/* <SkillCard icon={FaHtml5} color="text-orange-500" name="HTML5" />
        <SkillCard icon={FaCss3Alt} color="text-blue-500" name="CSS3" />
        <SkillCard icon={FaJs} color="text-yellow-300" name="JavaScript" />
        <SkillCard icon={FaReact} color="text-blue-400" name="React" />
        <SkillCard icon={FaGitAlt} color="text-orange-500" name="GIT" />
        <SkillCard icon={FaNodeJs} color="text-green-400" name="NodeJS" />
        <SkillCard
          icon={SiTailwindcss}
          color="text-blue-300"
          name="TailwindCSS"
        />
        <SkillCard icon={SiGithub} color="text-black" name="Github" /> */}
        {/* <div className="icons-card">
          <FaHtml5 className="icons-styles text-orange-500"></FaHtml5>
          <p className="icons-text-styles">HTML5</p>
        </div>
        <div className="icons-card">
          <FaCss3Alt className="icons-styles text-blue-500"></FaCss3Alt>
          <p className="icons-text-styles">CSS3</p>
        </div>
        <div className="icons-card">
          <FaJs className="icons-styles text-yellow-300"></FaJs>
          <p className="icons-text-styles">JavaScript</p>
        </div>
        <div className="icons-card">
          <FaReact className="icons-styles text-blue-400"></FaReact>
          <p className="icons-text-styles">React</p>
        </div>
        <div className="icons-card">
          <FaGitAlt className="icons-styles text-orange-500"></FaGitAlt>
          <p className="icons-text-styles">GIT</p>
        </div>
        <div className="icons-card">
          <FaNodeJs className="icons-styles text-green-400"></FaNodeJs>
          <p className="icons-text-styles">NodeJS</p>
        </div>
        <div className="icons-card">
          <SiTailwindcss className="icons-styles text-blue-300"></SiTailwindcss>
          <p className="icons-text-styles">TailwindCSS</p>
        </div>
        <div className="icons-card">
          <SiGithub className="icons-styles text-black"></SiGithub>
          <p className="icons-text-styles">Github</p>
        </div> */}
        {/* <FaHtml5 className="w-12 h-12 mb-2"></FaHtml5>
                <FaCss3Alt className="w-12 h-12 mb-2"></FaCss3Alt>
                <FaJs className="w-12 h-12 mb-2"></FaJs>
                <FaReact className="w-12 h-12 mb-2"></FaReact>
                <FaGitAlt className="w-12 h-12 mb-2"></FaGitAlt>
                <FaNodeJs className="w-12 h-12 mb-2"></FaNodeJs>
                <SiTailwindcss className="w-12 h-12 mb-2"></SiTailwindcss>
                <SiGithub className="w-12 h-12 mb-2"></SiGithub> */}
      </div>
    </section>
  );
};

export default Skills;
