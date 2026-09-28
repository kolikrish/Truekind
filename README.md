# TrueKind — Clean, Conscious Skincare

A luxury, editorial-grade skincare landing page built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **GSAP** animations with smooth inertial scrolling powered by **Lenis**.

---

## ✨ Features

- **Cinematic Hero**: Full-bleed background video with GSAP character-level `SplitText` typography animations.
- **Interactive Preloader**: Custom animated counter sequence and split-text intro loader.
- **Brand Pillars & Transparency**: Dedicated interactive sections highlighting clean formulas, sustainability, and verified ingredients.
- **Product Showcases**: Touch-friendly product carousels powered by **Swiper** for product collections (*Pure Brilliance* & *Varnayas Blends*).
- **Curved Micro-Interactions**: Custom SVG badges, hover states, and directional arrow interactions.
- **Journal & Community**: Editorial journal layout and social connect sections.
- **Ultra-Smooth Inertial Scroll**: Native-feeling physics-driven scrolling via **Lenis**.
- **Dynamic Header**: Adaptive navigation header that dynamically shifts color themes upon scrolling past the hero.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Engine**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger, SplitText)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Carousel**: [Swiper](https://swiperjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVGs
- **Typography**: Custom Editorial New & PP Mori fonts

---

## 📁 Project Structure

```text
truekind/
├── public/
│   ├── assets/              # Curated images & SVG icons
│   │   └── svg/             # Vector icons and arrows
│   └── video/               # Cinematic hero background video
├── src/
│   ├── app/
│   │   ├── fonts/           # Local font assets (Editorial New, PP Mori)
│   │   ├── globals.css      # Design tokens, Tailwind CSS v4, custom utility classes
│   │   ├── layout.tsx       # Root layout with font variables & smooth scroll provider
│   │   └── page.tsx         # Main landing page entry
│   └── components/
│       ├── btn.jsx          # Circular action button with animated arrows
│       ├── connect.jsx      # Social & community connection section
│       ├── explore.jsx      # Swiper product collection carousels
│       ├── footer.jsx       # Parallax footer & newsletter subscription
│       ├── header.jsx       # Dynamic sticky header
│       ├── hero.jsx         # Video hero with typography animation
│       ├── horizontal-btn.jsx # Pill button with hover transitions
│       ├── journal.jsx      # Editorial journal cards
│       ├── loader.jsx       # Fullscreen loading sequence
│       ├── offers.jsx       # Promo & featured product section
│       ├── scroll.jsx       # Lenis smooth scroll provider
│       ├── second-page.jsx  # Brand values and feature cards
│       └── transparency.jsx # Formula transparency & ethos showcase
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.18 or higher recommended) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kolikrish/Truekind.git
   cd Truekind
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📦 Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the production-ready bundle.
- `npm run start`: Runs the production server.
- `npm run lint`: Runs ESLint to check for code quality and style issues.

---

## 📄 License & Credits

- Designed & Developed by **Krish**.
- © 2025 TrueKind. All Rights Reserved.
