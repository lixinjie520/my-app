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
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      <div className="home-container max-w-[70%] md:flex-row flex flex-col mt-4 justify-center items-center mx-auto">
        <div className="relative z-10 slogan text-center text-white">
          <h1 className="text-5xl font-bold ">Hi I'm Amber.</h1>
          <p className="text-2xl mt-5">
            Aspiring Full-Stack Engineer | React & Java Spring Boot
          </p>
        </div>
        <div className="relative z-20 mg-box bg-white/50 rounded-full min-w-20 max-w-70">
          <img
            src={`${import.meta.env.BASE_URL}images/avatar.png`}
            alt="Avatar"
            className="w-full rounded-full"
            title="Avatar"
          />
        </div>
        <div className="absolute top-120 left-50 z-20 text-center text-white">
          <a href='#projects' className="flex w-44 h-10 items-center justify-center border-2 cursor-pointer text-lg mt-5">
            VIEW MY WORK
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home