"use client";

import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-purple-600"
            onClick={closeMobileMenu}
          >
            Sahil Ansari
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
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
              </svg>
            ) : (
              <svg
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
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg px-6">
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2 border-b border-gray-100"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-full text-center hover:shadow-lg transform hover:scale-105 transition-all font-medium"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
