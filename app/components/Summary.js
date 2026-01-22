'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRocket, FaLaptopCode, FaTrophy, FaCode, FaServer, FaMobile } from 'react-icons/fa'

export default function Summary() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

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
        ease: 'easeOut',
      },
    },
  }

  const skills = [
    { name: 'Frontend', icon: FaCode, color: 'blue', desc: 'React, Next.js, TypeScript' },
    { name: 'Backend', icon: FaServer, color: 'purple', desc: 'Node.js, Django, FastAPI' },
    { name: 'Mobile Ready', icon: FaMobile, color: 'pink', desc: 'Responsive Design' },
  ]

  return (
    <section id="summary" className="py-20 px-4 relative overflow-hidden">

      <div className="max-w-screen mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-bold text-gray-900 dark:text-white mb-2" style={{fontSize: '1.875rem', lineHeight: '2.25rem'}}>
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Summary Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-2xl p-6 md:p-8 relative overflow-hidden border-2 border-blue-200 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-600 dark:bg-blue-500 rounded-lg">
                    <FaLaptopCode className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    Junior Full Stack Developer
                  </h3>
                </div>

                <p className="text-[0.88rem] md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Passionate developer with hands-on experience in{' '}
                  <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded font-semibold">React</span>,{' '}
                  <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded font-semibold">Next.js</span>,{' '}
                  <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded font-semibold">Django</span>, and the{' '}
                  <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded font-semibold">MERN stack</span>. 
                  Built and deployed real-world applications including dashboards, blog platforms, 
                  and business systems through internships and ongoing production work. 
                  Strong problem-solver with solid fundamentals in REST APIs, databases, 
                  and responsive UI development.
                </p>

                {/* Tech Skills Pills */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-900/50 border-2 border-${skill.color}-200 dark:border-${skill.color}-800/50 hover:border-${skill.color}-400 dark:hover:border-${skill.color}-600 transition-all`}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <skill.icon className={`text-xl text-${skill.color}-600 dark:text-${skill.color}-400`} />
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">{skill.name}</p>
                        <p className="text-[0.65rem] text-gray-600 dark:text-gray-400">{skill.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-6 text-white group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <FaLaptopCode className="text-3xl mb-3 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">5+</div>
                  <div className="text-sm opacity-90 font-medium">Internships</div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 p-6 text-white group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <FaCode className="text-3xl mb-3 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">10+</div>
                  <div className="text-sm opacity-90 font-medium">Projects Built</div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700 p-6 text-white group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <FaTrophy className="text-3xl mb-3 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">6+</div>
                  <div className="text-sm opacity-90 font-medium">Certifications</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
