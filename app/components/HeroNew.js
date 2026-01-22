"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function HeroLikeDesign() {
  // Detect dark mode from document class (sync with app theme)
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkTheme = () => {
        setIsDark(document.documentElement.classList.contains("dark"));
      };
      checkTheme();
      const observer = new MutationObserver(checkTheme);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section
      id="home"
      className={`relative w-full min-h-screen flex items-start justify-center overflow-hidden transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Main container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 md:py-0">
        {/* Responsive layout: flex-col for mobile, grid for desktop */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:items-center">
          {/* LEFT CONTENT */}
          <div className="md:col-span-3 space-y-3 z-10 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
            <span className={`px-4 py-1 text-[10px] sm:text-xs rounded-full font-semibold inline-block ${isDark ? "bg-green-500/20 text-green-300" : "bg-green-100 text-green-700"}`}>
              Open to Opportunities
            </span>
            <h3 className={`text-base sm:text-lg font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Full Stack Developer<br /> & UI/UX Enthusiast<br /> based in Tamil Nadu
            </h3>
            {/* Resume Buttons */}
            <div className="flex flex-row gap-3 mt-4 w-full justify-center md:justify-start">
              <a
                href="/asserts/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:shadow-xl transition-all text-center border-2 border-blue-400 dark:border-blue-600"
                style={{ minWidth: 120 }}
              >
                View Resume
              </a>
              <a
                href="/asserts/resume.pdf"
                download
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:shadow-xl transition-all text-center border-2 border-green-400 dark:border-green-600"
                style={{ minWidth: 120 }}
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="md:col-span-6 relative flex flex-col justify-center items-center">
            <div className="relative w-full h-[400px] md:w-[480px] md:h-[700px] lg:w-[600px] lg:h-[700px] flex items-center justify-center">
              <Image
                src="/asserts/Hero.png"
                alt="Hero"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* BIG NAME UNDER IMAGE ON MOBILE */}
            <div className="block md:hidden w-full flex justify-center mt-2">
              <h1
                className="text-center text-[8vw] sm:text-[6vw] font-extrabold leading-none pointer-events-none select-none tracking-tight drop-shadow-lg bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-slide"
                style={{
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                RAGAVAN ARUCHAMY
              </h1>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-3 space-y-3 z-10 text-center md:text-left flex flex-col items-center md:items-start mt-10 md:mt-0">
            <p className={`text-xs sm:text-sm md:text-base ${isDark ? "text-gray-200" : "text-gray-700"} max-w-md mx-auto md:mx-0`}>
              Hi, I'm <span className="font-bold text-orange-400">Ragavan Aruchamy</span> – passionate about building seamless digital experiences with React, Next.js, and the MERN stack. I love solving real-world problems and designing user-friendly interfaces.
            </p>
            <a href="#projects" className="px-5 py-2 sm:px-7 sm:py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 rounded-full text-white font-semibold flex items-center gap-2 mx-auto md:ml-auto text-xs sm:text-sm md:text-base shadow-lg transition-all duration-200">
              View My Projects
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
        {/* BIG NAME OVERLAY - desktop only */}
        <div className="hidden md:flex w-full justify-center absolute bottom-28 left-0">
          <h1
            className="text-center text-[5vw] lg:text-[4vw] font-extrabold leading-none pointer-events-none select-none tracking-tight drop-shadow-lg bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-slide"
            style={{
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            RAGAVAN ARUCHAMY
          </h1>
        </div>
      </div>
    </section>
  );
}
