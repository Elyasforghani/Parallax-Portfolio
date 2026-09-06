'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const MARQUEE_1 = [
  'ELYAS FORGHANI',
  '•',
  'FRONTEND DEVELOPER',
  '•',
  'INTERACTIVE UI/UX',
  '•',
  'REACT & NEXT.JS',
  '•',
  'GSAP ANIMATIONS',
  '•',
  'PIXEL PERFECT',
  '•',
]
const MARQUEE_2 = [
  'AVAILABLE FOR FREELANCE & ROLES',
  '•',
  '  2026',
  '•',
  'DYNAMIC APPS & ENGINES',
  '•',
  'DESIGN MEETS CODE',
  '•',
  'CLEAN ARCHITECTURE',
  '•',
]


export default function ContactCTA() {
  const container = useRef(null)
  const [copied, setCopied] = useState(false)
  const email = 'elyasfgidev@gmail.com'

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  useGSAP(
    () => {
      
      gsap.to('.js-marquee-1', {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: 'none',
      })

      
      gsap.fromTo(
        '.js-marquee-2',
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          duration: 30,
          ease: 'none',
        }
      )

      l
      gsap.from('.js-cta-content', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="relative py-28 md:py-36 bg-neutral-950 text-white overflow-hidden border-t border-white/10"
    >
      
      <div className="relative flex flex-col gap-4 py-8 mb-20 md:mb-28 border-y border-white/10 select-none overflow-hidden">
        {/* Ribbon 1 */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="js-marquee-1 flex items-center gap-8 font-funnel font-black text-2xl md:text-5xl uppercase tracking-tighter text-white/40 will-change-transform">
            {[...MARQUEE_1, ...MARQUEE_1, ...MARQUEE_1, ...MARQUEE_1].map((text, i) => (
              <span key={i} className={text === '•' ? 'text-amber-200/80 text-xl' : ''}>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Ribbon 2 */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="js-marquee-2 flex items-center gap-8 font-funnel font-bold text-xl md:text-4xl uppercase tracking-widest text-neutral-600 will-change-transform">
            {[...MARQUEE_2, ...MARQUEE_2, ...MARQUEE_2, ...MARQUEE_2].map((text, i) => (
              <span key={i} className={text === '•' ? 'text-white/40 text-lg' : ''}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      
      <div className="js-cta-content max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-200/90 mb-4 block">
          [ 05 / COLLABORATION ]
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-funnel uppercase tracking-tight leading-[0.95]">
          Have an Ambitious
          <span className="block font-subtitle lowercase text-5xl sm:text-7xl md:text-9xl text-amber-200/95 my-2">
            vision?
          </span>
          Let&apos;s build it together.
        </h2>

        <p className="mt-8 text-base md:text-xl text-neutral-400 max-w-xl font-light leading-relaxed">
          Open for select commissions, technical direction, and creative development collaborations worldwide.
        </p>

        
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="px-8 py-4 rounded-full bg-white text-black font-funnel font-bold text-sm uppercase tracking-widest hover:bg-amber-200 transition-all duration-300 transform hover:scale-105"
          >
            Start a Conversation →
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-6 py-4 rounded-full bg-white/5 border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
          >
            {copied ? '✓ Email Copied to Clipboard!' : `Copy: ${email}`}
          </button>
        </div>

     
      </div>
    </section>
  )
}
