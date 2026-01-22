'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaMoon,
  FaSun,
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaProjectDiagram,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
} from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'


export default function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'Summary', href: '#summary', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaTools /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Education', href: '#education', icon: <FaGraduationCap /> },
    { name: 'Certifications', href: '#certifications', icon: <FaCertificate /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      for (const item of navItems) {
        const sectionId = item.href.substring(1)
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      {/* TOP LEFT BRANDING (Desktop) */}
      <motion.div
        className="fixed top-5 left-5 z-50 hidden sm:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="flex items-center gap-3 glass px-4 py-2 rounded-xl shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            RA
          </div>
          <span className="hidden sm:block font-semibold text-gray-800 dark:text-gray-100">
            Ragavan Aruchamy
          </span>
        </motion.a>
      </motion.div>

      {/* MOBILE: Fixed Button Top-Left and Top-Right */}
      <div className="sm:hidden">
        {/* Hamburger menu fixed top-left */}
        <button
          aria-label="Open navigation menu"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl focus:outline-none m-3 fixed top-3 left-3 z-[102]"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        {/* Theme toggle fixed top-right */}
        <button
          aria-label="Toggle theme"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 shadow-xl m-3 fixed top-3 right-3 z-[102]"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <FaSun className="text-yellow-400 text-lg" />
          ) : (
            <FaMoon className="text-blue-600 text-lg" />
          )}
        </button>
      </div>

      {/* MOBILE: Slide-in Menu (from left) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 flex">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="mr-auto w-64 h-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col p-6 gap-6 overflow-y-auto"
            style={{ position: 'fixed', top: 0, left: 0, height: '100vh', maxHeight: '100vh' }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-lg text-gray-900 dark:text-white">Menu</span>
              <button
                aria-label="Close navigation menu"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                )
              })}
            </nav>
          </motion.div>
          {/* Overlay click closes menu */}
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* BOTTOM FLOATING NAVIGATION (CENTERED, Desktop only) */}
      <motion.div
        className="fixed bottom-6 inset-x-0 justify-center z-50 hidden sm:flex"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="glass px-4 py-3 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="hidden sm:block">{item.name}</span>
                </motion.button>
              )
            })}
            {/* THEME TOGGLE */}
            <motion.button
              onClick={toggleTheme}
              className="ml-2 p-3 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
              whileTap={{ scale: 0.9 }}
              whileHover={{ rotate: 15 }}
            >
              {theme === 'dark' ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-blue-600 text-lg" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
