# Axsa Anna Shaji — Personal Portfolio & Creative Developer Hub

An award-winning, ultra-modern personal portfolio web application crafted with **React 19**, **TypeScript**, **Tailwind CSS**, and **Web Audio API** for **Axsa Anna Shaji**, an engineering fresher at **Amal Jyothi College of Engineering (AJCE)** passionate about Artificial Intelligence, UI/UX Design, and Hackathon prototyping.

---

## 🌟 About Axsa Anna Shaji

- **Institution**: Amal Jyothi College of Engineering (AJCE), Kerala
- **Degree**: B.Tech in Computer Science & Engineering (Fresher)
- **Specializations**: AI/ML Exploration, Human-Centered UI/UX Prototyping (Figma), Modern Frontend Engineering (React, Tailwind CSS)
- **Key Milestones**:
  - 🏆 **Hackathon Finalist** with *CogniFlow AI* (36-hour rapid innovation sprint)
  - 🤖 **AI Conclave Delegate** & Presenter of *MedAI Clinical Triage* prototype
  - 🎨 **UI/UX Design Workshop Fellow** & Designer of *Aura AJCE Campus Community Portal*

---

## ✨ Standout Features

### 1. 🌌 Interactive Generative Particle Canvas
- Real-time physics simulation responding smoothly to mouse movement.
- Dynamic color adaptation matching the active accent palette.
- High-DPI Retina canvas rendering with sub-pixel precision.

### 2. ⚡ Command Palette (`Cmd + K` / `Ctrl + K`)
- Instant keyboard navigation to any section (`#about`, `#projects`, `#skills`, `#experience`, `#lab`, `#contact`).
- Quick actions: copy email, view CV, switch color palettes, and open interactive terminal.

### 3. 🎨 Live Theme Customizer & Multi-Palette Engine
- 5 curated neon/editorial color themes:
  - **Indigo Horizon** (Electric Violet & Indigo)
  - **Cyberpunk Cyan** (Neon Teal & Sky)
  - **Matrix Emerald** (Jade & Mint)
  - **Sunset Amber** (Warm Gold & Orange)
  - **Hyper Fuchsia** (Vivid Pink & Violet)
- Instant dark/light mode toggle.

### 4. 🎛️ In-Browser Live Profile Editor
- Modify Name, Title, Headline, Bio, Email, and Location directly in the UI.
- 1-click Instant Persona Presets:
  - *Aspiring Full-Stack & Hackathon Builder*
  - *AI Conclave & Machine Learning Track*
  - *UI/UX Product Designer (Figma)*
- **Export JSON**: Download your tailored profile configuration at any time.
- **Reset Defaults**: Revert back to the curated showcase data with one click.

### 5. 💻 Interactive Dev Playground & Web Terminal (`axsa@ajce:~$`)
- Fully functional embedded terminal.
- Interactive commands:
  - `help` — Catalog of available commands
  - `whoami` — Axsa's background and engineering philosophy
  - `hackathons` — Key hackathons and rapid prototyping milestones
  - `conclave` — AI Conclave takeaways & prototypes
  - `uiux` — Figma design systems and user research case studies
  - `skills` — Categorized technical and design stack
  - `projects` — Shipped applications & repositories
  - `theme <name>` — Switch site theme dynamically from the terminal
  - `hire` — Trigger student internship & collaboration flow with confetti
  - `clear` — Clear console window

### 6. 🔊 Web Audio API Synthesizer
- Subtle, high-tech sound feedback for clicks, hovers, chime alerts, and modal open events.
- Zero external MP3/WAV dependencies — audio frequencies are generated on the fly via oscillators.
- Persistent mute/unmute toggle in the navbar.
- Interactive multi-note chord synth pad in the Playground section.

