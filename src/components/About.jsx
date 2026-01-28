export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold text-sm tracking-wide uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              I&apos;m a passionate{" "}
              <span className="font-semibold text-cyan-600">
                Web Developer
              </span>{" "}
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
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              My approach combines technical expertise with creative design
              thinking. I believe in building products that not only look
              stunning but also solve real problems and deliver exceptional user
              experiences.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              From pixel-perfect interfaces to clean, efficient code, I&apos;m
              committed to delivering quality work that exceeds expectations.
              I&apos;m always exploring new technologies and design trends to
              stay ahead in this ever-evolving digital landscape.
            </p>

            <div className="pt-6">
              <a
                href="https://www.linkedin.com/in/sahil-ansari-50570b378"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
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
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Education Card */}
            <div className="bg-linear-to-br from-cyan-50 to-purple-50 rounded-2xl p-8 border border-cyan-100">
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-500 transition-colors">
                <div className="text-3xl font-bold text-cyan-500 mb-2">
                  9+
                </div>
                <div className="text-gray-600 font-medium">
                  Projects Completed
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-500 transition-colors">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  8+
                </div>
                <div className="text-gray-600 font-medium">
                  Skills Mastered
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
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
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
