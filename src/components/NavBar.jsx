"use client";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-purple-600"
          >
            Sahil Ansari
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              Contact
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
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
          </div>

        </div>
      </div>
    </nav>
  );
}
