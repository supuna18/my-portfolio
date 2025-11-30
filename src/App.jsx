import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About"; // 1. අලුතින් Import කරා
import { TechStack } from "./components/TechStack";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <About />       {/* 2. Hero එකට යටින් About එක දැම්මා */}
      <TechStack />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;