"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const skills = [
    {
      name: "HTML5",
      category: "Markup",
      rating: 85,
      color: "orange",
      description: "Semantic markup & accessibility",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-orange-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      category: "Styling",
      rating: 85,
      color: "blue",
      description: "Animations, Flexbox & Grid",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Framework",
      rating: 85,
      color: "cyan",
      description: "Utility-first design system",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-cyan-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
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
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
    },
    {
      name: "React",
      category: "Library",
      rating: 50,
      color: "sky",
      description: "Component-based UI development",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-cyan-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      category: "Framework",
      rating: 50,
      color: "slate",
      description: "React framework for production",
      yearsOfExperience: "6 Months",
      icon: (
        <svg className="w-10 h-10" fill="black" viewBox="0 0 24 24">
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      category: "Runtime",
      rating: 50,
      color: "lime",
      description: "Server-side JavaScript runtime",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
        </svg>
      ),
    },
    {
      name: "Express",
      category: "Framework",
      rating: 50,
      color: "neutral",
      description: "Fast Node.js web framework",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-black"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      category: "Database",
      rating: 50,
      color: "emerald",
      description: "NoSQL database solution",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
        </svg>
      ),
    },
    {
      name: "Git",
      category: "Version Control",
      rating: 50,
      color: "amber",
      description: "Distributed version control",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-orange-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      category: "Platform",
      rating: 60,
      color: "slateBlue",
      description: "Code hosting & collaboration",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-gray-800"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: "C Programming",
      category: "Language",
      rating: 50,
      color: "indigo",
      description: "Data structures & algorithms",
      yearsOfExperience: "6 Months",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 38.000089 42.000031">
          <path
            fill="#283593"
            fillRule="evenodd"
            d="m 17.903,0.28628166 c 0.679,-0.381 1.515,-0.381 2.193,0 C 23.451,2.1692817 33.547,7.8372817 36.903,9.7202817 37.582,10.100282 38,10.804282 38,11.566282 c 0,3.766 0,15.101 0,18.867 0,0.762 -0.418,1.466 -1.097,1.847 -3.355,1.883 -13.451,7.551 -16.807,9.434 -0.679,0.381 -1.515,0.381 -2.193,0 -3.355,-1.883 -13.451,-7.551 -16.807,-9.434 -0.678,-0.381 -1.096,-1.084 -1.096,-1.846 0,-3.766 0,-15.101 0,-18.867 0,-0.762 0.418,-1.466 1.097,-1.8470003 3.354,-1.883 13.452,-7.551 16.806,-9.43400004 z"
            clipRule="evenodd"
          />
          <path
            fill="#5c6bc0"
            fillRule="evenodd"
            d="m 0.304,31.404282 c -0.266,-0.356 -0.304,-0.694 -0.304,-1.149 0,-3.744 0,-15.014 0,-18.759 0,-0.758 0.417,-1.458 1.094,-1.8360003 3.343,-1.872 13.405,-7.507 16.748,-9.38000004 0.677,-0.379 1.594,-0.371 2.271,0.008 3.343,1.87200004 13.371,7.45900004 16.714,9.33100004 0.27,0.152 0.476,0.335 0.66,0.5760003 z"
            clipRule="evenodd"
          />
          <path
            fill="#ffffff"
            fillRule="evenodd"
            d="m 19,7.0002817 c 7.727,0 14,6.2730003 14,14.0000003 0,7.727 -6.273,14 -14,14 -7.727,0 -14,-6.273 -14,-14 0,-7.727 6.273,-14.0000003 14,-14.0000003 z m 0,7.0000003 c 3.863,0 7,3.136 7,7 0,3.863 -3.137,7 -7,7 -3.863,0 -7,-3.137 -7,-7 0,-3.864 3.136,-7 7,-7 z"
            clipRule="evenodd"
          />
          <path
            fill="#3949ab"
            fillRule="evenodd"
            d="m 37.485,10.205282 c 0.516,0.483 0.506,1.211 0.506,1.784 0,3.795 -0.032,14.589 0.009,18.384 0.004,0.396 -0.127,0.813 -0.323,1.127 l -19.084,-10.5 z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Figma",
      category: "Design Tool",
      rating: 85,
      color: "purple",
      description: "UI/UX design & prototyping",
      yearsOfExperience: "6 Months",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24">
          <path
            fill="#0ACF83"
            d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
          />
          <path
            fill="#A259FF"
            d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
          />
          <path
            fill="#F24E1E"
            d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
          />
          <path
            fill="#FF7262"
            d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
          />
          <path
            fill="#1ABCFE"
            d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
          />
        </svg>
      ),
    },
    {
      name: "Canva",
      category: "Graphics",
      rating: 70,
      color: "violet",
      description: "Social media & branding",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 508 508"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <g transform="matrix(.26718 0 0 .26718 0 0)">
            <circle cx="950" cy="950" r="950" fill="#7d2ae7" />
            <circle cx="950" cy="950" r="950" fill="url(#prefix___Radial1)" />
            <circle cx="950" cy="950" r="950" fill="url(#prefix___Radial2)" />
            <circle cx="950" cy="950" r="950" fill="url(#prefix___Radial3)" />
            <circle cx="950" cy="950" r="950" fill="url(#prefix___Radial4)" />
          </g>

          <path
            d="M446.744 276.845c-.665 0-1.271.43-1.584 1.33-4.011 11.446-9.43 18.254-13.891 18.254-2.563 0-3.6-2.856-3.6-7.336 0-11.21 6.71-34.982 10.095-45.82.392-1.312.646-2.485.646-3.483 0-3.15-1.722-4.696-5.987-4.696-4.598 0-9.547 1.8-14.36 10.233-1.663-7.435-6.691-10.683-13.715-10.683-8.12 0-15.965 5.224-22.421 13.696-6.456 8.471-14.048 11.25-19.76 9.88 4.108-10.057 5.634-17.57 5.634-23.145 0-8.746-4.324-14.028-11.308-14.028-10.624 0-16.747 10.134-16.747 20.797 0 8.237 3.736 16.708 11.954 20.817-6.887 15.573-16.943 29.66-20.758 29.66-4.93 0-6.379-24.123-6.105-41.38.176-9.9.998-10.408.998-13.401 0-1.722-1.115-2.896-5.595-2.896-10.448 0-13.676 8.844-14.165 18.998a50.052 50.052 0 01-1.8 11.406c-4.363 15.573-13.363 27.39-19.232 27.39-2.72 0-3.463-2.72-3.463-6.28 0-11.21 6.28-25.219 6.28-37.173 0-8.784-3.854-14.34-11.112-14.34-8.55 0-19.858 10.173-30.56 29.229 3.521-14.595 4.97-28.721-5.459-28.721a14.115 14.115 0 00-6.476 1.683 3.689 3.689 0 00-2.113 3.56c.998 15.535-12.521 55.329-25.336 55.329-2.328 0-3.463-2.524-3.463-6.593 0-11.23 6.691-34.943 10.056-45.801.43-1.409.666-2.622.666-3.678 0-2.974-1.84-4.5-6.007-4.5-4.578 0-9.547 1.741-14.34 10.174-1.683-7.435-6.711-10.683-13.735-10.683-11.523 0-24.397 12.19-30.051 28.076-7.572 21.208-22.832 41.692-43.375 41.692-18.645 0-28.486-15.515-28.486-40.03 0-35.392 25.982-64.308 45.253-64.308 9.215 0 13.617 5.869 13.617 14.869 0 10.897-6.085 15.964-6.085 20.112 0 1.272 1.057 2.524 3.15 2.524 8.374 0 18.234-9.841 18.234-23.262 0-13.422-10.897-23.243-30.168-23.243-31.851 0-63.898 32.047-63.898 73.113 0 32.673 16.121 52.374 44 52.374 19.017 0 35.628-14.79 44.588-32.047 1.018 14.302 7.513 21.776 17.413 21.776 8.804 0 15.925-5.243 21.364-14.458 2.094 9.645 7.65 14.36 14.87 14.36 8.275 0 15.201-5.243 21.794-14.986-.097 7.65 1.644 14.85 8.276 14.85 3.13 0 6.867-.725 7.533-3.464z"
            fill="#fff"
            fillRule="nonzero"
          />

          <defs>
            <radialGradient
              id="prefix___Radial1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(1469.491) rotate(-49.416 1.37 .302)"
            >
              <stop offset="0" stopColor="#6420ff" />
              <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
            </radialGradient>

            <radialGradient
              id="prefix___Radial2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(54.703 42.717 594.194) scale(1657.122)"
            >
              <stop offset="0" stopColor="#00c4cc" />
              <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
            </radialGradient>

            <radialGradient
              id="prefix___Radial3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(1023 -1030 473.711 470.491 367 1684)"
            >
              <stop offset="0" stopColor="#6420ff" />
              <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
            </radialGradient>

            <radialGradient
              id="prefix___Radial4"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(595.999 1372 -2298.41 998.431 777 256)"
            >
              <stop offset="0" stopColor="#00c4cc" stopOpacity="0.73" />
              <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "WordPress",
      category: "CMS",
      rating: 85,
      color: "blue",
      description: "Theme customization & plugins",
      yearsOfExperience: "6 Months",
      icon: (
        <svg
          className="w-10 h-10 text-blue-800"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
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
      green: {
        bg: "from-green-50 via-green-50 to-emerald-50",
        border: "hover:border-green-400",
        progress: "bg-gradient-to-r from-green-400 to-emerald-500",
        text: "text-green-600",
        glow: "group-hover:shadow-green-200",
      },
      gray: {
        bg: "from-gray-50 via-gray-50 to-slate-50",
        border: "hover:border-gray-400",
        progress: "bg-gradient-to-r from-gray-400 to-slate-500",
        text: "text-gray-600",
        glow: "group-hover:shadow-gray-200",
      },
      slate: {
        bg: "from-slate-200 via-slate-200 to-slate-200",
        border: "hover:border-black",
        progress: "bg-gradient-to-r from-black to-slate-700",
        text: "text-slate-900",
        glow: "group-hover:shadow-slate-500",
      },

      sky: {
        bg: "from-sky-50 via-sky-50 to-cyan-50",
        border: "hover:border-sky-400",
        progress: "bg-gradient-to-r from-sky-400 to-cyan-500",
        text: "text-sky-600",
        glow: "group-hover:shadow-sky-200",
      },

      lime: {
        bg: "from-lime-50 via-lime-50 to-lime-50",
        border: "hover:border-lime-500",
        progress: "bg-gradient-to-r from-lime-500 to-green-600",
        text: "text-lime-700",
        glow: "group-hover:shadow-lime-200",
      },

      neutral: {
        bg: "from-gray-200 via-gray-200 to-gray-200",
        border: "hover:border-gray-700",
        progress: "bg-gradient-to-r from-gray-800 to-gray-600",
        text: "text-gray-900",
        glow: "group-hover:shadow-gray-500",
      },

      emerald: {
        bg: "from-emerald-50 via-emerald-50 to-emerald-50",
        border: "hover:border-emerald-500",
        progress: "bg-gradient-to-r from-emerald-500 to-green-700",
        text: "text-emerald-700",
        glow: "group-hover:shadow-emerald-200",
      },

      amber: {
        bg: "from-amber-50 via-amber-50 to-amber-50",
        border: "hover:border-amber-400",
        progress: "bg-gradient-to-r from-amber-400 to-orange-500",
        text: "text-amber-600",
        glow: "group-hover:shadow-amber-200",
      },

      slateBlue: {
        bg: "from-indigo-100 via-indigo-50 to-indigo-100",
        border: "hover:border-slate-500",
        progress: "bg-gradient-to-r from-slate-700 to-indigo-800",
        text: "text-slate-800",
        glow: "group-hover:shadow-slate-400",
      },
    };
    return colors[color];
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 select-none bg-linear-to-b from-white via-slate-50 to-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm tracking-wide uppercase rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            My Toolkit
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A comprehensive collection of technologies and tools I've mastered
            to bring ideas to life. Each skill represents dedication, practice,
            and real-world application.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => {
            const colorClasses = getColorClasses(skill.color);
            return (
              <motion.div
                key={index}
                className={`group relative bg-linear-to-br ${colorClasses.bg} rounded-3xl p-8 transition-all duration-500 border-2 border-transparent ${colorClasses.border} ${colorClasses.glow} hover:shadow-2xl hover:-translate-y-2`}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Section */}
                <div className="text-center mb-6 relative z-10">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-3"
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="font-bold text-gray-900 text-xl mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    {skill.category}
                  </p>
                </div>

                {/* Description */}
                <p className="text-center text-sm text-gray-600 mb-4 min-h-10">
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
                    <motion.div
                      className={`h-full ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out shadow-md`}
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${skill.rating}%` } : { width: 0 }
                      }
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    />
                  </div>
                </div>

                {/* Experience & Level Badge */}
                <motion.div
                  className="mt-5 flex items-center justify-between gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-lg text-xs font-bold text-gray-700 shadow-sm">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {skill.yearsOfExperience}
                  </span>
                  <span
                    className={`inline-block px-3 py-1.5 bg-linear-to-r ${colorClasses.progress} text-white rounded-lg text-xs font-bold shadow-md`}
                  >
                    {skill.rating >= 90
                      ? "Expert"
                      : skill.rating >= 75
                        ? "Advanced"
                        : skill.rating >= 60
                          ? "Intermediate"
                          : "Learning"}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            variants={statsVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </motion.div>
            <motion.h4
              className="text-3xl font-bold text-gray-900 mb-2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              15+
            </motion.h4>
            <p className="text-gray-600 font-semibold">Total Skills</p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            variants={statsVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>
            <motion.h4
              className="text-3xl font-bold text-gray-900 mb-2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            >
              6+
            </motion.h4>
            <p className="text-gray-600 font-semibold">Months Experience</p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            variants={statsVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-8 h-8 text-white"
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
            </motion.div>
            <motion.h4
              className="text-3xl font-bold text-gray-900 mb-2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
            >
              Always
            </motion.h4>
            <p className="text-gray-600 font-semibold">Learning More</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
