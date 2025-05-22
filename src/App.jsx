import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container max-w-[60%] mx-auto border p-2">
      <header className='flex w-full justify-between'>
        <div className="logo-box flex flex-2 justify-start border border-red-600 ">
            {/* <img src="/public/logo1.png" alt="Amber logo" className='w-full' /> */}
            <p className=''>&lt;/&gt;</p>
            <p className='ml-1 ancizar-sans'>Amber.dev</p>
        </div>
        <nav className='flex-8 border'>
          <ul className='flex justify-between ml-60'>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about-me">ABOUT ME</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>
      </div>
    </>
  )
}

export default App
