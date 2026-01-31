"use client";

import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'development', label: 'Development' },
    { id: 'uiux', label: 'UI/UX Design' },
  ];

  const projects = [
    // Development Projects
    {
      id: 1,
      category: 'development',
      title: 'BookMyShow Clone',
      desc: 'Movie ticket booking platform with seat selection and dynamic content management.',
      fullDescription: 'A comprehensive movie ticket booking platform that replicates the core functionality of BookMyShow. Features include real-time seat selection, multiple cinema locations, show timings, and a responsive design optimized for all devices.',
      image: '/BookMyShow.png',
      tech: ['HTML', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/bookmyshow-clone',
    },
    {
      id: 2,
      category: 'development',
      title: 'Eldar Gilmonav Website',
      desc: 'Professional website with smooth animations and elegant interface design.',
      fullDescription: 'A modern, professional portfolio website featuring smooth scroll animations, elegant typography, and an intuitive user interface. Built with performance and accessibility in mind.',
      image: '/EldarGilmonav.png',
      tech: ['HTML', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/eldar-gilmonav',
    },
    {
      id: 3,
      category: 'development',
      title: 'Travels Website',
      desc: 'Interactive travel platform with destination showcases and booking features.',
      fullDescription: 'An engaging travel website showcasing popular destinations with beautiful imagery, travel packages, and booking capabilities. Includes interactive maps and destination galleries.',
      image: '/TravelsWebsite.png',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/yourusername/travels-website',
    },
    // UI/UX Projects
    {
      id: 4,
      category: 'uiux',
      title: 'Blinkit App Clone',
      desc: 'UI/UX design focused on clean layouts and smooth user flow.',
      fullDescription: 'A complete UI/UX redesign of the Blinkit grocery delivery app, focusing on improving user experience, simplifying the checkout process, and creating a more intuitive product discovery flow.',
      image: '/blinkit.png',
      tech: ['Figma'],
      figma: 'https://www.figma.com/file/your-blinkit-design',
    },
    {
      id: 5,
      category: 'uiux',
      title: 'Gozoop Website Clone',
      desc: 'UI/UX design focused on clean layouts and smooth user flow.',
      fullDescription: 'A modern take on the Gozoop agency website, emphasizing bold typography, creative layouts, and engaging interactions that showcase the agency\'s creative capabilities.',
      image: '/gozoop.png',
      tech: ['Figma'],
      figma: 'https://www.figma.com/file/your-gozoop-design',
    },
    {
      id: 6,
      category: 'uiux',
      title: 'Snapdeal Clone',
      desc: 'UI/UX design focused on clean layouts and smooth user flow.',
      fullDescription: 'E-commerce platform redesign with improved product discovery, streamlined checkout process, and enhanced mobile shopping experience.',
      image: '/snapdeal.png',
      tech: ['Figma'],
      figma: 'https://www.figma.com/file/your-snapdeal-design',
    },
    {
      id: 7,
      category: 'uiux',
      title: 'Smartwatch UI',
      desc: 'UI/UX design focused on clean layouts and smooth user flow.',
      fullDescription: 'Intuitive smartwatch interface design optimized for small screens, featuring health tracking, notifications, and quick actions with minimal user input.',
      image: '/smartwatch.png',
      tech: ['Figma'],
      figma: 'https://www.figma.com/file/your-smartwatch-design',
    },
    {
      id: 8,
      category: 'uiux',
      title: 'Travels Website',
      desc: 'UI/UX design focused on clean layouts and smooth user flow.',
      fullDescription: 'Travel booking platform design featuring immersive destination imagery, simplified booking flows, and personalized travel recommendations.',
      image: '/travels-ui.png',
      tech: ['Figma'],
      figma: 'https://www.figma.com/file/your-travels-design',
    },
  ];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <>
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-semibold text-sm tracking-wide uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
              Featured Projects
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              A collection of my recent work in development and design
            </p>
          </div>

          {/* Desktop Category Filter */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-lg shadow-md p-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden flex justify-center mb-8">
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md font-semibold text-gray-900 hover:shadow-lg transition-shadow"
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
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
              <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold">
                {categories.find((c) => c.id === selectedCategory)?.label}
              </span>
            </button>
          </div>

          {/* Mobile Filter Dropdown */}
          {showMobileFilter && (
            <div className="md:hidden mb-8 bg-white rounded-lg shadow-lg p-4 space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowMobileFilter(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {/* Development Projects Section */}
          {(selectedCategory === 'all' || selectedCategory === 'development') && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Development Projects
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.category === 'development')
                  .map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                    >
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {project.title}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* UI/UX Projects Section */}
          {(selectedCategory === 'all' || selectedCategory === 'uiux') && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 12a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm10-12a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zm0 7a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  UI/UX Design Projects
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.category === 'uiux')
                  .map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                    >
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-purple-700">
                          Figma
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {project.title}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {project.desc}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold">
                          <span>View Design</span>
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
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Project Detail Modal */}
          {selectedProject && (
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="relative bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}
              >
                {/* Close Button */}
                <div className="sticky top-0 w-full flex justify-end p-4 z-20 bg-linear-to-b from-white via-white to-transparent pointer-events-none">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors pointer-events-auto border border-gray-200"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden -mt-16">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="p-8 md:p-10">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`px-5 py-2 rounded-full text-sm font-bold ${
                        selectedProject.category === 'development'
                          ? 'bg-cyan-100 text-cyan-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {selectedProject.category === 'development'
                        ? 'Development'
                        : 'UI/UX Design'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-5">
                    {selectedProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-5 py-2 bg-linear-to-br from-gray-100 to-gray-200 text-gray-800 rounded-xl text-sm font-semibold border border-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all hover:shadow-xl transform hover:scale-105"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View on GitHub
                      </a>
                    )}

                    {selectedProject.figma && (
                      <a
                        href={selectedProject.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                          <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
                          <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
                          <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
                          <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
                        </svg>
                        View in Figma
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}