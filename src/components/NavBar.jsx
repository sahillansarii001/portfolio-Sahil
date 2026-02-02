"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-purple-600"
            onClick={closeMobileMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sahil Ansari
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#home"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#skills"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.a>
            <motion.a
              href="#contact"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
              custom={4}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
              custom={5}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 text-gray-700"
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
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col space-y-4 py-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg px-6 mt-4">
                <motion.a
                  href="#home"
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
                  custom={0}
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
                  custom={1}
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.a>
                <motion.a
                  href="#projects"
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
                  custom={2}
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  Projects
                </motion.a>
                <motion.a
                  href="#skills"
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
                  custom={3}
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  Skills
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
                  custom={4}
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-full text-center hover:shadow-lg transform hover:scale-105 transition-all font-medium"
                  custom={5}
                  variants={mobileItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let&apos;s Talk
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
