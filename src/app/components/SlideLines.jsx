'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const LINES = [
  { text: 'Websites', font: 'funnel', dir: -1, align: 'self-start pl-[4vw]' },
  { text: 'That Work', font: 'subtitle', dir: 1, align: 'self-center' },
  { text: 'Harder', font: 'funnel', dir: 1, align: 'self-end pr-[4vw]' },
  { text: 'Than Your', font: 'funnel', dir: -1, align: 'self-start pl-[8vw]' },
  { text: 'Competition', font: 'subtitle', dir: 1, align: 'self-end pr-[6vw]' },
]

export default function SlideLines() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.utils.toArray('.js-line').forEach((line) => {
        const dir = Number(line.dataset.dir)
        gsap.fromTo(
          line,
          { xPercent: dir * 25, opacity: 0.3 },
          {
            xPercent: dir * -15,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: line,
              start: 'top 95%',
              end: 'bottom 10%',
              scrub: 1.2,
            },
          }
        )
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="relative overflow-hidden bg-neutral-900 text-neutral-100 py-32 md:py-44 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-center justify-between text-xs tracking-[0.3em] uppercase text-neutral-400">
        <span className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          [ 01 / PHILOSOPHY ]
        </span>
        <span className="hidden sm:inline">SCROLL TO DISCOVER ↓</span>
      </div>

      <h2 className="sr-only">Websites that work harder than your competition</h2>

      <div aria-hidden className="flex flex-col gap-2 md:gap-4 select-none">
        {LINES.map((l, i) => (
          <span
            key={i}
            data-dir={l.dir}
            className={`js-line block leading-[0.85] whitespace-nowrap will-change-transform ${l.align} ${
              l.font === 'subtitle'
                ? 'font-subtitle text-[12vw] text-amber-200/95'
                : 'font-funnel font-black uppercase text-[12vw] tracking-tighter text-white'
            }`}
          >
            {l.text}
          </span>
        ))}
      </div>
    </section>
  )
}