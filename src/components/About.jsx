import { motion } from "framer-motion";

export const About = () => {
  // SLIIT Undergraduate කෙනෙක්ට ගැලපෙන Stats
  const stats = [
    { number: "15+", label: "Projects Completed" }, // Assignments + Personal Projects
    { number: "10+", label: "Technologies Known" }, // Java, React, JS, SQL, etc.
    { number: "500+", label: "Coding Hours" },      // ඔයාගේ මහන්සිය පෙන්නන්න
    { number: "100%", label: "Commitment" },        // කැපවීම
  ];

  return (
    <section id="about" className="py-20 bg-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* 1. Left Side: Biography (SLIIT Student කෙනෙක් විදිහට) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-2">About Me</h2>
            <h1 className="text-4xl font-bold mb-6">
              Aspiring IT Professional from <span className="text-primary">SLIIT</span>
            </h1>
            
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              I am currently an undergraduate reading for my <span className="text-white font-semibold">BSc (Hons) in Information Technology</span> at SLIIT. 
              My journey involves mastering full-stack development with technologies like <span className="text-white font-semibold">Java (Spring Boot)</span> and <span className="text-white font-semibold">React</span>.
            </p>

            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              I am passionate about solving complex problems through code and constantly learning new technologies. 
              My goal is to build scalable applications and contribute to the tech industry with innovative solutions.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
                <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300">
                  Read More
                </button>
            </div>    
          </motion.div>

          {/* 2. Right Side: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-primary/50 transition-colors duration-300"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};     