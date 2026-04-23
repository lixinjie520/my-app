import React from "react";
import { FaFacebook, FaLinkedin, FaAt, FaGithub } from "react-icons/fa";
const Contact = () => {
  const contactInfo = [
    { name: "Github", icon: FaGithub, href: "https://github.com/lixinjie520" },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/%E5%8B%9D%E7%87%95-%E7%8E%8B-61b6b3286/",
    },
  ];
  return (
    <section
      id="contact"
      className="py-18 px-6 dark:bg-gray-800 dark:text-white"
    >
      <h2 className="text-4xl md:text-5xl mb-10 text-center font-bold">
        Let's work together...
      </h2>

      <div className="flex px-30 items-center">
        <div className="flex gap-20 max-w-full md:max-w-5xl mt-4 md:mt-6 mx-auto text-lg md:text-2xl font-bold rounded">
          {contactInfo.map((con, index) => {
            const Icon = con.icon;
            return (
              <div key={index} className="flex gap-4 hover:scale-105 transition duration-200 hover:text-amber-700">
                <a
                  href={con.href}
                  target="_blank"
                  className="flex items-center"
                >
                  <Icon className="mr-1"></Icon>
                  {con.name}
                </a>
              </div>
            ) })}
          {/* <div className="contact-card">
            <a
              href="https://www.facebook.com/shengyan.wang1"
              target="_blank"
              className="link"
            >
              <FaFacebook className="mr-1"></FaFacebook>
              Facebook
            </a>
          </div> */}
          {/* <div className="flex gap-4">
            <a
              href="https://github.com/lixinjie520"
              target="_blank"
              className="flex items-center"
            >
              <FaGithub className="mr-1"></FaGithub>
              Github
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/%E5%8B%9D%E7%87%95-%E7%8E%8B-61b6b3286/"
              target="_blank"
              className="flex items-center"
            >
              <FaLinkedin className="mr-1"></FaLinkedin>
              LinkedIn
            </a>
          </div> */}
          {/* <div className="contact-card ">
            <a href="mailto:wangshengyan6@gmail.com" className="link">
              <FaAt className="mr-1"></FaAt>
              Send a mail
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
