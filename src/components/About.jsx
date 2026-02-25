"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const specialtyItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="about" className="py-20 select-none bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <span className="text-cyan-500 font-semibold text-sm tracking-wide uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Who I Am
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left Column */}
          <div className="space-y-6">
            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={itemVariants}
            >
              I&apos;m a passionate{" "}
              <span className="font-semibold text-cyan-600">Web Developer</span>{" "}
              and{" "}
              <span className="font-semibold text-purple-600">
                UI/UX Designer
              </span>{" "}
              with a keen eye for creating beautiful, functional digital
              experiences. Currently pursuing my studies in{" "}
              <span className="font-semibold">
                Artificial Intelligence &amp; Machine Learning
              </span>{" "}
              at Nexcore Institute of Technology.
            </motion.p>

            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={itemVariants}
            >
              My approach combines technical expertise with creative design
              thinking. I believe in building products that not only look
              stunning but also solve real problems and deliver exceptional user
              experiences.
            </motion.p>

            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={itemVariants}
            >
              From pixel-perfect interfaces to clean, efficient code, I&apos;m
              committed to delivering quality work that exceeds expectations.
              I&apos;m always exploring new technologies and design trends to
              stay ahead in this ever-evolving digital landscape.
            </motion.p>

            <motion.div className="pt-6" variants={itemVariants}>
              <motion.a
                href="https://www.linkedin.com/in/sahil-ansari-50570b378"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Connect on LinkedIn
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
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Education Card */}
            <motion.div
              className="bg-linear-to-br from-cyan-50 to-purple-50 rounded-2xl p-8 border border-cyan-100"
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Education
                  </h3>
                  <p className="text-gray-700 font-semibold">
                    Nexcore Institute of Technology
                  </p>
                  <p className="text-gray-600">
                    Artificial Intelligence &amp; Machine Learning
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.div
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-500 transition-colors"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="text-3xl font-bold text-cyan-500 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                >
                  9+
                </motion.div>
                <div className="text-gray-600 font-medium">
                  Projects Completed
                </div>
              </motion.div>

              <motion.div
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-500 transition-colors"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="text-3xl font-bold text-purple-500 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                >
                  15+
                </motion.div>
                <div className="text-gray-600 font-medium">Skills Mastered</div>
              </motion.div>
            </motion.div>

            {/* Specialties */}
            <motion.div
              className="bg-white border-2 border-gray-200 rounded-2xl p-8"
              variants={cardVariants}
              whileHover={{ borderColor: "#06b6d4" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What I Specialize In
              </h3>

              <div className="space-y-3">
                {[
                  "Responsive Web Development",
                  "User Interface Design",
                  "User Experience Design",
                  "Frontend Development",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={specialtyItemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
