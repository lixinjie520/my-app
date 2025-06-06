import React from 'react';
import ContactForm from './ContactForm';
import {
  FaFacebook,
  FaLinkedin,
  FaAt,
  FaGithub,
} from "react-icons/fa";
const Contact = () => {
  return (
    <section
      id="contact"
      className="p-20 bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      <h2 className="text-4xl md:text-5xl pb-24 text-center font-bold">
        Let's work together...
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-30 place-items-center'>
        {/* 左邊聯繫表單 */}
       <ContactForm/>
        {/* 右邊聯繫區 */}
        <div className="max-w-3xl md:max-w-5xl md:mt-10  mx-auto text-2xl font-bold grid grid-cols-1 gap-14 mt-10 place-items-center rounded">
          <div className="contact-card">
            <a
              href="https://www.facebook.com/shengyan.wang1"
              target="_blank"
              className="link"
            >
              <FaFacebook className="mr-1"></FaFacebook>
              Facebook
            </a>
          </div>
          <div className="contact-card">
            <a
              href="https://github.com/lixinjie520"
              target="_blank"
              className="link"
            >
              <FaGithub className="mr-1"></FaGithub>
              Github
            </a>
          </div>
          <div className="contact-card ">
            <a
              href="https://www.linkedin.com/in/%E5%8B%9D%E7%87%95-%E7%8E%8B-61b6b3286/"
              target="_blank"
              className="link"
            >
              <FaLinkedin className="mr-1"></FaLinkedin>
              LinkedIn
            </a>
          </div>
          <div className="contact-card ">
            <a href="mailto:wangshengyan6@gmail.com" className="link">
              <FaAt className="mr-1"></FaAt>
              Send a mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact