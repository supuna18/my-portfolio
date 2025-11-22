import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero"; // 1. Hero එක import කරගත්තා

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans">
      <Navbar />
      
      {/* 2. Hero Component එක මෙතනට දැම්මා */}
      <Hero />
      
    </div>
  );
}

export default App;