import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="w-full mx-auto">
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        {/* 導航欄 */}
        <Header />
        {/* 首頁 */}
        <Home />
        {/* 作品 */}
        <Projects />
        {/* 技能 */}
        <Skills />
        {/* 關於我 */}
        <About />
        {/* 聯繫方式 */}
        <Contact />
        {/* 版權頁 */}
        <Footer />
      </div>
    </>
  );
}

export default App;
