"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Internships() {
  const [selectedInternship, setSelectedInternship] = useState(null);

  useEffect(() => {
    if (selectedInternship) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedInternship]);

  const internships = [
    {
      id: 1,
      role: "Figma Web Development Intern",
      company: "Codtech IT Solutions Pvt. Ltd.",
      location: "Remote",
      duration: "4 Weeks",
      period: "March 10, 2026 – April 7, 2026",
      internId: "CTIS6786",
      status: "Completed",
      logo: "/codtech-logo.png",
      offerLetterImage: "/codtech-offer-letter.png",
      completionCertImage: "/codtech-internship-certificate.jpeg",
      description:
        "Selected for a structured internship in Figma Web Development at an ISO 9001 certified IT company. The program focuses on UI/UX design, prototyping, and real-world web development workflows.",
      skills: [
        "Figma",
        "UI/UX Design",
        "Web Development",
        "Prototyping",
        "Wireframing",
      ],
      achievements: [
        "Selected for Figma Web Development track",
        "4-week structured internship with hands-on projects",
        "Working under professional supervision at ISO 9001 certified company",
        "Collaborating with development teams on real-world tasks",
      ],
    },
  ];

  const openModal = (internship) => setSelectedInternship(internship);
  const closeModal = () => setSelectedInternship(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <>
      <section id="internships" className="py-20 select-none bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
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
              Work Experience
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-2"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Internships
            </motion.h2>
            <motion.p
              className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Real-world industry experience through structured internship
              programs
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {internships.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                onClick={() => openModal(item)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cyan-300 cursor-pointer group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Top Banner */}
                <div className="bg-linear-to-br from-cyan-500 to-purple-600 px-6 pt-6 pb-5 relative">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                      item.status === "ongoing"
                        ? "bg-amber-100 text-amber-700 border border-amber-300"
                        : "bg-green-100 text-green-700 border border-green-300"
                    }`}
                  >
                    {item.status === "ongoing" ? "🟡 Ongoing" : "✅ Completed"}
                  </div>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-3 overflow-hidden">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="w-full h-full object-contain p-1"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div
                      className="w-full h-full items-center justify-center"
                      style={{ display: item.logo ? "none" : "flex" }}
                    >
                      <svg
                        className="w-8 h-8 text-cyan-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-wide">
                    {item.company}
                  </p>
                  <h3 className="text-white text-md font-bold mt-0.5 leading-snug">
                    {item.role}
                  </h3>
                  <div className="absolute top-4 right-4 flex flex-col gap-1 items-end">
                    <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                      📄 Offer Letter
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full backdrop-blur-sm ${
                        item.completionCertImage
                          ? "bg-white/20 text-white"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      🎓{" "}
                      {item.completionCertImage
                        ? "Certificate"
                        : "Cert. Pending"}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
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
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
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
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {item.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        +{item.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(item);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 sm:px-5 sm:py-3 px-4 py-2 bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details & Documents
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedInternship && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={closeModal}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
                variants={modalContentVariants}
              >
                {/* Modal Header — compact on mobile */}
                <div className="sticky top-0 bg-linear-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 md:px-6 md:py-4 z-10 shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <motion.div
                      className="flex-1 min-w-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {/* Company name — small, single line */}
                      <p className="text-white/70 text-xs font-medium truncate mb-0.5">
                        {selectedInternship.company}
                      </p>
                      {/* Role — single line with truncate on mobile */}
                      <h2 className="text-sm md:text-xl font-bold leading-tight truncate">
                        {selectedInternship.role}
                      </h2>
                      {/* Date + Duration — inline, small */}
                      <div className="flex items-center gap-3 mt-1 text-white/75 text-xs flex-wrap">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-3 h-3 shrink-0"
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
                          <span className="whitespace-nowrap">
                            {selectedInternship.period}
                          </span>
                        </div>
                        <span className="text-white/40">·</span>
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-3 h-3 shrink-0"
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
                          <span>{selectedInternship.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                    {/* Close button */}
                    <motion.button
                      onClick={closeModal}
                      className="shrink-0 p-1.5 hover:bg-white/20 rounded-full transition-colors"
                      aria-label="Close modal"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Modal Scrollable Content */}
                <div
                  className="overflow-y-auto flex-1"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  <div className="p-5 md:p-6 space-y-5">
                    {/* Offer Letter */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
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
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Offer Letter
                      </h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                        <img
                          src={selectedInternship.offerLetterImage}
                          alt="Internship Offer Letter"
                          className="w-full h-auto object-contain bg-white"
                        />
                      </div>
                    </motion.div>

                    {/* Completion Certificate */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 }}
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
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        Completion Certificate
                      </h3>
                      {selectedInternship.completionCertImage ? (
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                          <img
                            src={selectedInternship.completionCertImage}
                            alt="Completion Certificate"
                            className="w-full h-auto object-contain bg-white"
                          />
                        </div>
                      ) : (
                        <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg
                              className="w-6 h-6 text-gray-400"
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
                          </div>
                          <p className="text-gray-500 text-sm font-medium">
                            Certificate Pending
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            Will be added upon internship completion on April 7,
                            2026
                          </p>
                        </div>
                      )}
                    </motion.div>

                    {/* About */}
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
                        About This Internship
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {selectedInternship.description}
                      </p>
                    </motion.div>

                    {/* Key Highlights */}
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
                        Key Highlights
                      </h3>
                      <ul className="space-y-2">
                        {selectedInternship.achievements.map((a, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
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
                            <span className="text-gray-700 text-sm">{a}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

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
                        Skills Gained
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {selectedInternship.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            className="px-4 py-2 bg-linear-to-r from-cyan-50 to-purple-50 text-cyan-700 text-sm font-medium rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.6 + i * 0.05,
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
                      transition={{ duration: 0.4, delay: 0.6 }}
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
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1.5">
                            Intern ID
                          </p>
                          <p className="font-mono text-xs text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                            {selectedInternship.internId}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1.5">
                            Location
                          </p>
                          <p className="text-xs text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                            {selectedInternship.location}
                          </p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs font-semibold text-gray-500 mb-1.5">
                            Organization
                          </p>
                          <p className="text-xs text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                            {selectedInternship.company} — ISO 9001 Certified,
                            AICTE Approved
                          </p>
                        </div>
                      </div>
                    </motion.div>
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
