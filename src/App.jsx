import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div className="w-full mx-auto">
        {/* 導航欄 */}
        <Header />
        {/* 首頁 */}
        <Home />
        {/* 關於我 */}
        <About />
        {/* 技能 */}
        <Skills />
        {/* 作品 */}
        <Projects />
        {/* 聯繫方式 */}
        <Contact />
        {/* 版權頁 */}
        <Footer />
      </div>
    </>
  );
}

export default App;
