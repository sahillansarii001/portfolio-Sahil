"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href="https://wa.me/9967747153?text=Hello%20Sahil,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        select-none
        fixed bottom-4 right-4
        sm:bottom-6 sm:right-6
        z-50
        flex items-center justify-center
        w-12 h-12 sm:w-15 sm:h-15
        rounded-full
        bg-green-500 hover:bg-green-600
        shadow-xl
        transition-all duration-300
        active:scale-95
        animate-bounce
      "
    >
      <FaWhatsapp className="text-white text-3xl sm:text-4xl" />
    </a>
  );
}
