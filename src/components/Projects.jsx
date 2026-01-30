export default function Projects() {
  return (
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

        {/* Development Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
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
            <h3 className="text-2xl font-bold text-gray-900">
              Development Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "BookMyShow Clone",
                desc: "Movie ticket booking platform with seat selection and dynamic content management.",
                image: "/BookMyShow.png",
                tech: ["HTML", "Tailwind CSS"],
              },
              {
                title: "Eldar Gilmonav Website",
                desc: "Professional website with smooth animations and elegant interface design.",
                image: "/EldarGilmonav.png",
                tech: ["HTML", "Tailwind CSS"],
              },
              {
                title: "Travels Website",
                desc: "Interactive travel platform with destination showcases and booking features.",
                image: "/TravelsWebsite.png",
                tech: ["HTML", "CSS"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
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

        {/* UI/UX Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
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
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              UI/UX Design Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Blinkit App Clone",
                image: "/blinkit.png",
              },
              {
                title: "Gozoop Website Clone",
                image: "/gozoop.png",
              },
              {
                title: "Snapdeal Clone",
                image: "/snapdeal.png",
              },
              {
                title: "Smartwatch UI",
                image: "/smartwatch.png",
              },
              {
                title: "Travels Website",
                image: "/travels-ui.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-bold text-purple-700">
                    Figma
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    UI/UX design focused on clean layouts and smooth user flow.
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
      </div>
    </section>
  );
}
