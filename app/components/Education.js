'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaUniversity, FaSchool, FaCalendarAlt, FaAward } from 'react-icons/fa'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Akshaya College of Engineering and Technology',
      period: '2022 – 2026',
      score: 'CGPA: 8.2',
      icon: FaGraduationCap,
      color: 'blue',
      level: 'Bachelor\'s Degree'
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'Annai Abirami Matric Hr. Sec. School',
      period: '2020 – 2022',
      score: '83.1%',
      icon: FaUniversity,
      color: 'purple',
      level: 'Higher Secondary'
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      institution: 'Annai Abirami Matric Hr. Sec. School',
      period: '2018 – 2020',
      score: '96%',
      icon: FaSchool,
      color: 'emerald',
      level: 'Secondary School'
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        icon: 'text-blue-600 dark:text-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        badge: 'bg-blue-600 dark:bg-blue-500',
        hover: 'hover:border-blue-400 dark:hover:border-blue-600'
      },
      purple: {
        icon: 'text-purple-600 dark:text-purple-400',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        badge: 'bg-purple-600 dark:bg-purple-500',
        hover: 'hover:border-purple-400 dark:hover:border-purple-600'
      },
      emerald: {
        icon: 'text-emerald-600 dark:text-emerald-400',
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        border: 'border-emerald-200 dark:border-emerald-800',
        badge: 'bg-emerald-600 dark:bg-emerald-500',
        hover: 'hover:border-emerald-400 dark:hover:border-emerald-600'
      }
    }
    return colors[color]
  }

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-screen mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-bold text-gray-900 dark:text-white mb-2" style={{fontSize: '1.875rem', lineHeight: '2.25rem'}}>
              Education
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-[0.95rem] md:text-[1.1rem]">
              Academic background and qualifications
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => {
              const Icon = edu.icon
              const colors = getColorClasses(edu.color)
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-white dark:bg-gray-800 rounded-xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 overflow-hidden group hover:shadow-2xl`}
                >
                  {/* Card Header */}
                  <div className={`${colors.bg} p-5 md:p-6 border-b-2 ${colors.border}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`${colors.bg} p-2 md:p-3 rounded-lg border-2 ${colors.border}`}>
                          <Icon className={`text-xl md:text-2xl ${colors.icon}`} />
                        </div>
                        <div>
                          <p className="text-[0.7rem] md:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                            {edu.level}
                          </p>
                          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <FaCalendarAlt className="text-xs md:text-sm" />
                            <span className="text-xs md:text-sm font-medium">{edu.period}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`${colors.badge} text-white px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg shadow-md flex items-center gap-1.5`}>
                        <FaAward className="text-xs md:text-sm" />
                        <span className="text-xs md:text-sm font-bold">{edu.score}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex items-start gap-2 text-[0.88rem] md:text-sm text-gray-600 dark:text-gray-400">
                      <FaUniversity className={`text-base md:text-lg mt-0.5 ${colors.icon}`} />
                      <p className="leading-relaxed font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Bottom Border */}
                  <div className={`h-1 bg-gradient-to-r from-${edu.color}-400 to-${edu.color}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
