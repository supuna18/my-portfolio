import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";

export const About = () => {
  // Education Data
  const education = [
    {
      year: "2023 - Present",
      title: "BSc (Hons) in Information Technology",
      place: "SLIIT",
      desc: "Reading for my honors degree, focusing on full-stack development and software engineering principles."
    }
  ];

  // Certifications Data
  const certifications = [
    { 
      title: "API Fundamentals Student Expert", 
      issuer: "Postman", 
      year: "2024", 
      link: "#" 
    },
    { 
      title: "AI Fundamentals", 
      issuer: "IBM SkillsBuild", 
      year: "2024", 
      link: "#" 
    },
    { 
      title: "Introduction to IoT", 
      issuer: "Cisco Networking Academy", 
      year: "2023", 
      link: "#" 
    },
    { 
      title: "Data Analytics Essentials", 
      issuer: "Cisco", 
      year: "2023", 
      link: "#" 
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-2">My Journey</h2>
            <h1 className="text-4xl md:text-5xl font-bold">Education & Certifications</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 relative">
            
            {/* Center Line (Desktop Only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

            {/* 1. Left Column: Education & Experience */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-10"
            >
                {/* Topic */}
                <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                    <FaGraduationCap className="text-primary text-3xl" /> Academic Background
                </h3>

                {/* Education Cards */}
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                            {/* Dot on the line */}
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"></span>
                            
                            <span className="text-sm text-primary font-mono mb-1 block">{edu.year}</span>
                            <h4 className="text-xl font-bold">{edu.title}</h4>
                            <p className="text-gray-400 text-sm mb-2">{edu.place}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {edu.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Experience (Optional - Future Use) */}
                {/* <div className="pt-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-white mb-6">
                        <FaBriefcase className="text-primary text-3xl" /> Experience
                    </h3>
                    ... Internship details can go here ...
                </div> */}
            </motion.div>


            {/* 2. Right Column: Certifications */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-10"
            >
                 {/* Topic */}
                 <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                    <FaAward className="text-primary text-3xl" /> Professional Certifications
                </h3>

                {/* Cert Cards */}
                <div className="grid gap-4">
                    {certifications.map((cert, index) => (
                        <motion.a 
                            href={cert.link}
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="p-5 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center hover:border-primary/50 transition-colors group cursor-pointer"
                        >
                            <div>
                                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h4>
                                <p className="text-sm text-gray-400">
                                    {cert.issuer}
                                </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                                    {cert.year}
                                </span>
                                <FaExternalLinkAlt className="text-gray-500 group-hover:text-white transition-colors" size={14} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

        </div>

        {/* CV Button Area */}
        <div className="mt-20 text-center">
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                My journey is just beginning. I am eager to apply these skills in a professional environment.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/25">
                Download My CV
            </button>
        </div>

      </div>
    </section>
  );
};