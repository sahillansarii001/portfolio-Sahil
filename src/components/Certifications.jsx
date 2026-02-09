"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const certifications = [
    {
      id: 1,
      title: "AI Tools and ChatGPT Workshop",
      issuer: "be10x",
      date: "January 25, 2026",
      image: "/be10x.jpeg",
      verificationLink:
        "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997967279",
      certificateId: "0270772f-3809-4400-b29b-1e1c61cd0997967279",
      skills: [
        "AI Tools",
        "ChatGPT",
        "Presentations",
        "Data Analysis",
        "Coding & Debugging",
      ],
      description:
        "Successfully completed workshop on AI tools with focus on creating presentations, analyzing data, and coding using AI.",
      detailedDescription:
        "This comprehensive workshop covered the practical applications of AI tools in everyday workflows. Key learnings included creating professional presentations in under 5 minutes using AI, analyzing complex data sets in under 30 minutes, and coding & debugging efficiently in under 10 minutes using AI-powered tools.",
      achievements: [
        "Create presentations using AI in under 5 min",
        "Analyse data using AI in under 30 min",
        "Code and Debug using AI in under 10 min",
      ],
      instructors: ["Aditya Goenka", "Aditya Kachave"],
    },
    {
      id: 2,
      title: "Yuva AI For ALL - English",
      issuer: "AISECT Learn (INDIAai)",
      date: "January 20, 2026",
      image: "/Yuva.jpeg",
      verificationLink:
        "https://courses.aisectlearn.com/mod/customcert/view.php?id=62338&downloadown=1",
      certificateId: "h4d6xHSNkd",
      skills: [
        "AI Fundamentals",
        "Machine Learning Basics",
        "AI Applications",
        "Ethics in AI",
      ],
      description:
        "Completed comprehensive AI program offered by AISECT LEARN.",
      detailedDescription:
        "A comprehensive program designed to introduce AI concepts to young learners. The course covered fundamental AI concepts, machine learning basics, real-world AI applications, and ethical considerations in AI development.",
      achievements: [
        "Understanding of AI fundamentals and terminology",
        "Knowledge of machine learning concepts",
        "Awareness of AI applications across industries",
        "Understanding of ethical AI practices",
      ],
      organization: "AISECT LTD. (A unit of AISECT LTD.)",
    },
    {
      id: 3,
      title: "AI For All - AI Appreciate Stage",
      issuer: "Intel & Digital India",
      date: "January 5, 2026",
      image: "/APPRECIATE.png",
      verificationLink:
        "https://ai-for-all.in/#/badge?id=U2FsdGVkX1p1L2u3S8oT1dBp1L2u3SYd53fqHsX9nMzcDjyhTO6zp1L2u3S2ce1Q2u3A4l",
      certificateId:
        "U2FsdGVkX1p1L2u3S8oT1dBp1L2u3SYd53fqHsX9nMzcDjyhTO6zp1L2u3S2ce1Q2u3A4l",
      skills: [
        "AI Awareness",
        "Digital Literacy",
        "Technology Trends",
        "AI Impact",
      ],
      description:
        "Completed AI Appreciate stage of the AI For All program by Intel and Digital India.",
      detailedDescription:
        "This stage of the AI For All program focused on appreciating the impact and potential of AI technologies. Participants learned to recognize AI applications in daily life and understand how AI is transforming various sectors.",
      achievements: [
        "Recognition of AI applications in everyday life",
        "Understanding AI's impact on society",
        "Knowledge of AI trends and future possibilities",
        "Digital literacy enhancement",
      ],
      partners: [
        "Intel",
        "Digital India",
        "Central Board of Secondary Education",
      ],
      program: "एआई फॉर ऑल (AI For All Program)",
    },
    {
      id: 4,
      title: "AI For All - AI Aware Stage",
      issuer: "Intel & Digital India",
      date: "January 5, 2026",
      image: "/AWARE.png",
      verificationLink:
        "https://ai-for-all.in/#/badge?id=U2FsdGVkX18ig6VnIuyp1L2u3Sfvo5CJhV219CQg9QG9GHRzMe1Q2u3A4l",
      certificateId:
        "U2FsdGVkX18ig6VnIuyp1L2u3Sfvo5CJhV219CQg9QG9GHRzMe1Q2u3A4l",
      skills: [
        "AI Fundamentals",
        "Technology Awareness",
        "Basic AI Concepts",
        "Digital Skills",
      ],
      description:
        "Completed AI Aware stage of the AI For All program by Intel and Digital India.",
      detailedDescription:
        "The AI Aware stage introduced fundamental concepts of artificial intelligence and its role in modern technology. This foundational program aimed at building awareness about AI technologies and their applications.",
      achievements: [
        "Basic understanding of AI concepts",
        "Awareness of AI technologies",
        "Foundation in digital skills",
        "Knowledge of AI's role in technology",
      ],
      partners: [
        "Intel",
        "Digital India",
        "Central Board of Secondary Education",
      ],
      program: "एआई फॉर ऑल (AI For All Program)",
    },
    {
      id: 5,
      title: "HTML, CSS, and JavaScript: Building the Web",
      issuer: "LinkedIn Learning",
      date: "December 6, 2025",
      duration: "3 hours 37 minutes",
      image: "/Web.jpeg",
      verificationLink:
        "https://www.linkedin.com/learning/certificates/622f891b2f81b8590f58a89a33942ba958d68f1e409c3ae304d1b1a1dcd3b987",
      certificateId:
        "622f891b2f81b5f90f58a8f9a33942ba968d681e409c3ae304d1b1a1dad3b987",
      skills: [
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "Cascading Style Sheets (CSS)",
        "Responsive Design",
      ],
      description:
        "Completed comprehensive course on web development fundamentals covering HTML, CSS, and JavaScript.",
      detailedDescription:
        "A comprehensive course covering the three core technologies of web development. This course provided hands-on experience in building modern, responsive websites from scratch using HTML for structure, CSS for styling, and JavaScript for interactivity.",
      achievements: [
        "Master HTML5 semantic elements and structure",
        "Create responsive layouts with modern CSS",
        "Build interactive features with JavaScript",
        "Understand web development best practices",
        "Create complete web pages from scratch",
      ],
      instructor: "Shea Hanson, Head of Learning Content Strategy",
    },
    {
      id: 6,
      title: "Prompt Engineering for Everyone",
      issuer: "IBM SkillsBuild",
      date: "December 6, 2025",
      image: "/PromptEngineering.jpeg",
      verificationLink:
        "https://courses.skillsbuild.ibmclientcenter.cn/certificates/0f6f3d3605e44d9ead94dcdf5ec2eb51",
      courseCode: "AI0117EN",
      certificateId: "0f6f3d8605e44d9ead94dcdf5ec2eb51",
      skills: [
        "Prompt Engineering",
        "AI",
        "LLMs",
        "ChatGPT",
        "Generative AI",
        "AI Communication",
      ],
      description:
        "Successfully completed IBM's course on prompt engineering fundamentals and best practices.",
      detailedDescription:
        "An in-depth course on the art and science of prompt engineering for large language models. This course covered techniques for crafting effective prompts, understanding AI model behavior, and maximizing the utility of AI tools in various applications.",
      achievements: [
        "Master prompt engineering techniques",
        "Understand LLM behavior and limitations",
        "Create effective prompts for various use cases",
        "Apply best practices in AI communication",
        "Optimize AI outputs for specific tasks",
      ],
      provider: "IBM SkillsBuild Network",
      platform: "skillsbuild.ibmclientcenter.cn",
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <section id="certifications" className="py-20 select-none bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-cyan-500 font-semibold text-sm tracking-wide uppercase"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Achievements
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-2"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Certifications
            </motion.h2>
            <motion.p
              className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Professional certifications demonstrating expertise in AI, web
              development, and emerging technologies
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                onClick={() => openModal(cert)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cyan-300 group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Certificate Image */}
                <div className="h-48 bg-linear-to-br from-cyan-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Click indicator */}
                  <motion.div
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-cyan-600"
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Click for details
                  </motion.div>
                </div>

                <div className="p-6">
                  {/* Issuer Badge */}
                  <motion.div
                    className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-semibold rounded-full mb-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    {cert.issuer}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-14">
                    {cert.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{cert.date}</span>
                    {cert.duration && (
                      <span className="text-gray-400">• {cert.duration}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(cert);
                    }}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Link */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.linkedin.com/in/sahil-ansari-50570b378"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
              >
                View All Certifications on LinkedIn
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={closeModal}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
                variants={modalContentVariants}
              >
                {/* Modal Header - Sticky */}
                <div className="sticky top-0 bg-linear-to-r from-cyan-500 to-purple-600 text-white px-5 py-4 md:px-6 md:py-5 z-10 shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <motion.div
                      className="flex-1 min-w-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3">
                        {selectedCert.issuer}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                        {selectedCert.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>{selectedCert.date}</span>
                        </div>
                        {selectedCert.duration && (
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{selectedCert.duration}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                    <motion.button
                      onClick={closeModal}
                      className="shrink-0 p-2 hover:bg-white/20 rounded-full transition-colors"
                      aria-label="Close modal"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Modal Content - Scrollable */}
                <div
                  className="overflow-y-auto flex-1 scrollbar-hide"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  <div className="p-5 md:p-6">
                    {/* Certificate Image */}
                    <motion.div
                      className="mb-6 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className="w-full h-auto object-contain bg-white"
                      />
                    </motion.div>

                    {/* Certificate Details */}
                    <div className="space-y-5">
                      {/* Description */}
                      <motion.div
                        className="bg-linear-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-cyan-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          About This Certification
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {selectedCert.detailedDescription}
                        </p>
                      </motion.div>

                      {/* Key Achievements */}
                      {selectedCert.achievements && (
                        <motion.div
                          className="bg-linear-to-br from-green-50 to-white p-4 rounded-xl border border-green-100"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
                          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Key Learning Outcomes
                          </h3>
                          <ul className="space-y-2">
                            {selectedCert.achievements.map(
                              (achievement, index) => (
                                <motion.li
                                  key={index}
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.5 + index * 0.1,
                                  }}
                                >
                                  <svg
                                    className="w-4 h-4 text-green-600 mt-0.5 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-gray-700 text-sm">
                                    {achievement}
                                  </span>
                                </motion.li>
                              ),
                            )}
                          </ul>
                        </motion.div>
                      )}

                      {/* Skills */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          Skills Acquired
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                          {selectedCert.skills.map((skill, index) => (
                            <motion.span
                              key={index}
                              className="px-4 py-2 bg-linear-to-r from-cyan-50 to-purple-50 text-cyan-700 text-sm font-medium rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.6 + index * 0.05,
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Additional Info */}
                      <motion.div
                        className="bg-linear-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                          Additional Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedCert.certificateId && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 mb-1.5">
                                Certificate ID
                              </p>
                              <p className="font-mono text-xs text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200 break-all">
                                {selectedCert.certificateId}
                              </p>
                            </div>
                          )}
                          {selectedCert.courseCode && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 mb-1.5">
                                Course Code
                              </p>
                              <p className="font-mono text-xs text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                                {selectedCert.courseCode}
                              </p>
                            </div>
                          )}
                          {selectedCert.instructor && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 mb-1.5">
                                Instructor
                              </p>
                              <p className="text-xs text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                                {selectedCert.instructor}
                              </p>
                            </div>
                          )}
                          {selectedCert.instructors && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 mb-1.5">
                                Instructors
                              </p>
                              <p className="text-xs text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                                {selectedCert.instructors.join(", ")}
                              </p>
                            </div>
                          )}
                          {selectedCert.organization && (
                            <div className="md:col-span-2">
                              <p className="text-xs font-semibold text-gray-500 mb-1.5">
                                Organization
                              </p>
                              <p className="text-xs text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                                {selectedCert.organization}
                              </p>
                            </div>
                          )}
                          {selectedCert.partners && (
                            <div className="md:col-span-2">
                              <p className="text-xs font-semibold text-gray-500 mb-1.5">
                                Partners
                              </p>
                              <p className="text-xs text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                                {selectedCert.partners.join(", ")}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>

                      {/* Verification Link */}
                      {selectedCert.verificationLink && (
                        <motion.div
                          className="pt-2 flex justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.8 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              href={selectedCert.verificationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm rounded-xl hover:shadow-xl transition-all duration-300 group"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                              </svg>
                              View Certificate
                              <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{ x: 4, y: -4 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </motion.svg>
                            </Link>
                          </motion.div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
