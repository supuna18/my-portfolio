
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaClipboardCheck,
  FaCheckCircle,
  FaExchangeAlt,
  FaSyncAlt,
  FaCode,
  FaBug,
  FaChrome,
  FaRobot,
  FaBookOpen,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiJira,
} from "react-icons/si";

import { SiDotnet } from "react-icons/si";

// 1. Software Testing & QA
const qaSkills = [
  {
    name: "Manual Testing",
    icon: <FaClipboardCheck />,
    color: "#38bdf8",
  },
  {
    name: "Functional Testing",
    icon: <FaCheckCircle />,
    color: "#22c55e",
  },
  {
    name: "SIT & UAT",
    icon: <FaExchangeAlt />,
    color: "#a78bfa",
  },
  {
    name: "Regression Testing",
    icon: <FaSyncAlt />,
    color: "#f59e0b",
  },
  {
    name: "API Testing",
    icon: <FaCode />,
    color: "#06b6d4",
  },
  {
    name: "Defect Reporting",
    icon: <FaBug />,
    color: "#fb7185",
  },
];

// 2. QA & Development Tools
const qaTools = [
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "#ff6c37",
  },
  {
    name: "Jira",
    icon: <SiJira />,
    color: "#2684ff",
  },
  {
    name: "Chrome DevTools",
    icon: <FaChrome />,
    color: "#4285f4",
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub />,
    color: "#e2e8f0",
  },
];

// 3. Programming & Development
const developmentSkills = [
  {
    name: "Java",
    icon: <FaJava />,
    color: "#ed8b00",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#f7df1e",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "#3776ab",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61dafb",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#68a063",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38bdf8",
  },
  {
  name: ".NET",
  icon: <SiDotnet />,
  color: "#512BD4",
  },
];

// 4. Databases
const databaseSkills = [
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "#00758f",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47a248",
  },
];

// 5. Currently Learning
const learningSkills = [
  {
    name: "Playwright",
    icon: <FaRobot />,
    color: "#2ead33",
    description: "Web Test Automation",
  },
  {
    name: "Selenium",
    icon: <FaRobot />,
    color: "#a78bfa",
    description: "Browser Automation",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

// Reusable Skill Card
const SkillCard = ({ skill }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="
        p-6
        bg-white/5
        backdrop-blur-sm
        border border-white/10
        rounded-2xl
        flex flex-col
        items-center justify-center
        gap-4
        hover:border-primary/50
        hover:bg-white/10
        transition-colors
        group
        min-h-[155px]
      "
    >
      <div
        className="
          text-4xl md:text-5xl
          transition-transform
          duration-300
          group-hover:scale-110
        "
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>

      <h4 className="text-base md:text-lg font-semibold text-gray-200 group-hover:text-white text-center">
        {skill.name}
      </h4>
    </motion.div>
  );
};

// Reusable Category Section
const SkillCategory = ({ title, skills, number }) => {
  return (
    <div className="mb-14">

      <div className="flex items-center gap-3 mb-7">

        <span className="text-primary font-mono text-sm font-bold">
          {number}
        </span>

        <h3 className="text-xl md:text-2xl font-bold text-white">
          {title}
        </h3>

      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </motion.div>

    </div>
  );
};

// Main Skills Component
export const MySkills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-dark relative overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-2">
            My Toolbox
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Technical Skills & Tools
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Combining practical software testing experience
            with programming knowledge and modern
            development technologies.
          </p>

        </motion.div>

        {/* QA Skills */}
        <SkillCategory
          number="01"
          title="Software Testing & QA"
          skills={qaSkills}
        />

        {/* QA Tools */}
        <SkillCategory
          number="02"
          title="QA & Development Tools"
          skills={qaTools}
        />

        {/* Development Skills */}
        <SkillCategory
          number="03"
          title="Programming & Web Development"
          skills={developmentSkills}
        />

        {/* Databases */}
        <SkillCategory
          number="04"
          title="Databases"
          skills={databaseSkills}
        />

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >

          <div className="flex items-center gap-3 mb-4">

            <FaBookOpen className="text-primary text-2xl" />

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Currently Learning
            </h3>

          </div>

          <p className="text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Continuously expanding my skills in modern
            test automation frameworks and automated
            software quality assurance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">

            {learningSkills.map((skill) => (

              <motion.div
                key={skill.name}
                whileHover={{ y: -5 }}
                className="
                  p-6
                  bg-white/5
                  border border-primary/20
                  rounded-2xl
                  flex items-center
                  gap-5
                  hover:border-primary/50
                  hover:bg-white/10
                  transition-colors
                "
              >

                <div
                  className="text-4xl flex-shrink-0"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <div>

                  <h4 className="text-xl font-bold text-white">
                    {skill.name}
                  </h4>

                  <p className="text-gray-400 text-sm mt-1">
                    {skill.description}
                  </p>

                  <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    Learning
                  </span>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* Closing Text */}
        <div className="mt-16 text-center">

          <p className="text-gray-500 text-sm">
            Always learning, improving, and exploring
            new technologies.
          </p>

        </div>

      </div>
    </section>
  );
};
