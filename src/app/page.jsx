'use client'

import Parallax from "./components/parallax";
import PinnedQuotes from "./components/PinnedQuotes";
import SlideLines from "./components/SlideLines";
import StripeWipe from "./components/StripeWipe";
import Capabilities from "./components/Capabilities";
import ContactCTA from "./components/ContactCTA";
import Image from "next/image";

const projects = [
  { heading: 'Elyas', caption: 'Digital Persona / Developer', imageSrc: '/images/me.webp', credit: '2026' },
  { heading: 'RETRO', caption: 'Instant Photography', imageSrc: '/images/1.webp', credit: '2024' },
  { heading: 'PRISM', caption: '3D Render & Light', imageSrc: '/images/6.webp', credit: '2025' },
  { heading: 'NEON', caption: 'Signage & Retail', imageSrc: '/images/4.webp', credit: '2023' },
  { heading: 'BAROQUE', caption: 'Cathedral Architecture', imageSrc: '/images/21.webp', credit: '2024' },
  { heading: 'TREVI', caption: 'Classical Fountain Sculpture', imageSrc: '/images/22.webp', credit: '2023' },
  { heading: 'DAVID', caption: 'Renaissance Marble Portrait', imageSrc: '/images/23.webp', credit: '2024' },
  { heading: 'PORTRAIT', caption: 'Fashion Editorial', imageSrc: '/images/5.webp', credit: '2024' },
  { heading: 'FOCUS', caption: 'Mobile Workflow', imageSrc: '/images/7.webp', credit: '2024' },
  { heading: 'ATLAS', caption: 'City High-Rise', imageSrc: '/images/8.webp', credit: '2023' },
  { heading: 'FACADE', caption: 'Modern Architecture', imageSrc: '/images/3.webp', credit: '2024' },
  { heading: 'RAIN', caption: 'Street Photography', imageSrc: '/images/9.webp', credit: '2024' },
  { heading: 'GAUGE', caption: 'Industrial Automotive', imageSrc: '/images/10.webp', credit: '2024' },
  { heading: 'LIQUID', caption: 'Chrome Abstract', imageSrc: '/images/11.webp', credit: '2025' },
  { heading: 'WORKSPACE', caption: 'Creative Setup', imageSrc: '/images/13.webp', credit: '2023' },
  { heading: 'DOME', caption: 'Symmetrical Interior', imageSrc: '/images/14.webp', credit: '2024' },
  { heading: 'WALK', caption: 'Urban Perspective', imageSrc: '/images/16.webp', credit: '2023' },
  { heading: 'FORM', caption: '3D Sculptural Art', imageSrc: '/images/17.webp', credit: '2025' },
  { heading: 'ORBIT', caption: 'Abstract Particle Swarm', imageSrc: '/images/18.webp', credit: '2024' },
  { heading: 'TUNNEL', caption: 'Futuristic Transit', imageSrc: '/images/20.webp', credit: '2026' },
]
export default function page() {
  return (

    <div className="font-title bg-neutral-950 text-neutral-100 min-h-screen">
      <PinnedQuotes />
      {/* Top Floating Studio Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between pointer-events-none mix-blend-difference text-white">
        <div className="pointer-events-auto flex items-center gap-2">
          <span className="font-funnel font-black tracking-tight text-xl md:text-2xl">ELYAS FORGHANI</span>
          <span className="hidden md:inline-block text-[10px] tracking-widest font-mono text-neutral-400 uppercase border-l border-neutral-600 pl-3">
            Creative Developer
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-mono text-neutral-300 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for Projects</span>
        </div>
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="mailto:elyasforghani@example.com"
            className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero Slide Lines */}
      <SlideLines />

      {/* Stripe Wipe Multi-panel Section */}
      <StripeWipe />

      {/* Pinned Quotes Milestone Section */}


      {/* Parallax Case Studies (Component structure completely preserved) */}
      <div id="cases" className="relative">
        <div className="py-16 px-6 max-w-7xl mx-auto flex items-center justify-between text-xs tracking-[0.3em] uppercase text-neutral-400 border-t border-white/10">
          <span>[ 03  ]</span>
          <span>Have desire to see the beauty↓</span>
        </div>

        {projects.map((val) => {
          return (
            <Parallax
              key={val.imageSrc}
              heading={val.heading}
              caption={val.caption}
              imageSrc={val.imageSrc}
              credit={val.credit}
            />
          )
        })}
      </div>

      {/* 04 / Capabilities & Specialization */}
      <Capabilities />

      {/* 05 / Kinetic Marquee & Collaboration CTA */}
      <ContactCTA />

      {/* Studio Footer */}
    <footer className="relative bg-black text-neutral-400 py-24 px-6 border-t border-white/10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
    <div>
      <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 block mb-2">
        PORTFOLIO &amp; EXPERIMENTS
      </span>
      <h4 className="font-funnel text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
        ELYAS FORGHANI
      </h4>
      <p className="font-subtitle text-2xl text-amber-200/90 mt-1">Design in perpetual motion</p>
    </div>

    
    <div className="group relative w-[250px] overflow-hidden rounded-[10px] shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
     
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 h-full w-1/2 -translate-x-[130%] -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[330%]" />

      <Image
        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-110"
        width={500}
        height={625} 
       loading="eager"
        src="/images/55.jfif"
        alt="3D character portrait of Elyas Forghani"
      />
    </div>

    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs tracking-widest uppercase font-mono">
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/elyasforghani.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-amber-200 transition-colors"
        >
          Instagram ↗
        </a>
        <span className="text-neutral-700">•</span>
        <a
          href="https://www.linkedin.com/in/elyas-forghani-b4746b263/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-amber-200 transition-colors"
        >
          LinkedIn ↗
        </a>
      </div>
      <span className="text-neutral-700 hidden sm:inline">|</span>
      <button
        type="button"
        onClick={() =>
          window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        className="text-neutral-400 hover:text-amber-200 transition-colors cursor-pointer text-left"
      >
        ↑ Top
      </button>
      <span className="text-neutral-700 hidden sm:inline">|</span>
      <span>© {new Date().getFullYear()} Elyas Forghani</span>
    </div>
  </div>
</footer>
    </div >
  )
}