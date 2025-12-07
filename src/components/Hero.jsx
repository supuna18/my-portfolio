import { motion } from "framer-motion";
import heroImage from "../assets/profile.jpeg";
// 1. Import the social media icons
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export const Hero = () => {
  
  // Contact Button Scroll Function
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden relative"
    >
      {/* Background Blur Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 2. Professional Top Title */}
          <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-4">
            Aspiring Full Stack Developer
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-[#3b82f6]">
              Supun Anjana
            </span>
          </h1>

          {/* 3. Professional Description (Tech Stack + Goal) */}
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            Transforming ideas into seamless web applications with modern technologies and clean code. 
            Focused on creating smooth, user-friendly digital experiences.
          </p>

          <div className="flex gap-4 mb-10">
             <button 
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/25 cursor-pointer"
             >
               Contact Me
            </button>
            <button className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 hover:border-white transition-all duration-300">
              Download CV
            </button>
          </div>

          {/* 4. Social Media Icons Section (New Addition) */}
          <div className="flex gap-6 text-gray-400">
            {/* GitHub Link */}
            <a href="https://github.com/supuna18" target="_blank" rel="noopener noreferrer" className="hover:text-white text-3xl transition-colors duration-300">
                <FaGithub />
            </a>
            
            {/* LinkedIn Link */}   
            <a href="https://www.linkedin.com/in/supun-anjana-9a74132a0/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-3xl transition-colors duration-300">
                <FaLinkedin />
            </a>
            
            {/* Facebook Link */}
            <a href="https://www.facebook.com/share/1D7oDCZzng/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-3xl transition-colors duration-300">
                <FaFacebook />
            </a>
            
            {/* Instagram Link */}
            <a href="https://www.instagram.com/supuna_18?igsh=MWp0NWZkMGZ5bXc3cg==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-3xl transition-colors duration-300">
                <FaInstagram />
            </a>
          </div>

        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                
                <img 
                    src={heroImage}  
                    alt="Supuna Anjana" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-dark shadow-2xl z-10"
                />
                
            </div>
        </motion.div>
      </div>
    </section>
  );
};