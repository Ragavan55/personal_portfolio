'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Frontend Developer (On-site)',
      company: 'Advart Technologies Pvt. Ltd',
      location: 'Coimbatore',
      period: 'Sep 2025 – Present',
      current: true,
      description: [
        'Developing and maintaining a web-based product ("Dot") using Next.js (React), TypeScript, and Tailwind CSS',
        'Building responsive UI components, dashboards, and forms based on product requirements',
        'Integrating REST APIs and supporting backend workflows using Python and MySQL',
        'Contributing to performance improvements and clean, reusable frontend architecture',
      ],
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'MySQL'],
    },
    {
      title: 'MERN Full Stack Intern (On-site)',
      company: 'KGiSL Microcollege',
      location: 'Coimbatore',
      period: 'Jun 2025 – Aug 2025',
      description: [
        'Developed core modules for a real-time Placement Management System using MongoDB, Express.js, React.js, and Node.js',
        'Worked on student onboarding, placement tracking, admin workflows, and dashboard features',
        'Implemented CRUD functionality and integrated frontend with backend services',
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    },
    {
      title: 'Python Full Stack Developer Intern (On-site)',
      company: 'Nandha InfoTech Pvt. Ltd',
      location: 'Coimbatore',
      period: 'Jan 2025 – Feb 2025',
      description: [
        'Built a Django blog application with authentication, media uploads, comments, likes, and moderation features',
        'Developed backend logic and templates to support end-to-end blog workflows',
      ],
      tech: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    },
    {
      title: 'MERN Stack Development Intern (Online)',
      company: 'NoviTech',
      location: 'Coimbatore',
      period: 'Jul 2024 – Aug 2024',
      description: [
        'Developed full-stack web applications using MERN stack with complete CRUD operations',
        'Worked on API integration and frontend components for end-user features',
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    },
    {
      title: 'Web Development Intern (Online)',
      company: 'Neha Solutions',
      location: 'Coimbatore',
      period: 'Feb 2024 – Mar 2024',
      description: [
        'Built responsive static and dynamic webpages using HTML, CSS, and JavaScript',
        'Improved UI consistency and usability through structured styling and layouts',
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-screen mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-bold text-gray-900 dark:text-white mb-2" style={{fontSize: '1.875rem', lineHeight: '2.25rem'}}>
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 dark:from-primary-500 dark:to-purple-500 rounded-full" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-white/10 transition-all hover-lift"
                      whileHover={{ scale: 1.03, y: -5 }}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl group-hover:blur-3xl transition-all" />

                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                            <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-1.5">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <p className="text-blue-600 dark:text-blue-400 font-semibold text-[0.95rem] md:text-lg mb-0">{exp.company}</p>
                              {exp.current && (
                                <span className="px-2.5 md:px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full animate-pulse border border-green-300 dark:border-green-500/50 ml-1">
                                  Current
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400 text-[0.88rem] md:text-sm">
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCalendar />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300 flex gap-2 text-[0.88rem] md:text-base">
                              <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 md:px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs md:text-sm rounded-full border border-blue-200 dark:border-blue-500/30 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block relative">
                    <motion.div
                      className="w-4 h-4 bg-blue-500 dark:bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                      whileHover={{ scale: 1.5 }}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(59,130,246,0.7)',
                          '0 0 0 10px rgba(59,130,246,0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
