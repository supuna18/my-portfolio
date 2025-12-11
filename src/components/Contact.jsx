import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser"; //Import emailJS

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs                                        //Connect emailjs web server   
      .sendForm(
        "service_7d6qhym",   // 1. Service ID 
        "template_n885cww",  // 2. Template ID 
        form.current,
        "ni6nAralfx3fqeTTz"    // 3. Public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message Sent Successfully!");
          e.target.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-dark text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-2">Get in Touch</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Contact Me</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">   
          
          {/* 1. Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold mb-6">Let's Talk About Your Project</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                        <FaEnvelope size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Mail me</p>
                        <p className="text-lg font-medium">supun18.work@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                        <FaPhone size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Call me</p>
                        <p className="text-lg font-medium">+94 77 476 2877</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                        <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="text-lg font-medium">Colombo, Sri Lanka</p>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* 2. Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="user_name" 
                      required 
                      className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                      placeholder="Your Name" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="user_email" 
                      required 
                      className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                      placeholder="your@email.com" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      required 
                      className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                      placeholder="Tell me about your project..."
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-lg hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2">
                    {status ? status : <>Send Message <FaPaperPlane /></>}
                </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};