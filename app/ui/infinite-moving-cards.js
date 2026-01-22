"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[450px] max-w-full relative rounded-2xl flex-shrink-0 border-slate-700 px-8 py-6 md:w-[550px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.title}
          >
            <motion.div
              className="glass rounded-2xl p-4 relative overflow-hidden group dark:border-gray-700 bg-white/90 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-white/10 transition-all hover-lift"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl group-hover:blur-3xl transition-all" />

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-0">{item.company}</p>
                      {item.current && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full animate-pulse border border-green-300 dark:border-green-500/50 ml-1">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{item.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};