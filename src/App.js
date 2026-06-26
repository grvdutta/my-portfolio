import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingTelegram from "./components/FloatingTelegram";

function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingTelegram />
    </div>
  );
}

export default App;