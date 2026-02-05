"use client";

import { motion } from "framer-motion";

export default function Contact() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">
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
            Get In Touch
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 text-lg"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Have a project in mind? Let's create something amazing!
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Email Card */}
          <motion.div
            variants={cardVariants}
            onClick={() =>
              (window.location.href = "mailto:sahillansarii001@gmail.com")
            }
            className="group relative overflow-hidden bg-white rounded-2xl p-8 border border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl cursor-pointer"
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-cyan-100 to-cyan-50 rounded-full -mr-16 -mt-16"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative">
              <motion.div
                className="w-14 h-14 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Me</h3>
              <p className="text-gray-600 text-sm mb-3">
                Drop me a line anytime
              </p>
              <p className="text-cyan-600 font-semibold group-hover:text-cyan-700">
                sahillansarii001@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={cardVariants}
            onClick={() => (window.location.href = "tel:+919967747153")}
            className="group relative overflow-hidden bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl cursor-pointer"
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-purple-100 to-purple-50 rounded-full -mr-16 -mt-16"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative">
              <motion.div
                className="w-14 h-14 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Me</h3>
              <p className="text-gray-600 text-sm mb-3">Mon - Fri, 9am - 6pm</p>
              <p className="text-purple-600 font-semibold group-hover:text-purple-700">
                +91 9967747153
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Connect With Me
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* GitHub */}
            <motion.a
              variants={socialCardVariants}
              href="https://github.com/sahillansarii001"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:from-gray-900 hover:to-gray-800 transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-12 h-12 bg-white group-hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg
                  className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 group-hover:text-white transition-colors">
                  GitHub
                </p>
                <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">
                  View my projects
                </p>
              </div>
              <motion.svg
                className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
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
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              variants={socialCardVariants}
              href="https://www.linkedin.com/in/sahil-ansari-50570b378"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-12 h-12 bg-white group-hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg
                  className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 group-hover:text-white transition-colors">
                  LinkedIn
                </p>
                <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors">
                  Let's connect
                </p>
              </div>
              <motion.svg
                className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
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
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              variants={socialCardVariants}
              href="https://www.instagram.com/saahillansari"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-linear-to-br from-pink-50 to-rose-100 rounded-xl p-6 hover:from-pink-500 hover:to-rose-600 transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-12 h-12 bg-white group-hover:bg-pink-400 rounded-lg flex items-center justify-center transition-colors shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg
                  className="w-7 h-7 text-pink-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 group-hover:text-white transition-colors">
                  Instagram
                </p>
                <p className="text-sm text-gray-600 group-hover:text-pink-100 transition-colors">
                  Follow me
                </p>
              </div>
              <motion.svg
                className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
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
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
