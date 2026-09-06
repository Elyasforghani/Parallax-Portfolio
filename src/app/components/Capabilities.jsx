'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const CAPABILITIES = [
  {
    number: '01',
    title: 'Frontend Engineering',
    subtitle: 'Bringing static designs to life',
    description:
      'Crafting responsive, pixel-perfect user interfaces with React and Next.js. Merging clean code with smooth GSAP animations and dynamic user flows for immersive web experiences.',
    skills: [
      'Next.js & React',
      'JavaScript (ES6+)',
      'GSAP & Keyframes',
      'Tailwind CSS',
      'Swiper.js / Dynamics',
    ],
  },
  {
    number: '02',
    title: 'Interactive Systems',
    subtitle: 'Dynamic logic & state management',
    description:
      'Engineering complex web applications, from async API integrations like weather systems to real-time regex password engines and full CRUD dashboard architectures.',
    skills: [
      'Async / Await APIs',
      'React Hook Form',
      'CRUD Workflows',
      'Regex Logic Engines',
      'DOM Manipulation',
    ],
  },
  {
    number: '03',
    title: 'Multidisciplinary Craft',
    subtitle: 'Precision forged by experience',
    description:
      'Drawing from a diverse background—from chemical engineering to video wall operations—to bring unmatched discipline, analytical rigor, and attention to detail to web development.',
    skills: [
      'Analytical Thinking',
      'System Architecture',
      'Performance Optimization',
      'UI/UX Design Patterns',
      'Pixel-Perfect Execution',
    ],
  },
  {
    number: '04',
    title: 'Full Lifecycle Products',
    subtitle: 'High-impact web solutions',
    description:
      'Building and deploying full web projects—from luxury hospitality portals and interactive games to utility engines and modern portfolio showcases deployed on Vercel.',
    skills: [
      'Vercel Deployment',
      'Responsive Architecture',
      'Luxury Brand Portals',
      'Component Design',
      'Clean Code Principles',
    ],
  },
]

export default function Capabilities() {
  const container = useRef(null)
  const [activeItem, setActiveItem] = useState(0)

  useGSAP(
    () => {
      const rows = gsap.utils.toArray('.js-cap-row')

      rows.forEach((row, idx) => {
        const number = row.querySelector('.js-number')
        const title = row.querySelector('.js-title')
        const subtitle = row.querySelector('.js-subtitle')
        const desc = row.querySelector('.js-desc')
        const tags = row.querySelectorAll('.js-tag')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        })

        tl.fromTo(
          [number, title, subtitle, desc],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
          },
          0
        ).fromTo(
          tags,
          { opacity: 0, scale: 0.85, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: 'back.out(1.5)',
          },
          0.25
        )
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="relative  py-28 md:py-40 bg-neutral-950 text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 border-b border-white/10 pb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-200/90 block mb-3">
              [ 04 / CAPABILITIES ]
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-funnel">
              Craft & Specialization
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 max-w-md font-light leading-relaxed">
            Bridging technical precision and artistic direction. Every project is engineered with obsessive attention to motion, typography, and speed.
          </p>
        </div>

        {/* Capabilities List */}
        <div className="divide-y divide-white/10">
          {CAPABILITIES.map((item, index) => {
            const isActive = activeItem === index
            return (
              <div
                key={item.number}
                onMouseEnter={() => setActiveItem(index)}
                className={`js-cap-row group py-8 md:py-12 transition-colors duration-500 cursor-pointer ${
                  isActive ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Number */}
                  <div className="md:col-span-2 flex items-center gap-4 js-number">
                    <span className="text-xs font-mono tracking-widest text-neutral-500">
                      {item.number}
                    </span>
                    <span
                      className={`h-px transition-all duration-500 bg-amber-200/60 ${
                        isActive ? 'w-12' : 'w-4 group-hover:w-8'
                      }`}
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="md:col-span-5 overflow-hidden">
                    <h3 className="js-title text-2xl md:text-4xl font-bold font-funnel tracking-tight group-hover:text-amber-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="js-subtitle font-subtitle text-2xl text-neutral-400 mt-1 transition-colors group-hover:text-amber-200/80">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description & Tags */}
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <p className="js-desc text-sm text-neutral-300 leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="js-tag text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 group-hover:border-amber-200/30 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}