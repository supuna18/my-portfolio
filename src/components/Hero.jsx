import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden relative"
    >
        {/* Background Blur Effect (පිටුපසින් තියෙන පාට එළිය) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* 1. Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-4">
            Welcome to my world
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Supuna
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I build high-performance web applications with React and Java. 
            Focused on creating smooth animated UI/UX experiences.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/25">
              Contact Me
            </button>
            <button className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 hover:border-white transition-all duration-300">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* 2. Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
            {/* Image Container with Glow */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img 
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Profile" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-dark shadow-2xl z-10"
                />
            </div>
        </motion.div>
      </div>
    </section>
  );
};