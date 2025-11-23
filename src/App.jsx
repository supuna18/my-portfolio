import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack"; 

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <TechStack />  {/* <-- මෙතනත් නම මාරු කරන්න */}
    </div>
  );
}

export default App;