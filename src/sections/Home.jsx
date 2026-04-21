import React from 'react'

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-cover bg-center bg-fixed flex justify-center relative  "
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}images/background.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 dark:bg-black/90"></div>
      <div className="home-container max-w-[70%] md:flex-row flex flex-col mt-4 justify-center items-center mx-auto">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold ">Hi I'm Amber</h1>
          <p className="text-lg md:text-xl text-white/80 mt-5">
            Aspiring Full-Stack Engineer | React & Java Spring Boot
          </p>
        </div>
        <div className="relative z-20 mg-box border-white/20 border shadow-lg rounded-full w-[150px] md:w-[170px] mt-5 md:mt-0 md:ml-10">
          <img
            src={`${import.meta.env.BASE_URL}images/avatar.png`}
            alt="Avatar"
            className="w-full rounded-full b"
            title="Avatar"
          />
        </div>
        <div className="z-20 text-center text-white mt-10 md:mt-0 md:absolute md:bottom-40 md:left-1/2 md:-translate-x-1/2">
          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-2 rounded-lg text-white border-2 border-white/50 hover:border-cyan-400 hover:text-cyan-400 transition hover:scale-103 font-semibold"
          >
            VIEW MY WORK
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home