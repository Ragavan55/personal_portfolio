'use client'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { SiOracle, SiMongodb } from 'react-icons/si'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

export default function Certifications() {
  // Data for the cards
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure',
      company: 'Oracle',
      location: 'Online',
      period: '2024',
      description: [
        'Completed Oracle Cloud Infrastructure Foundations certification.',
        'Gained hands-on experience with cloud services and architecture.'
      ],
      tech: ['Cloud', 'Oracle', 'Infrastructure'],
      link: 'https://www.oracle.com/cloud/'
    },
    {
      title: 'MERN Stack Development',
      company: 'KGiSL Microcollege',
      location: 'Coimbatore',
      period: '2023',
      description: [
        'Intensive MERN stack bootcamp covering MongoDB, Express, React, Node.js.',
        'Built and deployed full stack web applications.'
      ],
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://www.kgisl.com/microcollege/'
    },
    {
      title: 'Full Stack Web Development',
      company: 'Nandha InfoTech',
      location: 'Erode',
      period: '2023',
      description: [
        'Comprehensive training in front-end and back-end web technologies.',
        'Developed multiple responsive web projects.'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      link: 'https://www.nandhainfotech.com/'
    },
    {
      title: 'MERN Stack Development',
      company: 'NoviTech',
      location: 'Online',
      period: '2023',
      description: [
        'Advanced MERN stack concepts and project work.',
        'Focused on scalable and maintainable code.'
      ],
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://novitech.in/'
    },
    {
      title: 'UI/UX Design',
      company: 'IBM SkillsBuild',
      location: 'Online',
      period: '2022',
      description: [
        'Completed UI/UX design certification with IBM SkillsBuild.',
        'Learned user-centered design and prototyping.'
      ],
      tech: ['UI', 'UX', 'Figma', 'Design'],
      link: 'https://skillsbuild.org/'
    },
    {
      title: 'MERN Full Stack Intern',
      company: 'KGiSL Microcollege',
      location: 'Coimbatore',
      period: '2022',
      description: [
        'Internship focused on real-world MERN stack projects.',
        'Collaborated in teams and delivered production-ready code.'
      ],
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://www.kgisl.com/microcollege/'
    },
  ]

  return (
    <section id="certifications" className="py-20 px-0 w-full bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-bold text-gray-900 dark:text-white mb-2" style={{fontSize: '1.875rem', lineHeight: '2.25rem'}}>
            Certifications & Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-[0.95rem] md:text-[1.1rem]">
            Professional certifications and training programs completed
          </p>
        </div>
        <InfiniteMovingCards
          items={certifications}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="w-full"
          // Pass font size props if supported, else cards should use these classes:
          // text-[0.88rem] md:text-[1rem] for main text (14px/16px)
          // text-[0.75rem] md:text-[0.88rem] for secondary (12px/14px)
        />
      </div>
    </section>
  )
}
