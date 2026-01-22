'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'ragavana12@gmail.com',
      link: 'mailto:ragavana12@gmail.com',
      color: 'text-red-400',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 9025969735',
      link: 'tel:+919025969735',
      color: 'text-green-400',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Udumalpet, Tiruppur, Tamil Nadu, India – 642207',
      color: 'text-blue-400',
    },
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ragavan-a-860a4425b/',
      color: 'hover:text-blue-500',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      link: 'https://github.com/Ragavan55',
      color: 'hover:text-gray-400',
    },
    {
      icon: <SiLeetcode />,
      name: 'LeetCode',
      link: 'https://leetcode.com/u/ragavan05/',
      color: 'hover:text-yellow-500',
    },
    {
      icon: <SiHackerrank />,
      name: 'HackerRank',
      link: 'https://www.hackerrank.com/profile/ragavana12',
      color: 'hover:text-green-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-screen mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-[30px] md:text-[30px] font-black text-gray-900 dark:text-white mb-3">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-[0.95rem] md:text-[1.1rem]">
              Let's collaborate on your next project or discuss opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-[1.1rem] md:text-[1.25rem] font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
                  <FaPaperPlane className="text-blue-600 dark:text-blue-400" />
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 group"
                      whileHover={{ x: 10 }}
                    >
                      <div className={`text-2xl md:text-3xl ${info.color} mt-1`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[0.95rem] md:text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-[0.95rem] md:text-base text-gray-900 dark:text-white">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Social Links */}
                <div className="mt-7 pt-7 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-[1rem] md:text-[1.1rem] font-semibold text-gray-900 dark:text-white mb-3">Connect With Me</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-[0.95rem] md:text-base text-gray-700 dark:text-gray-300 ${social.color} transition-all hover:shadow-lg`}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-lg md:text-xl">{social.icon}</span>
                        <span>{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Message */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-bold text-gray-900 dark:text-white mb-5">Resume</h3>
              <div className="space-y-4">
                <div className="text-center py-8 md:py-12">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <FaEnvelope className="text-3xl md:text-5xl text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  </motion.div>
                  <p className="text-gray-700 dark:text-gray-300 mb-5 text-[0.95rem] md:text-base">
                    Download or view my latest resume below.
                  </p>
                  <div className="flex flex-col justify-center gap-4">
                    <motion.a
                      href="/asserts/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-[1rem] md:text-[1.1rem] hover:shadow-xl transition-all text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Resume
                    </motion.a>
                    <motion.a
                      href="/asserts/resume.pdf"
                      download
                      className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold text-[1rem] md:text-[1.1rem] hover:shadow-xl transition-all text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download Resume
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="glass rounded-2xl p-4 md:p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">
                © 2026 Ragavan Aruchamy. Built with ❤️ using Next.js & Tailwind CSS
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
