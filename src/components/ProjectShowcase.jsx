import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Green Leaf Farm System",
    description: "A full-stack e-commerce application built with React and Java backend. Features include cart management, payment gateway integration, and user authentication.",
    tech: ["MongoDB", "Express.js", "React", "Node.js","Tailwind"],
    // Image URL 
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop",
    github: "https://lnkd.in/eA5N4hCP", 
    live: "https://smart-farm-system-deployed-frontend.onrender.com/", // Live Link 
  },
  {
    title: "Online Foodordering System",
    description: "A drag-and-drop task manager inspired by Trello. Uses local storage for data persistence and smooth animations for task movements.",
    tech: ["Java", "MySQL", "MVC Arcitecture","Tailwind"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    github: "https://lnkd.in/ek5nNNGw",
    live: "https://online-food-ordering-app-lfmu.onrender.com",
  },
  {
    title: "Online Movie Booking System",
    description: "Real-time weather forecast application using OpenWeatherMap API. Displays current conditions and 5-day forecast with dynamic backgrounds.",
    tech: ["HTML", "JavaScript", "Tailwind","PHP"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Online Movie Booking System",
    description: "Real-time weather forecast application using OpenWeatherMap API. Displays current conditions and 5-day forecast with dynamic backgrounds.",
    tech: ["HTML", "JavaScript", "Tailwind","PHP"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Online Movie Booking System",
    description: "Real-time weather forecast application using OpenWeatherMap API. Displays current conditions and 5-day forecast with dynamic backgrounds.",
    tech: ["HTML", "JavaScript", "Tailwind","PHP"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Online Movie Booking System",
    description: "Real-time weather forecast application using OpenWeatherMap API. Displays current conditions and 5-day forecast with dynamic backgrounds.",
    tech: ["HTML", "JavaScript", "Tailwind","PHP"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
];    

const containerVariants = {       
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};           
 
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-2">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Featured Projects</h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 group"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Links Section (Hover කළාම පේන කොටස) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  
                  {/* GitHub Button */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-dark rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    title="View Code"
                  >
                    <FaGithub size={20} />
                  </a>

                  {/* Live Demo Button */}
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-dark rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    title="View Live Site"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>

                </div>
              </div>

              {/* Text Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};