### 7. 🚀 Featured Project Case Studies (Deep-Dive Modals)
- **CogniFlow AI**: 36-hr Hackathon Finalist adaptive study coach.
- **Aura AJCE Campus Portal**: End-to-end Figma UI/UX case study and clickable React prototype.
- **MedAI Clinical Triage**: AI Conclave prototype with conversational decision trees.
- **EcoTrack AJCE**: Smart campus sustainability & hostel waste management dashboard.
- **Interactive Portfolio & Lab**: High-performance React web showcase.

### 8. 📄 Interactive CV / Resume Viewer
- Formatted view tailored to Axsa's academic journey at Amal Jyothi College of Engineering, hackathons, and workshops.
- 1-click `Print / Save as PDF` button.

### 9. 📬 Contact & Inquiries Section
- Client-side validated contact form with simulated instant dispatch and confetti celebration.
- 1-click copy email button (`axsaannashaji@gmail.com`) with real-time feedback toast.
- Direct links to GitHub, LinkedIn, X, and ReadCV.

---

## 🛠️ Technology Stack

- **Framework**: [React 18 / 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom glassmorphism & gradients
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: Web Audio API (Sine & Triangle oscillators)
- **Effects**: [canvas-confetti](https://github.com/catdad/canvas-confetti)
- **Fonts**: Space Grotesk, Plus Jakarta Sans, JetBrains Mono

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build
```bash
# Typecheck and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🚢 1-Click Deployment

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Deploy to Cloudflare Pages
Connect your GitHub repository to Cloudflare Pages:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: `18` or `20`

---

## 📁 Project Architecture

```
├── dist/                     # Optimized production bundle
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   └── HeroCanvas.tsx         # Interactive particle constellation
│   │   ├── common/
│   │   │   ├── CommandPalette.tsx     # Cmd+K shortcut overlay
│   │   │   ├── CustomCursor.tsx       # Smooth trailing pointer
│   │   │   ├── MagneticButton.tsx     # Physics-based hover pull
│   │   │   ├── SectionHeading.tsx     # Standardized section titles
│   │   │   ├── SoundToggle.tsx        # UI audio toggle
│   │   │   └── ThemePicker.tsx        # Color palette switcher
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Floating island navigation
│   │   │   └── Footer.tsx             # Sleek bottom bar
│   │   ├── modals/
│   │   │   ├── ProfileEditorModal.tsx # Live portfolio customizer
│   │   │   ├── ProjectModal.tsx       # Case study deep-dive
│   │   │   └── ResumeModal.tsx        # Printable CV modal
│   │   └── sections/
│   │       ├── HeroSection.tsx        # Hero with headline cycler & stats
│   │       ├── AboutSection.tsx       # Philosophy & timezone clock
│   │       ├── ProjectsSection.tsx    # Filterable showcase
│   │       ├── SkillsSection.tsx      # Categorized skills matrix
│   │       ├── ExperienceSection.tsx  # Interactive career timeline
│   │       ├── InteractiveLabSection.tsx # Web terminal & audio synth
│   │       ├── TestimonialsSection.tsx # Social proof & quotes
│   │       └── ContactSection.tsx     # Direct inquiry form & email copy
│   ├── context/
│   │   ├── ProfileContext.tsx         # User profile state & preset manager
│   │   └── ThemeContext.tsx           # Accent palettes & dark mode
│   ├── data/
│   │   └── portfolioData.ts           # Curated portfolio dataset
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces
│   ├── utils/
│   │   ├── helpers.ts                 # Class merger & clipboard utils
│   │   └── sound.ts                   # Web Audio synthesizer
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📝 Customization Guide

You can customize the portfolio in two simple ways:

1. **In the Browser (No Code Required)**:
   - Click the sliders icon in the navigation bar to open the **Live Portfolio Customizer**.
   - Edit your name, title, bio, email, and social links in real time.
   - Click **Export JSON** to save your customized configuration.

2. **In Code**:
   - Open [`src/data/portfolioData.ts`](file:///d:/Share/Portfolio/src/data/portfolioData.ts) to update text, projects, skills, career history, and testimonials with your own information.

