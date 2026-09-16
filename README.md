# ELYAS FORGHANI — Portfolio & Kinetic Experiments

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2D6?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-orange?style=for-the-badge)](https://lenis.darkroom.engineering/)

<p align="center">
  <strong>An immersive, editorial creative developer portfolio driven by kinetic typography, multi-layered parallax choreography, and physics-based particle interactions.</strong>
</p>

[Live Demo](https://parallax-portfolio-xi.vercel.app/) • [Report Issue](https://github.com/Elyasforghani/Parallax-Portfolio/issues) • [Get in Touch](mailto:elyasfgidev@gmail.com)

</div>

---

## ✨ Experience & Features

- **⚡ Lenis Smooth Scrolling Synchronized with GSAP**  
  Zero-lag inertia scrolling linked directly to the GSAP animation ticker with custom lerp interpolation and smooth wheel physics.

- **📜 Scrubbed Multi-Panel Parallax Choreography**  
  Dynamic depth-of-field effects across responsive grid compositions, tilting panels, and synchronized counter-directional translations.

- **🎥 Pinned Storytelling Milestones**  
  A continuous 400vh pinned video backdrop with staggered 3D perspective typography transitions (`Monsieur La Doulaise` + `Funnel Sans`).

- **✨ Physics-Based Custom Cursor & Particle Trail**  
  Canvas-driven cursor follower with particle bursts, momentum decay, and automatic detection to gracefully disable on touch devices (`@media (pointer: fine)`).

- **🔤 Kinetic Typography & Dual Marquee Ribbons**  
  Infinite counter-scrolling ribbons and large-scale viewport typography that responds organically to user scroll position.

- **⚡ Next.js 16 + Turbopack + React 19**  
  Engineered with the Next.js App Router, React Compiler optimizations, and modern Tailwind CSS v4 styling.

---

## 🏛️ Section Flow

| Section | Identifier | Description |
| :--- | :--- | :--- |
| **01** | `[ 01 / PHILOSOPHY ]` | Kinetic slide lines with responsive viewport typography |
| **02** | `[ 02 / CURATION ]` | Multi-panel scrubbed parallax showcasing classical & architectural works |
| **Milestone** | `Elyas Forghani — Milestones` | 400vh pinned video narrative with 3D perspective quotes |
| **03** | `[ 03 ]` | Full-screen parallax case studies & editorial visual archives |
| **04** | `[ 04 / CAPABILITIES ]` | Interactive capabilities matrix with hover states & animated skill pills |
| **05** | `[ 05 / COLLABORATION ]` | Infinite dual-speed kinetic marquees & direct interactive contact CTA |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Animation Suite**: [GSAP 3](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/React/) (`ScrollTrigger`)
- **Smooth Scrolling**: [@studio-freight/lenis](https://lenis.darkroom.engineering/) (`lenis/react`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Google Fonts via `next/font` (`Funnel Sans` & `Monsieur La Doulaise`)
- **Build Tooling**: Turbopack & React Compiler

---

## 📂 Project Structure

```text
para/
├── public/
│   ├── images/          # Optimized .webp project & portrait photography
│   └── videos/          # Atmospheric background video assets (.webm)
├── src/
│   └── app/
│       ├── components/
│       │   ├── Capabilities.jsx       # Interactive skills breakdown
│       │   ├── ContactCTA.jsx         # Dual marquee + email copy button
│       │   ├── CustomCursorTrail.jsx  # Canvas particle trail & pointer ring
│       │   ├── GsapSetup.jsx          # GSAP configuration & utility helpers
│       │   ├── PinnedQuotes.jsx       # 400vh pinned video milestone section
│       │   ├── ScrollSmooth.jsx       # Lenis smooth scroll provider + ticker
│       │   ├── SlideLines.jsx         # Section 01 kinetic scroll lines
│       │   ├── StripeWipe.jsx         # Section 02 multi-layer parallax grid
│       │   └── parallax.jsx           # Section 03 full-screen case study item
│       ├── globals.css                # Tailwind v4 theme & base typography
│       ├── layout.js                  # Root layout, fonts & global providers
│       └── page.jsx                   # Main portfolio page orchestration
├── package.json                       # Clean, tree-shaken dependencies
└── next.config.mjs                    # Next.js & image optimization configs
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `18.18.0` or later
- **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Elyasforghani/Parallax-Portfolio.git
   cd Parallax-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches Turbopack dev server on `localhost:3000` |
| `npm run build` | Builds optimized production bundle via Next.js |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint to ensure code quality & clean hooks |

---

## 📬 Contact & Connect

**Elyas Forghani** — *Creative Developer & Frontend Engineer*

- **Email**: [elyasfgidev@gmail.com](mailto:elyasfgidev@gmail.com)
- **LinkedIn**: [elyas-forghani-b4746b263](https://www.linkedin.com/in/elyas-forghani-b4746b263/)
- **Instagram**: [@elyasforghani.dev](https://www.instagram.com/elyasforghani.dev)

---

<div align="center">
  <sub>Designed and engineered by Elyas Forghani. All rights reserved.</sub>
</div>

