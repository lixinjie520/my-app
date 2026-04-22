import React, { useState } from "react";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import { toast } from "react-hot-toast";
import SkillCard from "../components/SkillCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import CertificateModal from "../components/CertificateModal";

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleClick = () => {
    toast.success("履歷已開始下載");
  };

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

  const imagesUrl = `${import.meta.env.BASE_URL}images/`;
  const certifications = [
    {
      title: "freeCodeCamp Responsive Web Design",
      img: `${imagesUrl}RWD_CERT.png`,
    },
    {
      title: "TOEIC 940",
      img: `${imagesUrl}TOEIC_CERT.png`,
    },
    {
      title: "Alpha Camp Front-End Development",
      img: `${imagesUrl}Front-End_CERT.png`,
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto w-full px-4 py-18 bg-gray-200 dark:bg-gray-700 dark:text-white  "
    >
      <h2 className="text-4xl md:text-5xl mb-10 text-center font-bold dark:text-white ">
        About
      </h2>

      <div className="max-w-xl md:max-w-3xl mx-auto dark:text-gray-200">
        <p className="text-base md:text-lg text-left leading-relaxed tracking-wide mb-2">
          Hi, I'm Amber, a web developer transitioning from international
          student services in higher education. I build full-stack applications
          with React and am currently learning Java Spring Boot.
        </p>

        <a
          href={`${import.meta.env.BASE_URL}assets/AmberWang_Resume.pdf`}
          download="AmberWang_Resume.pdf"
          onClick={handleClick}
          className="mx-auto max-w-48 text-sm flex justify-center items-center py-2 mt-4 mb-10 rounded-md bg-gray-600 text-white hover:bg-gray-800 transition-colors duration-200 ease-in-out font-semibold"
        >
          <FaDownload className="inline-block mr-2" />
          Download Resume
        </a>

        <p className="text-center font-semibold text-2xl mb-8 mt-8 dark:text-white">
          Skills
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-xl md:max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              color={skill.color}
              name={skill.name}
            />
          ))}
        </div>

        <p className="text-center font-semibold text-2xl mb-4 mt-12 dark:text-white">
          Certifications
        </p>

        <ul className="flex flex-col items-center gap-3">
          {certifications.map((cert, index) => (
            <li key={index}>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 hover:underline transition cursor-pointer dark:text-blue-200 dark:hover:text-white"
                onClick={() => setSelectedCert(cert)}
              >
                {cert.title}
              </button>
            </li>
          ))}
        </ul>

        {selectedCert && (
          <CertificateModal
            selectedCert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}

        <a
          href="https://www.linkedin.com/in/amberwang22/details/certifications/"
          className="block text-center text-sm text-gray-500 hover:text-blue-600 underline mt-6 dark:text-blue-200 dark:hover:text-white"
          target="_blank"
        >
          View full certifications on LinkedIn →
        </a>
      </div>
    </section>
  );
};

export default About;
