import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Contact } from "./components/Contact"; // 1. Contact Import
import { Footer } from "./components/Footer";   // 2. Footer Import

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <TechStack />
      <ProjectShowcase />
      <Contact /> {/* 3. Add Contact */}
      <Footer />  {/* 4. Add Footer */}
    </div>
  );
}

export default App;