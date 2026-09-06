'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const QUOTES = [
  [
    { text: 'Architect of', font: 'funnel', align: 'text-center' },
    { text: 'Digital', font: 'funnel', align: 'text-right pr-[8vw]' },
    { text: 'Worlds', font: 'subtitle', align: 'text-left pl-[6vw]' },
  ],
 
  [
    { text: 'Crafting', font: 'funnel', align: 'text-center' },
    { text: 'Immersive', font: 'funnel', align: 'text-right pr-[8vw]' },
    { text: 'Experiences', font: 'subtitle', align: 'text-left pl-[6vw]' },
  ],
]
export default function PinnedQuotes() {
  const container = useRef(null)
  const bgImage = useRef(null)

  useGSAP(() => {
    const q0Lines = gsap.utils.toArray('.quote-line-0')
    const q1Lines = gsap.utils.toArray('.quote-line-1')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })

    // Subtle continuous zoom on background image across scroll
    tl.to(
      bgImage.current,
      {
        scale: 1.15,
        ease: 'none',
        duration: 10,
      },
      0
    )

    // Sequence 1: First Quote
    tl.fromTo(
      q0Lines,
      { opacity: 0, y: 70, rotateX: 20 },
      { opacity: 1, y: 0, rotateX: 0, stagger: 0.18, duration: 1.6, ease: 'power2.out' },
      0.6
    ).to(
      q0Lines,
      { opacity: 0, y: -60, rotateX: -15, stagger: 0.1, duration: 1.2, ease: 'power2.in' },
      3.6
    )

    // Sequence 2: Second Quote (cleanly separated, no overlap)
    tl.fromTo(
      q1Lines,
      { opacity: 0, y: 70, rotateX: 20 },
      { opacity: 1, y: 0, rotateX: 0, stagger: 0.18, duration: 1.6, ease: 'power2.out' },
      5.6
    ).to(
      q1Lines,
      { opacity: 0, y: -60, rotateX: -15, stagger: 0.1, duration: 1.2, ease: 'power2.in' },
      8.6
    )
  }, { scope: container })

  return (
    <section ref={container} className="relative h-[400vh] bg-neutral-950">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <video
          width={1920}
          height={1080}
          ref={bgImage}
          autoPlay
          loop
          muted
          playsInline
          src="/videos/me.webm"
          className="absolute inset-0 w-full h-full object-cover will-change-transform brightness-[0.75]"
          alt="Atmospheric architectural photography"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />

        {/* Section Badge */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-white/60">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-200 animate-pulse" />
          <span>Elyas Forghani — Milestones</span>
        </div>

        {QUOTES.map((lines, qi) => (
          <div
            key={qi}
            className={`text-white absolute inset-x-0 flex flex-col px-[6vw] z-10 pointer-events-none select-none`}
            style={{ perspective: '1000px' }}
          >
            {lines.map((l, li) => (
              <span
                key={li}
                className={`block leading-[0.9] opacity-0 quote-line-${qi} ${l.align} ${l.font === 'subtitle'
                    ? 'font-subtitle text-[9vw] text-amber-200/90'
                    : 'font-funnel font-black uppercase text-[10vw] tracking-tighter'
                  }`}
              >
                {l.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
