import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// 1. Updated Project Data
const projects = [
  {
    title: "Green Leaf Farm System",
    shortDesc: "A full-stack Smart Farm Management System with e-commerce, payroll, and livestock tracking.",
    // Green Leaf සඳහා දිග විස්තරේ
    details: `🚀 Project Highlight: Smart Farm Management System

A comprehensive farm management platform developed as a university group project. Our goal was to build a modern, cloud-powered solution that digitalizes core farm operations.

🧩 Key Functionalities:
• 🐄 Livestock Management - Register cows, track breed & DOB, milk production, and health.
• 🌱 Crop Management - Manage fields, seasonal plans, fertilizer input.
• 👨‍🌾 Employee & Workforce - Employee profiles, attendance, leave requests.
• 💵 Payroll Automation - Salaries, allowances, deductions, and PDF reports.
• 🛒 Online Store - Browse farm products, manage cart items.
• 💳 Stripe Payment Gateway - Secure checkout & webhook-verified payments.
• 🔐 Authentication - Secure login with JWT and Google OAuth.
• ☁️ Cloud Integrations - Media uploads via Cloudinary.

☁️ Tech Stack:
Frontend: React (Vite), React Query, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Tools: Render, GitHub, Postman`,
    tech: ["MERN Stack", "Stripe", "Tailwind", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop",
    github: "https://lnkd.in/eA5N4hCP",
    live: "https://smart-farm-system-deployed-frontend.onrender.com/",
  },
  {
    title: "Online Food Ordering System",
    shortDesc: "A Java-based food ordering platform using MVC architecture with MySQL database integration.",
    details: "A comprehensive food ordering system allowing users to browse menus, customize orders, and track deliveries. Built using Java Servlet technology following the MVC architecture pattern for clean code separation.",
    tech: ["Java", "MySQL", "MVC Architecture", "Tailwind"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    github: "https://lnkd.in/ek5nNNGw",
    live: "https://online-food-ordering-app-lfmu.onrender.com",
  },
  {
    title: "Online Movie Booking System",
    shortDesc: "A web-based movie ticket booking platform allowing users to select seats and book tickets.",
    details: "An online movie ticket booking system that allows users to view showtimes, select seats visually, and book tickets. Includes an admin panel for managing movies and shows.",
    tech: ["HTML", "JavaScript", "Tailwind", "PHP"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Mind Relax Mobile App Design",
    shortDesc: "A UI/UX design project for a mental health and meditation mobile application.",
    details: "High-fidelity prototype designed in Figma for a meditation app. Features include a calming color palette, user-friendly navigation for breathing exercises, and progress tracking screens.",
    tech: ["UI/UX", "Figma", "Prototyping"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Financial Tracker App Design",
    shortDesc: "Mobile application interface design for personal finance and expense tracking.",
    details: "A clean and modern UI design for tracking income and expenses. The design focuses on data visualization with charts, easy transaction entry, and budget management features.",
    tech: ["UI/UX", "Figma", "Prototyping"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/supuna18/Financial-App-Design",
    live: "#",
  },
  {
    title: "Habit Tracker Mobile App",
    shortDesc: "An android application built with Kotlin to help users build and maintain good habits.",
    details: "A native Android application developed using Kotlin. It uses Shared Preferences for local data storage to track daily habits, streaks, and completion rates.",
    tech: ["Kotlin", "Android Studio", "Shared Preferences"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
];

export const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-2">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Featured Projects</h1>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col h-full group"
            >
              {/* Image Section (Click to Open Modal) */}
              <div 
                className="relative h-48 overflow-hidden cursor-pointer" 
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                        View Details
                    </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm flex-grow">
                  {project.shortDesc}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-400 rounded-full">
                          +{project.tech.length - 3}
                      </span>
                  )}
                </div>

                {/* View Button */}
                <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 bg-white/5 hover:bg-primary hover:text-white rounded-lg transition-colors text-sm font-bold border border-white/10"
                >
                    View Project Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🟢 MODAL (POPUP) SECTION */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#151515] w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-red-500 rounded-full text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto custom-scrollbar flex flex-col md:flex-row h-full">
                
                {/* Left Side: Image (Sticky on Desktop) */}
                <div className="md:w-2/5 h-64 md:h-auto relative shrink-0">
                    <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] md:bg-gradient-to-r md:from-transparent md:to-[#151515] to-transparent"></div>
                </div>

                {/* Right Side: Details */}
                <div className="p-8 md:w-3/5 flex flex-col">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <p className="text-primary font-medium mb-6">{selectedProject.shortDesc}</p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {selectedProject.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Long Description */}
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line mb-8 text-sm md:text-base flex-grow">
                        {selectedProject.details}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                        {selectedProject.github !== "#" && (
                            <a 
                                href={selectedProject.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold transition-colors"
                            >
                                <FaGithub size={20} /> Source Code
                            </a>
                        )}
                        
                        {selectedProject.live !== "#" && (
                            <a 
                                href={selectedProject.live} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
                            >
                                <FaExternalLinkAlt size={18} /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};