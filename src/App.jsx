import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaFacebook,
  FaLinkedin,
  FaAt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";

function App() {
  const [count, setCount] = useState(0);
  const year = new Date().getFullYear()
  return (
    <>
      <div className="w-full mx-auto">
        {/* 導航欄 */}
        <header className="flex w-full h-18 mx-auto justify-between items-center font-semibold  py-4 fixed top-0 left-0 right-0 z-50 bg-white shadow shadow-gray-400">
          <div className="logo-box flex justify-start ml-20 text-2xl bg-white cursor-pointer ">
            {/* <img src="/public/logo1.png" alt="Amber logo" className='w-full' /> */}
            <p className="w-8 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded flex justify-center font-thin text-lg text-white items-center">
              &lt;/&gt;
            </p>
            <p className="ml-1 font-mono font-bold text-lg">Amber.dev</p>
          </div>
          <nav className="flex-1 text-2xl ml-80">
            <ul className="flex justify-around ">
              <li className="nav-hover">
                <a href="#home">HOME</a>
              </li>
              <li className="nav-hover">
                <a href="#about">ABOUT ME</a>
              </li>
              <li className="nav-hover">
                <a href="#skills">SKILLS</a>
              </li>
              <li className="nav-hover">
                <a href="#projects">PROJECTS</a>
              </li>
              <li className="nav-hover">
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* 首頁 */}
        <section
          id="home"
          className="w-full mt-24  shadow-gray-500 py-18 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300
 opacity-90 "
        >
          <div className="home-container max-w-[70%] md:flex-row flex flex-col justify-center items-center mx-auto">
            <div className="slogan mr-10 text-center">
              <h1 className="text-5xl font-bold">Hi I'm Amber.</h1>
              <p className="text-2xl mt-5">
                Full-Stack Developer in Taiwan | React & JS
              </p>
            </div>
            <div className="img-box bg-indigo-200 rounded-full min-w-20 max-w-70">
              <img
                src="/public/avatar.png"
                alt="Avatar"
                className="w-full  rounded-full"
                title="Avatar"
              />
            </div>
          </div>
        </section>
        {/* 關於我 */}
        <section
          id="about"
          className="mx-auto w-full px-4  py-18 "
        >
          <h2 className="text-4xl md:text-5xl mb-10 text-center font-bold">
            About Me
          </h2>
          <p className="text-base md:text-lg max-w-xl md:max-w-3xl mx-auto text-left leading-relaxed tracking-wide mb-6">
            I'm a{" "}
            <a
              href="https://zh.wikipedia.org/zh-tw/%E7%BC%85%E7%94%B8"
              className="text-blue-600 "
            >
              Burmese
            </a>{" "}
            web developer based in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Taiwan"
              className="text-blue-600"
            >
              {" "}
              Taiwan
            </a>{" "}
            with a background in Chinese Literature and a passion for front-end
            and full-stack web development.
            <br />
            <br />
            After working for years in the university library and the Office of
            International Affairs at{" "}
            <a href="https://new.ntpu.edu.tw/" className="text-blue-600">
              {" "}
              National Taipei University
            </a>
            .I’m now shifting my career toward tech. I specialize in React and
            JavaScript, and enjoy building small but functional apps like QR
            code generators and to-do lists. I'm also working on a{" "}
            <a
              href="https://depart.moe.edu.tw/ed2500/News_Content.aspx?n=BEAF279005713C72&sms=8F992E081D3A9921&s=F4E7E58A8426B964#"
              className="text-blue-600"
            >
              Chinese language teaching certification
            </a>
            .
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
        </section>
        {/* 技能 */}
        <section
          id="skills"
          className="py-16 px-6 bg-gray-50 border-2 border-pink-600"
        >
          <h2 className="text-4xl md:text-5xl p-2 mb-6 text-center font-bold">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 border-2 max-w-xl md:max-w-4xl mx-auto py-16">
            <div className="icons-card">
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
            </div>
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
        {/* 作品 */}
        <section
          id="projects"
          className="py-16 px-6 bg-gray-50 border-2 border-green-600"
        >
          <h2 className="text-4xl md:text-5xl p-2 mb-6 text-center font-bold">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-2 max-w-xl md:max-w-4xl mx-auto py-4 px-2">
            <div className="projects-card">
              <img
                src="https://placehold.co/640x360?text=QR+Code+App"
                alt="QR Code Project"
                className="w-full h-48 object-cover rounded"
              />
              <a
                href="#"
                className="w-full flex items-center justify-center text-lg font-bold h-10 py-1 bg-gray-700 text-white rounded rounded-t-none"
              >
                QR Code Generator
              </a>
            </div>
            <div className="projects-card">
              <img
                src="https://placehold.co/640x360?text=QR+Code+App"
                alt="QR Code Project"
                className="w-full h-48 object-cover rounded"
              />
              <a
                href="#"
                className="w-full flex items-center justify-center text-lg font-bold h-10 py-1 bg-gray-700 text-white rounded rounded-t-none"
              >
                QR Code Generator
              </a>
            </div>
            <div className="projects-card">
              <img
                src="https://placehold.co/640x360?text=QR+Code+App"
                alt="QR Code Project"
                className="w-full h-48 object-cover rounded"
              />
              <a
                href="#"
                className="w-full flex items-center justify-center text-lg font-bold h-10 py-1 bg-gray-700 text-white rounded rounded-t-none"
              >
                QR Code Generator
              </a>
            </div>
            <div className="projects-card">
              <img
                src="https://placehold.co/640x360?text=QR+Code+App"
                alt="QR Code Project"
                className="w-full h-48 object-cover rounded"
              />
              <a
                href="#"
                className="w-full flex items-center justify-center text-lg font-bold h-10 py-1 bg-gray-700 text-white rounded rounded-t-none"
              >
                QR Code Generator
              </a>
            </div>
            <div className="projects-card">
              <img
                src="https://placehold.co/640x360?text=QR+Code+App"
                alt="QR Code Project"
                className="w-full h-48 object-cover rounded"
              />
              <a
                href="#"
                className="w-full flex items-center justify-center text-lg font-bold h-10 py-1 bg-gray-700 text-white rounded rounded-t-none"
              >
                QR Code Generator
              </a>
            </div>
            <div className="projects-card">
              <img
                src="https://placehold.co/640x360?text=QR+Code+App"
                alt="QR Code Project"
                className="w-full h-48 object-cover rounded"
              />
              <a
                href="#"
                className="w-full flex items-center justify-center text-lg font-bold h-10 py-1 bg-gray-700 text-white rounded rounded-t-none"
              >
                QR Code Generator
              </a>
            </div>
          </div>
        </section>
        {/* 聯繫方式 */}
        <section
          id="contact"
          className="py-16 px-6 bg-gray-50 border-2 border-green-600"
        >
          <h2 className="text-4xl md:text-5xl p-2 mb-20 text-center font-bold">
            Let's work together...
          </h2>
          <div className="contact-link max-w-xl md:max-w-5xl mx-auto text-2xl font-bold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
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
        </section>
        {/* 版權頁 */}
        <footer className="py-10 flex justify-end text-xl px-4">
          <p>Copyright© {year} Amber Wang. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
