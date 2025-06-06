import React, { useEffect, useState } from 'react'
import { FaBars,FaMoon,FaSun } from 'react-icons/fa';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false); //點選後自動收合選單
  }
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  // 切換 dark class 到 html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  },[isDarkMode])
  const toggleTheme = () => {
    setIsDarkMode((prev)=>!prev)
  }
  return (
    <header className="flex w-full h-18 mx-auto justify-between items-center font-semibold  py-4 fixed top-0 left-0 right-0 z-50 bg-white shadow shadow-gray-400 dark:bg-gray-900 dark:text-white dark:shadow-gray-800">
      <div className="logo-box flex justify-start ml-20 text-2xl bg-white cursor-pointer dark:bg-gray-900 dark:text-white">
        <p className="w-8 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded flex justify-center font-thin text-lg text-white items-center">
          &lt;/&gt;
        </p>
        <p className="ml-1 font-mono font-bold text-lg">Amber.dev</p>
      </div>
      <nav className="text-2xl relative flex">
        {/* Desktop Menu */}
        <button className="pr-3 text-xl cursor-pointer" onClick={toggleTheme}>
          {isDarkMode ? <FaSun></FaSun> : <FaMoon></FaMoon>}
        </button>
        <ul className="md:flex gap-4 hidden ">
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
        {/* Bars Icon - mobile only */}
        <div className="text-end pr-4 md:hidden pt-1.5">
          <button onClick={handleClick}>
            <FaBars className="cursor-pointer "></FaBars>
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col items-center text-sm font-normal p-2 bg-amber-950 text-white absolute top-14  right-0 w-32 md:hidden ">
            <li className="mobile-menu" onClick={handleLinkClick}>
              <a href="#home">HOME</a>
            </li>
            <li className="mobile-menu" onClick={handleLinkClick}>
              <a href="#about">ABOUT ME</a>
            </li>
            <li className="mobile-menu" onClick={handleLinkClick}>
              <a href="#skills">SKILLS</a>
            </li>
            <li className="mobile-menu" onClick={handleLinkClick}>
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="mobile-menu" onClick={handleLinkClick}>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header