'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            variants={floatVariants}
            animate="animate"
          >
            <span className="gradient-text">RAGAVAN</span>
            <br />
            <span className="text-white">ARUCHAMY</span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-400 font-semibold mb-4">
            Junior Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Crafting Digital Experiences with React, Next.js, Django & MERN Stack
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8 text-gray-300">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary-400" />
            <span>Udumalpet, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-primary-400" />
            <span>+91 9025969735</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-primary-400" />
            <span>ragavana12@gmail.com</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiLeetcode />
          </motion.a>
          <motion.a
            href="https://hackerrank.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiHackerrank />
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-4 glass text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-primary-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
