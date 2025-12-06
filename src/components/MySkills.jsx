import { motion } from "framer-motion";
import { FaJava, FaReact, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava />, color: "#ed8b00" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
  { name: "Git", icon: <FaGitAlt />, color: "#f14e32" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const MySkills = () => {
  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-2">My Toolbox</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Tech Stack & Skills</h1>
        </motion.div>

        {/* Grid */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col items-center gap-4 hover:border-white/30 transition-colors group cursor-pointer"
            >
              <div 
                className="text-5xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};