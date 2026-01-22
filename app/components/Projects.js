'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Business Management Web Application (Frontend)',
      description: 'Developed the user interface, dashboards, and forms for the business management system. Focused on responsive design and seamless user experience.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      status: 'Production',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Blog Website',
      description: 'Built a full-stack blogging platform with secure authentication and role-based moderation. Implemented post creation/editing, media uploads, comments, likes, and admin controls.',
      tech: ['Django', 'Bootstrap', 'HTML', 'JavaScript', 'PostgreSQL'],
      gradient: 'from-green-500 to-emerald-500',
      github: '#',
    },
    {
      title: 'Sea Border Detection System',
      description: 'Developed a location-based geo-alert system integrating Django with IoT sensors. Triggered alerts for sea border crossing detection.',
      tech: ['Django', 'Bootstrap', 'IoT', 'Python'],
      gradient: 'from-orange-500 to-red-500',
      github: 'https://github.com/Ragavan55/Sea-border-monitoring',
    },
    {
      title: 'Fire Service Management Dashboard',
      description: 'Designed and built a centralized dashboard to monitor incidents, personnel, and resource allocation. Included geo-mapping visualization for operational tracking.',
      tech: ['Django', 'Bootstrap', 'JavaScript', 'Maps API'],
      gradient: 'from-yellow-500 to-orange-500',
      github: 'https://github.com/Ragavan55/Fire-Service-navigation-and-monitoring',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-screen mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-bold text-gray-900 dark:text-white mb-2" style={{fontSize: '1.875rem', lineHeight: '2.25rem'}}>
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl overflow-hidden group border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover-lift"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-5 md:p-6 relative flex flex-col h-full">
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FaCode className="text-blue-500 dark:text-blue-400 text-base md:text-lg" />
                        <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      {/* Status Badge */}
                      {project.status && (
                        <span className="ml-2 px-2.5 md:px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg whitespace-nowrap">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-[0.88rem] md:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-400 text-xs md:text-sm rounded border border-gray-200 dark:border-gray-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links (CodeLink, GitHub, Live) for all cards */}
                    <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">

                      {/* GitHub icon (if available) */}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="GitHub"
                        >
                          <FaGithub />
                          <span className="text-xs md:text-sm">GitHub</span>
                        </motion.a>
                      )}
                      {/* Live icon (if available) */}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                          <span className="text-xs md:text-sm">Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
