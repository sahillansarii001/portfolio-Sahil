"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-linear-to-br from-slate-50 via-cyan-50 to-purple-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl"
        animate={{
          x: [-40, 40, -40],
          y: [-40, 40, -40],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-500/30 rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 py-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge with Animation */}
            <motion.div className="inline-block" variants={itemVariants}>
              <motion.span
                className="px-4 py-2 bg-white/90 backdrop-blur-md border border-cyan-200/50 text-cyan-700 rounded-full text-sm font-semibold shadow-lg inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  👋
                </motion.span>
                Welcome to my portfolio
              </motion.span>
            </motion.div>

            {/* Heading with Gradient and Effects */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-black">I&apos;m </span>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-purple-600 relative">
                  Sahil
                  <motion.span
                    className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 to-purple-600/20 blur-lg -z-10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </span>
              </span>
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 relative">
                  Ansari
                  <motion.span
                    className="absolute -inset-1 bg-linear-to-r from-purple-600/20 to-pink-600/20 blur-lg -z-10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </span>
              </span>
            </motion.h1>

            {/* Subtitle with Decorative Line */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                Web Developer & UI/UX Designer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Crafting seamless digital experiences where design meets
              functionality. Currently exploring AI/ML at Nexcore Institute of
              Technology.
            </motion.p>

            {/* CTA Buttons with Enhanced Effects */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold overflow-hidden shadow-lg text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="https://github.com/sahillansarii001"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all shadow-lg text-center relative overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">GitHub Profile</span>
                <motion.div
                  className="absolute inset-0 bg-cyan-50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Social Links with Enhanced Hover Effects */}
            <motion.div
              className="flex items-center gap-4 pt-6"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/sahillansarii001"
                target="_blank"
                className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center hover:border-cyan-500 hover:text-cyan-500 transition-all shadow-lg relative group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-cyan-500/10 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <svg
                  className="w-5 h-5 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sahil-ansari-50570b378"
                target="_blank"
                className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all shadow-lg relative group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-500/10 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <svg
                  className="w-5 h-5 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/saahillansari"
                target="_blank"
                className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition-all shadow-lg relative group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-pink-500/10 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <svg
                  className="w-5 h-5 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image - Enhanced Version */}
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative z-10">
              {/* Rotating Gradient Cards */}
              <motion.div
                className="w-full h-96 bg-linear-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl shadow-2xl transform rotate-3"
                animate={{
                  rotate: [3, 5, 3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Inner Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-3xl"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 w-full h-96 bg-linear-to-br from-purple-400 via-pink-500 to-red-500 rounded-3xl shadow-2xl transform -rotate-3"
                animate={{
                  rotate: [-3, -5, -3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                {/* Inner Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-3xl"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
              </motion.div>

              {/* Profile Image Container */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={floatingAnimation}
              >
                <motion.div
                  className="relative w-64 h-64 bg-white rounded-full shadow-xl flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Border Ring */}
                  <motion.div
                    className="absolute -inset-2 bg-linear-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-full opacity-75 blur-md"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Image Container */}
                  <div className="relative z-10 w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src="/Sahil.webp"
                      alt="Sahil Ansari"
                      width={240}
                      height={240}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>

                  {/* Orbiting Dots */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                      }}
                      animate={{
                        rotate: 360,
                        x: [0, 140 * Math.cos((i * 120 * Math.PI) / 180)],
                        y: [0, 140 * Math.sin((i * 120 * Math.PI) / 180)],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Corner Decorative Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 border-4 border-cyan-400 rounded-2xl"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 border-4 border-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}