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
        <div className="flex gap-20 mx-auto max-w-full md:max-w-5xl mt-4 md:mt-6  text-lg md:text-2xl font-semibold md:font-bold justify-center rounded">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
