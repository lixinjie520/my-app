import React from 'react'

const Header = () => {
  return (
    <header className="flex w-full h-18 mx-auto justify-between items-center font-semibold  py-4 fixed top-0 left-0 right-0 z-50 bg-white shadow shadow-gray-400">
      <div className="logo-box flex justify-start ml-20 text-2xl bg-white cursor-pointer ">
        {/* <img src="/public/logo1.png" alt="Amber logo" className='w-full' /> */}
        <p className="w-8 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded flex justify-center font-thin text-lg text-white items-center">
          &lt;/&gt;
        </p>
        <p className="ml-1 font-mono font-bold text-lg">Amber.dev</p>
      </div>
      <nav className="text-2xl">
        <ul className="flex justify-around gap-4">
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
  );
}

export default Header