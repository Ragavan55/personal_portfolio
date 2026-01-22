'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { TbBrandNextjs } from 'react-icons/tb'
import {
  FaPython, FaReact, FaNode, FaDatabase, FaGitAlt, FaBootstrap
} from 'react-icons/fa'
import {
  SiJavascript, SiCplusplus, SiHtml5, SiCss3, SiTailwindcss,
  SiNextdotjs, SiDjango, SiExpress, SiMysql, SiMongodb,
  SiPostman, SiFirebase, SiArduino
} from 'react-icons/si'

/* ---------------- DATA ---------------- */

const techSkills = [
  { name: 'Python', icon: <FaPython />, color: 'text-blue-400' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-500' },
  { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <SiCss3 />, color: 'text-blue-500' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: 'text-purple-500' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Next.js', icon: <TbBrandNextjs />, color: 'text-white' },
  { name: 'Django', icon: <SiDjango />, color: 'text-green-600' },
  { name: 'Node', icon: <FaNode />, color: 'text-green-500' },
  { name: 'Express', icon: <SiExpress />, color: 'text-gray-400' },
  { name: 'REST', icon: <FaDatabase />, color: 'text-primary-400' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
  { name: 'Postman', icon: <SiPostman />, color: 'text-orange-400' },
  { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-500' },
  { name: 'Arduino', icon: <SiArduino />, color: 'text-cyan-500' },
]

const softSkills = [
  { name: 'Problem Solving', icon: '🧩' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Time Management', icon: '⏰' },
  { name: 'Flexibility', icon: '🔄' },
  { name: 'Resilience', icon: '💪' },
  { name: 'Attentiveness', icon: '👁️' },
]

/* ---------------- HEX POSITION ---------------- */

function getHexPosition(index, size = 68, gap = 14) {
  if (index === 0) return { x: 0, y: 0 }

  let layer = 1
  let count = 1

  while (count + layer * 6 <= index) {
    count += layer * 6
    layer++
  }

  const pos = index - count
  const side = Math.floor(pos / layer)
  const step = pos % layer
  const angle = Math.PI / 3 * side

  return {
    x: Math.cos(angle) * (size + gap) * layer +
       Math.cos(angle + Math.PI / 3) * (size + gap) * step,
    y: Math.sin(angle) * (size + gap) * layer +
       Math.sin(angle + Math.PI / 3) * (size + gap) * step,
  }
}

/* ---------------- FLOATING ICON ---------------- */

function FloatingIcon({ item }) {
  // Unified grid item for all views
  return (
    <div
      className="flex flex-col items-center justify-center m-3"
      style={{ width: 56, height: 56 }}
    >
      <span className={`text-[30px] ${item.color || ''}`}>{item.icon}</span>
      <span className="text-[13px] mt-1 text-black dark:text-white font-medium text-center">{item.name}</span>
    </div>
  )
}

/* ---------------- MAIN SECTION ---------------- */

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">

        {/* TECH STACK */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-blue-600 mb-6">
            Tech Stack
          </h3>
          <div className="w-full flex flex-wrap justify-center items-center gap-2" style={{ minHeight: 220 }}>
            {techSkills.map((s, i) => (
              <FloatingIcon
                key={s.name}
                item={s}
              />
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-pink-600 mb-6">
            Problem & Soft Skills
          </h3>
          <div className="w-full flex flex-wrap justify-center items-center gap-2" style={{ minHeight: 120 }}>
            {softSkills.map((s, i) => (
              <FloatingIcon
                key={s.name}
                item={s}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
