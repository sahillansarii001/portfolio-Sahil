export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold text-sm tracking-wide uppercase">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            My Toolkit
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* HTML */}
          <div className="group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">HTML5</h3>
              <p className="text-xs text-gray-500 mt-1">Markup</p>
            </div>
          </div>

          {/* CSS */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">CSS3</h3>
              <p className="text-xs text-gray-500 mt-1">Styling</p>
            </div>
          </div>

          {/* Tailwind */}
          <div className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Tailwind CSS</h3>
              <p className="text-xs text-gray-500 mt-1">Framework</p>
            </div>
          </div>

          {/* JavaScript */}
          <div className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">JavaScript</h3>
              <p className="text-xs text-gray-500 mt-1">Programming</p>
            </div>
          </div>

          {/* C Programming */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                {/* FULL SVG — unchanged */}
                <svg className="w-10 h-10" viewBox="0 0 38.000089 42.000031">
                  <path fill="#004482" d="M17.903.286c.679-.381 1.515-.381 2.193 0 3.355 1.883 13.451 7.551 16.807 9.434.679.38 1.097 1.084 1.097 1.846v18.867c0 .762-.418 1.466-1.097 1.847-3.355 1.883-13.451 7.551-16.807 9.434-.679.381-1.515.381-2.193 0-3.355-1.883-13.451-7.551-16.807-9.434C.418 31.899 0 31.195 0 30.433V11.566c0-.762.418-1.466 1.097-1.847C4.451 7.837 14.548 2.169 17.903.286z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">C Programming</h3>
              <p className="text-xs text-gray-500 mt-1">Language</p>
            </div>
          </div>

          {/* Figma */}
          <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" viewBox="0 0 24 24">
                  <path fill="#0ACF83" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
                  <path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
                  <path fill="#F24E1E" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
                  <path fill="#FF7262" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
                  <path fill="#1ABCFE" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Figma</h3>
              <p className="text-xs text-gray-500 mt-1">Design Tool</p>
            </div>
          </div>

          {/* Canva */}
          <div className="group relative bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <span className="text-cyan-600 font-bold text-xl">C</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Canva</h3>
              <p className="text-xs text-gray-500 mt-1">Graphics</p>
            </div>
          </div>

          {/* WordPress */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">WordPress</h3>
              <p className="text-xs text-gray-500 mt-1">CMS</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
