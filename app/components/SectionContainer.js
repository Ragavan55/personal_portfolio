'use client'

import { motion } from 'framer-motion'

export default function SectionContainer({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-20 px-4 relative ${className}`}>
      <div className="max-w-screen mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
