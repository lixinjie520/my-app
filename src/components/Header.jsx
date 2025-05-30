import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false); //點選後自動收合選單
  }
  return (
    <header className="flex w-full h-18 mx-auto justify-between items-center font-semibold  py-4 fixed top-0 left-0 right-0 z-50 bg-white shadow shadow-gray-400 ">
      <div className="logo-box flex justify-start ml-20 text-2xl bg-white cursor-pointer ">
        {/* <img src="/public/logo1.png" alt="Amber logo" className='w-full' /> */}
        <p className="w-8 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded flex justify-center font-thin text-lg text-white items-center">
          &lt;/&gt;
        </p>
        <p className="ml-1 font-mono font-bold text-lg">Amber.dev</p>
      </div>
      <nav className="text-2xl relative">
        {/* Bars Icon - mobile only */}
        <div className="text-end pr-4 md:hidden">
          <button onClick={handleClick}>
            <FaBars></FaBars>
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="md:flex gap-4 hidden">
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
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col items-center text-xs font-normal p-2 bg-amber-950 text-white absolute top-13  right-0 w-28 md:hidden ">
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