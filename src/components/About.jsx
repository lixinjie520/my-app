import React from "react";
import { FaDownload } from "react-icons/fa";
import { toast } from "react-hot-toast";

const About = () => {
  const handleClick = () => {
    toast.success("履歷已開始下載");
  };
  return (
    <section
      id="about"
      className="mx-auto w-full px-4  py-18 dark:bg-gray-800  "
    >
      <h2 className="text-4xl md:text-5xl mb-10 text-center font-bold dark:text-white ">
        About
      </h2>
      <p className="text-base md:text-lg max-w-xl md:max-w-3xl mx-auto text-left leading-relaxed tracking-wide mb-6 dark:text-gray-200">
        Hi, I'm Amber. I'm a{" "}
        <a
          href="https://zh.wikipedia.org/zh-tw/%E7%BC%85%E7%94%B8"
          className="text-blue-600 underline "
        >
          Burmese
        </a>{" "}
        web developer learner based in{" "}
        <a
          href="https://en.wikipedia.org/wiki/Taiwan"
          className="text-blue-600 underline"
        >
          {" "}
          Taiwan
        </a>{" "}
        , with a background in Chinese Literature and a passion for full-stack
        web development.
        <br />
        <br />
        After working for years in the Office of International Affairs at{" "}
        <a href="https://new.ntpu.edu.tw/" className="text-blue-600 underline">
          {" "}
          National Taipei University
        </a>
        . I am now transitioning my career toward the tech industry. I
        specialize in HTML, CSS, and JavaScript, and I’m currently learning Java
        Spring Boot.
        <br />
        <br />I also hold a certification in{" "}
        <a
          href="https://depart.moe.edu.tw/ed2500/News_Content.aspx?n=BEAF279005713C72&sms=8F992E081D3A9921&s=F4E7E58A8426B964#"
          className="text-blue-600 underline"
          target="_blank"
        >
          Teaching Chinese as a Foreign Language
        </a>
        &nbsp;and have achieved a TOEIC score of 940.
        <br />
        <br />
        <strong>
          Through years of advising international students, I've developed
          strong soft skills in communication, active listening, and
          cross-cultural problem-solving.
        </strong>{" "}
        I value empathy, clear thinking, and building solutions that help
        people—not just with code, but also with understanding and support.
      </p>
      <div
        className="mx-auto w-56 border flex justify-center items-center py-2 mt-10 rounded-md  bg-gray-600 text-white hover:bg-gray-800 transition-colors duration-200 ease-in-out dark:border-gray-500 "
        onClick={handleClick}
      >
        <a
          href={`${import.meta.env.BASE_URL}assets/AmberWang_Resume.pdf`}
          download="AmberWang_Resume.pdf"
          className="font-semibold w-[100%] text-center"
        >
          <FaDownload className="inline-block mr-2"></FaDownload>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
