export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      category: "Markup",
      rating: 95,
      color: "orange",
      description: "Semantic markup & accessibility",
      yearsOfExperience: "3+ years",
      icon: (
        <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      category: "Styling",
      rating: 95,
      color: "blue",
      description: "Animations, Flexbox & Grid",
      yearsOfExperience: "3+ years",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Framework",
      rating: 95,
      color: "cyan",
      description: "Utility-first design system",
      yearsOfExperience: "2+ years",
      icon: (
        <svg className="w-10 h-10 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "Programming",
      rating: 50,
      color: "yellow",
      description: "ES6+, DOM manipulation",
      yearsOfExperience: "1+ year",
      icon: (
        <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
    },
    {
      name: "C Programming",
      category: "Language",
      rating: 50,
      color: "indigo",
      description: "Data structures & algorithms",
      yearsOfExperience: "1+ year",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 38.000089 42.000031">
          <path fill="#283593" fillRule="evenodd" d="m 17.903,0.28628166 c 0.679,-0.381 1.515,-0.381 2.193,0 C 23.451,2.1692817 33.547,7.8372817 36.903,9.7202817 37.582,10.100282 38,10.804282 38,11.566282 c 0,3.766 0,15.101 0,18.867 0,0.762 -0.418,1.466 -1.097,1.847 -3.355,1.883 -13.451,7.551 -16.807,9.434 -0.679,0.381 -1.515,0.381 -2.193,0 -3.355,-1.883 -13.451,-7.551 -16.807,-9.434 -0.678,-0.381 -1.096,-1.084 -1.096,-1.846 0,-3.766 0,-15.101 0,-18.867 0,-0.762 0.418,-1.466 1.097,-1.8470003 3.354,-1.883 13.452,-7.551 16.806,-9.43400004 z" clipRule="evenodd" />
          <path fill="#5c6bc0" fillRule="evenodd" d="m 0.304,31.404282 c -0.266,-0.356 -0.304,-0.694 -0.304,-1.149 0,-3.744 0,-15.014 0,-18.759 0,-0.758 0.417,-1.458 1.094-1.8360003 3.343,-1.872 13.405-7.507 16.748-9.38000004 0.677,-0.379 1.594,-0.371 2.271,0.008 3.343,1.87200004 13.371,7.45900004 16.714,9.33100004 0.27,0.152 0.476,0.335 0.66,0.5760003 z" clipRule="evenodd" />
          <path fill="#ffffff" fillRule="evenodd" d="m 19,7.0002817 c 7.727,0 14,6.2730003 14,14.0000003 0,7.727 -6.273,14 -14,14 -7.727,0 -14,-6.273 -14,-14 0,-7.727 6.273,-14.0000003 14,-14.0000003 z m 0,7.0000003 c 3.863,0 7,3.136 7,7 0,3.863 -3.137,7 -7,7 -3.863,0 -7,-3.137 -7,-7 0,-3.864 3.136,-7 7,-7 z" clipRule="evenodd" />
          <path fill="#3949ab" fillRule="evenodd" d="m 37.485,10.205282 c 0.516,0.483 0.506,1.211 0.506,1.784 0,3.795 -0.032,14.589 0.009,18.384 0.004,0.396 -0.127,0.813 -0.323,1.127 l -19.084,-10.5 z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Figma",
      category: "Design Tool",
      rating: 95,
      color: "purple",
      description: "UI/UX design & prototyping",
      yearsOfExperience: "2+ years",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24">
          <path fill="#0ACF83" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
          <path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
          <path fill="#F24E1E" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
          <path fill="#FF7262" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
          <path fill="#1ABCFE" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
        </svg>
      ),
    },
    {
      name: "Canva",
      category: "Graphics",
      rating: 90,
      color: "violet",
      description: "Social media & branding",
      yearsOfExperience: "2+ years",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 508 508" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
          <g transform="matrix(.26718 0 0 .26718 0 0)">
            <circle cx="950" cy="950" r="950" fill="#7d2ae7" />
          </g>
          <path d="M446.744 276.845c-.665 0-1.271.43-1.584 1.33-4.011 11.446-9.43 18.254-13.891 18.254-2.563 0-3.6-2.856-3.6-7.336 0-11.21 6.71-34.982 10.095-45.82.392-1.312.646-2.485.646-3.483 0-3.15-1.722-4.696-5.987-4.696-4.598 0-9.547 1.8-14.36 10.233-1.663-7.435-6.691-10.683-13.715-10.683-8.12 0-15.965 5.224-22.421 13.696-6.456 8.471-14.048 11.25-19.76 9.88 4.108-10.057 5.634-17.57 5.634-23.145 0-8.746-4.324-14.028-11.308-14.028-10.624 0-16.747 10.134-16.747 20.797 0 8.237 3.736 16.708 11.954 20.817-6.887 15.573-16.943 29.66-20.758 29.66-4.93 0-6.379-24.123-6.105-41.38.176-9.9.998-10.408.998-13.401 0-1.722-1.115-2.896-5.595-2.896-10.448 0-13.676 8.844-14.165 18.998a50.052 50.052 0 01-1.8 11.406c-4.363 15.573-13.363 27.39-19.232 27.39-2.72 0-3.463-2.72-3.463-6.28 0-11.21 6.28-25.219 6.28-37.173 0-8.784-3.854-14.34-11.112-14.34-8.55 0-19.858 10.173-30.56 29.229 3.521-14.595 4.97-28.721-5.459-28.721a14.115 14.115 0 00-6.476 1.683 3.689 3.689 0 00-2.113 3.56c.998 15.535-12.521 55.329-25.336 55.329-2.328 0-3.463-2.524-3.463-6.593 0-11.23 6.691-34.943 10.056-45.801.43-1.409.666-2.622.666-3.678 0-2.974-1.84-4.5-6.007-4.5-4.578 0-9.547 1.741-14.34 10.174-1.683-7.435-6.711-10.683-13.735-10.683-11.523 0-24.397 12.19-30.051 28.076-7.572 21.208-22.832 41.692-43.375 41.692-18.645 0-28.486-15.515-28.486-40.03 0-35.392 25.982-64.308 45.253-64.308 9.215 0 13.617 5.869 13.617 14.869 0 10.897-6.085 15.964-6.085 20.112 0 1.272 1.057 2.524 3.15 2.524 8.374 0 18.234-9.841 18.234-23.262 0-13.422-10.897-23.243-30.168-23.243-31.851 0-63.898 32.047-63.898 73.113 0 32.673 16.121 52.374 44 52.374 19.017 0 35.628-14.79 44.588-32.047 1.018 14.302 7.513 21.776 17.413 21.776 8.804 0 15.925-5.243 21.364-14.458 2.094 9.645 7.65 14.36 14.87 14.36 8.275 0 15.201-5.243 21.794-14.986-.097 7.65 1.644 14.85 8.276 14.85 3.13 0 6.867-.725 7.533-3.464 6.984-28.877 24.24-52.453 29.523-52.453 1.565 0 1.995 1.507 1.995 3.287 0 7.846-5.537 23.928-5.537 34.2 0 11.092 4.716 18.43 14.459 18.43 10.8 0 21.775-13.227 29.092-32.556 2.29 18.058 7.24 32.633 14.987 32.633 9.508 0 26.392-20.014 36.625-41.203 4.01.509 10.036.372 15.827-3.717-2.465 6.241-3.912 13.07-3.912 19.897 0 19.663 9.39 25.18 17.47 25.18 8.785 0 15.907-5.243 21.365-14.458 1.8 8.315 6.398 14.34 14.85 14.34 13.225 0 24.71-13.519 24.71-24.612 0-2.934-1.252-4.715-2.72-4.715zm-274.51 18.547c-5.342 0-7.435-5.38-7.435-13.401 0-13.93 9.528-37.193 19.604-37.193 4.402 0 6.065 5.185 6.065 11.524 0 14.145-9.059 39.07-18.235 39.07zm182.948-41.574c-3.189-3.796-4.343-8.961-4.343-13.559 0-5.673 2.074-10.467 4.558-10.467 2.485 0 3.248 2.446 3.248 5.85 0 5.693-2.035 14.008-3.463 18.176zm41.418 41.574c-5.34 0-7.434-6.182-7.434-13.401 0-13.441 9.528-37.193 19.682-37.193 4.402 0 5.967 5.146 5.967 11.524 0 14.145-8.902 39.07-18.215 39.07z" fill="#fff" fillRule="nonzero" />
        </svg>
      ),
    },
    {
      name: "WordPress",
      category: "CMS",
      rating: 90,
      color: "blue",
      description: "Theme customization & plugins",
      yearsOfExperience: "2+ years",
      icon: (
        <svg className="w-10 h-10 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
        </svg>
      ),
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: {
        bg: "from-orange-50 via-orange-50 to-red-50",
        border: "hover:border-orange-400",
        progress: "bg-gradient-to-r from-orange-400 to-red-500",
        text: "text-orange-600",
        glow: "group-hover:shadow-orange-200",
      },
      blue: {
        bg: "from-blue-50 via-blue-50 to-indigo-50",
        border: "hover:border-blue-400",
        progress: "bg-gradient-to-r from-blue-400 to-indigo-500",
        text: "text-blue-600",
        glow: "group-hover:shadow-blue-200",
      },
      cyan: {
        bg: "from-cyan-50 via-cyan-50 to-blue-50",
        border: "hover:border-cyan-400",
        progress: "bg-gradient-to-r from-cyan-400 to-blue-500",
        text: "text-cyan-600",
        glow: "group-hover:shadow-cyan-200",
      },
      yellow: {
        bg: "from-yellow-50 via-yellow-50 to-amber-50",
        border: "hover:border-yellow-400",
        progress: "bg-gradient-to-r from-yellow-400 to-amber-500",
        text: "text-yellow-600",
        glow: "group-hover:shadow-yellow-200",
      },
      indigo: {
        bg: "from-indigo-50 via-indigo-50 to-blue-50",
        border: "hover:border-indigo-400",
        progress: "bg-gradient-to-r from-indigo-400 to-blue-600",
        text: "text-indigo-600",
        glow: "group-hover:shadow-indigo-200",
      },
      purple: {
        bg: "from-purple-50 via-purple-50 to-pink-50",
        border: "hover:border-purple-400",
        progress: "bg-gradient-to-r from-purple-400 to-pink-500",
        text: "text-purple-600",
        glow: "group-hover:shadow-purple-200",
      },
      violet: {
        bg: "from-violet-50 via-violet-50 to-purple-50",
        border: "hover:border-violet-400",
        progress: "bg-gradient-to-r from-violet-400 to-purple-500",
        text: "text-violet-600",
        glow: "group-hover:shadow-violet-200",
      },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm tracking-wide uppercase rounded-full mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            My Toolkit
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of technologies and tools I've mastered to bring ideas to life. 
            Each skill represents dedication, practice, and real-world application.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => {
            const colorClasses = getColorClasses(skill.color);
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${colorClasses.bg} rounded-3xl p-8 transition-all duration-500 border-2 border-transparent ${colorClasses.border} ${colorClasses.glow} hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Section */}
                <div className="text-center mb-6 relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    {skill.category}
                  </p>
                </div>

                {/* Description */}
                <p className="text-center text-sm text-gray-600 mb-4 min-h-[40px]">
                  {skill.description}
                </p>

                {/* Progress Section */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-gray-600">
                      Proficiency
                    </span>
                    <span className={`text-sm font-bold ${colorClasses.text}`}>
                      {skill.rating}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200/70 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className={`h-full ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out shadow-md`}
                      style={{ width: `${skill.rating}%` }}
                    />
                  </div>
                </div>

                {/* Experience & Level Badge */}
                <div className="mt-5 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-lg text-xs font-bold text-gray-700 shadow-sm">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {skill.yearsOfExperience}
                  </span>
                  <span className={`inline-block px-3 py-1.5 bg-gradient-to-r ${colorClasses.progress} text-white rounded-lg text-xs font-bold shadow-md`}>
                    {skill.rating >= 90
                      ? "Expert"
                      : skill.rating >= 75
                      ? "Advanced"
                      : skill.rating >= 60
                      ? "Intermediate"
                      : "Learning"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">8+</h4>
            <p className="text-gray-600 font-semibold">Total Skills</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">3+</h4>
            <p className="text-gray-600 font-semibold">Years Experience</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">Always</h4>
            <p className="text-gray-600 font-semibold">Learning More</p>
          </div>
        </div>
      </div>
    </section>
  );
}