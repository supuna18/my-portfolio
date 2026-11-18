
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaAward,
  FaExternalLinkAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

export const About = () => {

  // Professional Experience
  const experience = {
    title: "Quality Assurance (QA) Intern",
    company: "Berendina Micro Investments Company Limited",
    period: "26 Apr 2026 – 26 Oct 2026",
    duration: "6-Month Internship",
    location: "Nawala,Colombo, Sri Lanka",

    description:
      "Gained hands-on experience in software quality assurance within the microfinance sector, contributing to the testing and validation of ERP systems and mobile applications during a core ERP modernization project.",

    responsibilities: [
      "Performed manual and functional testing of ERP workflows and mobile application features against business requirements.",

      "Executed System Integration Testing (SIT), User Acceptance Testing (UAT), and regression testing during a legacy-to-modern core ERP migration.",

      "Validated microfinance loan lifecycles, interest calculations, fee structures, and financial transaction workflows.",

      "Verified migrated data by comparing legacy and new ERP records for accuracy, integrity, and financial reconciliation.",

      "Documented defects and collaborated with business analysts, project leads, and vendor engineering teams on issue clarification and retesting.",
    ],

    skills: [
      "Manual Testing",
      "Functional Testing",
      "SIT",
      "UAT",
      "Regression Testing",
      "ERP Testing",
      "Data Validation",
      "Defect Reporting",
    ],
  };

  // Education
  const education = [
    {
      year: "2024 - Present",
      title: "BSc (Hons) in Information Technology",
      place: "SLIIT",
      desc: "Reading for my honors degree, specializing in Information Technology, with interests in software quality assurance, testing, and full-stack application development.",
    },
    {
      year: "2012 - 2022",
      title: "G.C.E. Advanced Level (Physical Science)",
      place: "Siridhamma College, Galle",
      desc: "Successfully passed A/L exams in Physical Science stream. Achieved 9 Distinction passes (9A) in G.C.E. Ordinary Level examination.",
    },
    {
      year: "2007 - 2012",
      title: "Primary Education",
      place: "Dr. Richard Pathirana College, Galle",
      desc: "Completed primary education and successfully passed the Grade 5 Scholarship Examination.",
    },
  ];

  // Certifications
  const certifications = [
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      year: "2025",
      link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    },
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      year: "2025",
      link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    },
    {
      title: "Introduction to Responsible AI",
      issuer: "Google",
      year: "2025",
      link: "https://www.cloudskillsboost.google/public_profiles/749bfd80-7156-4d00-aaa5-c0508f1838a4/badges/13504443?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Introduction to Graphic Design; Basics of UI/UX",
      issuer: "Simplilearn",
      year: "2025",
      link: "https://simpli-web.app.link/e/0ZOYKuFjFUb",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-dark text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-primary text-lg font-bold tracking-wide uppercase mb-2">
            My Journey
          </h2>

          <h1 className="text-3xl md:text-5xl font-bold">
            Professional & Academic Journey
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            A journey of continuous learning, practical industry
            experience, and professional growth in software engineering
            and quality assurance.
          </p>
        </motion.div>

        {/* ====================================
            PROFESSIONAL EXPERIENCE
        ==================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-8">
            <FaBriefcase className="text-primary" />
            Professional Experience
          </h3>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-primary/40 transition-colors duration-300 shadow-xl"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary" />

            <div className="p-6 md:p-9">

              {/* Job Title and Company */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {experience.title}
                  </h4>

                  <p className="text-primary font-semibold text-lg">
                    {experience.company}
                  </p>
                </div>

                <span className="w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold whitespace-nowrap">
                  {experience.duration}
                </span>
              </div>

              {/* Date and Location */}
              <div className="flex flex-wrap gap-x-7 gap-y-3 mt-5 text-sm text-gray-400">

                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-primary" />
                  {experience.period}
                </span>

                <a
  href="https://www.google.com/maps/search/?api=1&query=Berendina%20Group%20Head%20Office%2C%2044%2F3%20Narahenpita%20Road%2C%20Nawala%2C%20Sri%20Lanka"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
  title="View company location on Google Maps"
>
  <FaMapMarkerAlt className="text-primary" />

  <span className="group-hover:underline">
    {experience.location}
  </span>

  <FaExternalLinkAlt className="text-xs opacity-60 group-hover:opacity-100" />
</a>

              </div>

              <div className="h-px bg-white/10 my-7" />

              {/* Experience Description */}
              <p className="text-gray-300 leading-relaxed mb-8 max-w-5xl">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <h5 className="text-lg font-bold text-white mb-5">
                Key Responsibilities & Contributions
              </h5>

              <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">

                {experience.responsibilities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              {/* Skills and Technologies */}
              <div className="mt-9 pt-7 border-t border-white/10">

                <h5 className="text-sm uppercase tracking-wider font-semibold text-gray-300 mb-4">
                  Skills & Areas of Experience
                </h5>

                <div className="flex flex-wrap gap-2">

                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* ====================================
            EDUCATION & CERTIFICATIONS
        ==================================== */}

        <div className="grid md:grid-cols-2 gap-10 relative">

          {/* Center Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >

            <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
              <FaGraduationCap className="text-primary text-3xl" />
              Academic Background
            </h3>

            <div className="space-y-8">

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />

                  <span className="text-sm text-primary font-mono mb-1 block">
                    {edu.year}
                  </span>

                  <h4 className="text-xl font-bold">
                    {edu.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-2">
                    {edu.place}
                  </p>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              ))}

            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >

            <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
              <FaAward className="text-primary text-3xl" />
              Professional Certifications
            </h3>

            <div className="grid gap-4">

              {certifications.map((cert, index) => (
                <motion.a
                  href={cert.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center gap-4 hover:border-primary/50 transition-colors group"
                >

                  <div>
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-sm text-gray-400">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 flex-shrink-0">

                    <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                      {cert.year}
                    </span>

                    <FaExternalLinkAlt
                      className="text-gray-500 group-hover:text-white transition-colors"
                      size={14}
                    />

                  </div>
                </motion.a>
              ))}

            </div>
          </motion.div>
        </div>

        {/* ====================================
            CV DOWNLOAD SECTION
        ==================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building on practical industry experience and a strong
            foundation in software engineering, I am eager to
            contribute to delivering reliable, high-quality software.
          </p>

          <a
            href="/Supun_Anjana_QA_CV_.pdf"
            download="Supun_Anjana_QA_CV_.pdf"
            className="inline-block px-8 py-3 bg-[#2563eb] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
          >
            Download My CV
          </a>

        </motion.div>

      </div>
    </section>
  );
};
