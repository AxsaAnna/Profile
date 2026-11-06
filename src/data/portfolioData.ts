import { PortfolioProfile } from '../types';

export const initialPortfolioData: PortfolioProfile = {
  name: "Axsa Anna Shaji",
  title: "Aspiring Software Engineer & UI/UX Designer",
  headline: "B.Tech Fresher at Amal Jyothi College of Engineering passionate about AI, user-centric product design, and rapid hackathon prototyping.",
  statusBadge: "Fresher @ Amal Jyothi College of Engineering • Open to Internships & Projects",
  location: "Kottayam, Kerala, India",
  timezone: "Asia/Kolkata (IST - UTC+5:30)",
  email: "axsaannashaji@gmail.com",
  availableForHire: true,
  avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  bioParagraphs: [
    "Hello! I am Axsa Anna Shaji, an enthusiastic Computer Science & Engineering fresher at Amal Jyothi College of Engineering (AJCE), Kerala. I love building digital products where innovative software engineering meets intuitive visual design.",
    "My journey is driven by active hands-on learning: participating in state and national Hackathons, diving into the latest machine learning breakthroughs at AI Conclaves, and refining human-computer interaction principles through intensive UI/UX design workshops.",
    "Whether wireframing seamless user flows in Figma, crafting responsive modern interfaces with React, or training introductory AI models in Python, I am constantly exploring, building, and pushing my creative boundaries."
  ],
  coreValues: [
    {
      title: "Design Meets Code",
      desc: "Bridging the gap between beautiful aesthetics in Figma and functional frontend execution.",
      icon: "Sparkles"
    },
    {
      title: "Hackathon Hustle",
      desc: "Thriving under 24-48 hour pressure sprints to brainstorm, prototype, and pitch viable tech solutions.",
      icon: "Zap"
    },
    {
      title: "AI-Driven Curiosity",
      desc: "Engaged in AI Conclaves, exploring how LLMs, computer vision, and automation empower everyday people.",
      icon: "Layers"
    },
    {
      title: "Continuous Learning",
      desc: "Active participant in technical workshops, peer coding circles, and open-source explorations.",
      icon: "Gauge"
    }
  ],
  stats: [
    {
      id: "college",
      label: "College & Batch",
      value: "AJCE",
      suffix: "B.Tech",
      description: "Amal Jyothi College of Engineering, Dept of CSE"
    },
    {
      id: "hackathons",
      label: "Hackathons",
      value: "4+",
      suffix: "Events",
      description: "Active participant in rapid prototyping & hack sprints"
    },
    {
      id: "workshops",
      label: "Conclaves & Workshops",
      value: "6+",
      suffix: "Sessions",
      description: "AI Conclave & Hands-on UI/UX Masterclasses"
    },
    {
      id: "projects",
      label: "Projects & Demos",
      value: "12+",
      suffix: "Repos",
      description: "Spanning UI/UX Figma cases, React apps, & Python AI"
    }
  ],
  socialLinks: [
    { platform: "github", url: "https://github.com", username: "axsa-anna-shaji", primary: true },
    { platform: "linkedin", url: "https://linkedin.com", username: "axsa-anna-shaji", primary: true },
    { platform: "x", url: "https://x.com", username: "@axsa_dev" },
    { platform: "readcv", url: "https://read.cv", username: "axsaannashaji" },
    { platform: "email", url: "mailto:axsaannashaji@gmail.com", username: "axsaannashaji@gmail.com", primary: true }
  ],
  skills: [
    // UI/UX & Design
    { name: "Figma & FigJam", category: "Creative & UI/UX", level: 92, years: 2, highlight: true, description: "Component systems, interactive prototypes, auto-layout, wireframes & user flows" },
    { name: "UI/UX Design Systems", category: "Creative & UI/UX", level: 88, years: 2, highlight: true, description: "Color theory, typography hierarchy, accessibility (WCAG), usability testing" },
    { name: "User Research & Empathy Mapping", category: "Creative & UI/UX", level: 85, years: 1, highlight: false, description: "Learned in UI/UX workshops: personas, journey maps, card sorting & user feedback" },
    { name: "Responsive Web Design", category: "Frontend", level: 90, years: 2, highlight: true, description: "Mobile-first layouts, flexible grid systems, cross-browser compatibility" },

    // Frontend Development
    { name: "React & Next.js", category: "Frontend", level: 86, years: 2, highlight: true, description: "Functional components, state hooks, interactive dashboards, modern web apps" },
    { name: "HTML5 & Modern CSS3", category: "Frontend", level: 94, years: 2, highlight: true, description: "Semantic markup, CSS Grid/Flexbox, smooth transitions & animations" },
    { name: "JavaScript (ES6+) & TypeScript", category: "Frontend", level: 84, years: 2, highlight: true, description: "Async/await, DOM manipulation, type definitions, event handling" },
    { name: "Tailwind CSS", category: "Frontend", level: 92, years: 2, highlight: true, description: "Utility-first rapid prototyping for hackathons, dark mode, custom themes" },

    // AI & Emerging Tech
    { name: "AI Conclave Insights & LLM APIs", category: "AI & Data", level: 82, years: 1, highlight: true, description: "OpenAI/Gemini APIs, Prompt engineering, retrieval pipelines & AI agents" },
    { name: "Python for AI & ML", category: "AI & Data", level: 85, years: 2, highlight: true, description: "NumPy, Pandas, basic classification models, data preprocessing & visualization" },
    { name: "Computer Vision & NLP Basics", category: "AI & Data", level: 78, years: 1, highlight: false, description: "Explored via workshops: image preprocessing, text sentiment analysis" },

    // Core CS & Tooling
    { name: "Data Structures & Algorithms", category: "Backend & Cloud", level: 82, years: 2, highlight: true, description: "Arrays, Linked Lists, Stacks, Queues, Trees, algorithmic problem solving in C/C++" },
    { name: "C & C++ Programming", category: "Backend & Cloud", level: 88, years: 2, highlight: true, description: "Core academic foundation at AJCE: memory management, pointers, OOP" },
    { name: "Git & GitHub Collaboration", category: "DevOps & Architecture", level: 87, years: 2, highlight: false, description: "Branching strategies, pull requests, version control in hackathon teams" },
    { name: "REST APIs & JSON", category: "Backend & Cloud", level: 84, years: 1, highlight: false, description: "Fetching external data, async state management, third-party integrations" }
  ],
  projects: [
    {
      id: "cogniflow-ai",
      title: "CogniFlow: AI Adaptive Learning Assistant",
      tagline: "Hackathon Award Finalist • AI Powered Personalized Study Companion",
      description: "An intelligent learning tool developed during a 36-hour hackathon that summarizes complex engineering textbooks, generates dynamic revision flashcards, and quizzes students using generative AI.",
      category: "AI / Intelligent Systems",
      featured: true,
      badge: "Hackathon Finalist",
      technologies: ["React", "Python FastAPI", "Gemini API", "Tailwind CSS", "Figma Design"],
      metrics: ["Built in 36 Hours Hack Sprint", "94% Accuracy in Flashcard Generation", "Tested with 60+ AJCE Classmates"],
      demoUrl: "https://example.com/cogniflow-demo",
      repoUrl: "https://github.com/example/cogniflow-ai",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      caseStudy: {
        challenge: "Engineering freshers struggle with information overload when transitioning to higher education and digesting dense technical curriculums.",
        solution: "Designed an empathetic, distraction-free UI/UX in Figma and paired it with an LLM backend that parses PDFs into bite-sized concepts and interactive quizzes.",
        architecture: [
          "Figma user journey mapping validated with college peers prior to coding",
          "React frontend with interactive card flips and dark mode UI",
          "Python backend leveraging Gemini API for structured JSON flashcard generation",
          "Local storage for offline progress saving during spotty campus Wi-Fi"
        ],
        metrics: [
          { label: "Sprint Duration", value: "36 Hours" },
          { label: "Peer Testing", value: "60+ Students" },
          { label: "Quiz Retention", value: "+38% Score" }
        ]
      }
    },
    {
      id: "aura-campus-portal",
      title: "Aura: AJCE Campus Community & Event Hub",
      tagline: "UI/UX Workshop Showcase • Student Experience Redesign",
      description: "A comprehensive UI/UX case study and clickable React prototype reimagining the campus event discovery and club registration experience for Amal Jyothi students.",
      category: "Creative Tech / WebGL",
      featured: true,
      badge: "UI/UX Workshop Best Design",
      technologies: ["Figma", "UI/UX Research", "React", "Tailwind CSS", "Framer Motion"],
      metrics: ["Complete 24-screen Figma Prototype", "Tested with 3 College Clubs", "100% WCAG AA Accessible"],
      demoUrl: "https://example.com/aura-campus",
      repoUrl: "https://github.com/example/aura-ajce",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      caseStudy: {
        challenge: "College event notifications are scattered across WhatsApp groups and paper noticeboards, resulting in low event turnout and missed club registrations.",
        solution: "Conducted user interviews with classmates, mapped out user personas, created high-fidelity Figma design systems, and coded the interactive web prototype.",
        architecture: [
          "Conducted 15 user interviews and affinity mapping exercises",
          "Built full design system with 40+ reusable Figma components and token variables",
          "Implemented smooth tabbed transitions and calendar synchronization with React",
          "Designed responsive mobile views optimized for student smartphones"
        ],
        metrics: [
          { label: "Screens Designed", value: "24 Screens" },
          { label: "Usability Score", value: "92 / 100" },
          { label: "Club Signups", value: "3x Faster" }
        ]
      }
    },
    {
      id: "medai-triage",
      title: "MedAI: Clinical Symptom Navigator",
      tagline: "AI Conclave Showcase • Machine Learning & Empathetic UI",
      description: "Presented at the regional AI Conclave: an intelligent conversational triage interface that matches patient symptoms with preliminary health guidance and nearby clinic directories.",
      category: "AI / Intelligent Systems",
      featured: true,
      badge: "AI Conclave Delegate Project",
      technologies: ["Python", "Streamlit / React", "Scikit-Learn", "Prompt Engineering", "Figma"],
      metrics: ["Presented to Industry AI Leaders", "15 Common Symptom Trees", "Under 250ms Response"],
      demoUrl: "https://example.com/medai-demo",
      repoUrl: "https://github.com/example/medai-triage",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      caseStudy: {
        challenge: "Medical terminology often causes panic and anxiety among users seeking quick answers for common non-critical symptoms.",
        solution: "Engineered a calm, reassuring pastel interface with progressive disclosure of questions, guided by medical decision trees and conversational AI.",
        architecture: [
          "Empathetic color psychology and accessibility-tested typography",
          "Decision-tree classification backend in Python",
          "Clear visual disclaimers prioritizing emergency medical services",
          "Interactive map integration for nearest verified health centers"
        ],
        metrics: [
          { label: "Conclave Feedback", value: "Top 5 Prototype" },
          { label: "Tree Depth", value: "15 Pathways" },
          { label: "Avg Flow Time", value: "90 Seconds" }
        ]
      }
    },
    {
      id: "ecotrack-ajce",
      title: "EcoTrack: Smart Green Campus Initiative",
      tagline: "Hackathon Sprint • Campus Waste & Energy Tracking Dashboard",
      description: "A collaborative hackathon project visualizing campus energy consumption and waste segregation stats to encourage eco-friendly habits across AJCE hostel dorms.",
      category: "Full-Stack Architecture",
      featured: false,
      badge: "Green Hackathon Entry",
      technologies: ["React", "JavaScript", "Chart.js", "Tailwind CSS", "Firebase"],
      metrics: ["Real-time Energy Visualizer", "Gamified Leaderboard for Hostels", "3-Member Team Collaboration"],
      demoUrl: "https://example.com/ecotrack",
      repoUrl: "https://github.com/example/ecotrack-ajce",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      caseStudy: {
        challenge: "Inspiring student body participation in campus environmental sustainability through transparent data and healthy competition.",
        solution: "Created an interactive dashboard displaying energy savings with gamified leaderboard rankings among student hostel blocks.",
        architecture: [
          "Interactive charts showing hourly energy usage curves",
          "Firebase real-time database syncing team scores",
          "Gamification badges rewarding minimal waste generation"
        ],
        metrics: [
          { label: "Hostel Blocks", value: "6 Tracked" },
          { label: "Team Size", value: "3 Engineers" },
          { label: "Sprint Time", value: "24 Hours" }
        ]
      }
    },
    {
      id: "personal-portfolio-v1",
      title: "Interactive Personal Portfolio & Lab",
      tagline: "Creative Developer Showcase • Built with React & Web Audio",
      description: "A dynamic portfolio website featuring interactive Web Audio synth pads, generative particle canvas, a simulated developer console, and customizable themes.",
      category: "Creative Tech / WebGL",
      featured: false,
      badge: "Production Deployed",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Web Audio API", "Vite"],
      metrics: ["100% Lighthouse Performance", "Custom Synthesizer Built-in", "Mobile Responsive"],
      demoUrl: "https://example.com/axsa-portfolio",
      repoUrl: "https://github.com/example/axsa-portfolio",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      caseStudy: {
        challenge: "Standing out as an engineering fresher with a portfolio that looks truly premium and showcases both engineering rigor and design flair.",
        solution: "Crafted this modern portfolio from scratch with interactive sound, command palette, theme customizers, and deep case studies.",
        architecture: [
          "Web Audio API oscillator for instant click & chime sounds",
          "HTML5 Canvas particle background with cursor physics",
          "Strict TypeScript architecture and zero external CSS bloat"
        ],
        metrics: [
          { label: "Lighthouse Score", value: "100 / 100" },
          { label: "Themes Available", value: "5 Palettes" },
          { label: "Bundle Size", value: "< 90 KB Gzip" }
        ]
      }
    }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Hackathon Competitor & Prototype Developer",
      company: "National & Regional Hackathons",
      companyUrl: "https://example.com",
      location: "Kerala / Virtual",
      period: "2024 - Present",
      current: true,
      badge: "Active Builder",
      summary: "Collaborated in high-energy teams to build zero-to-one MVPs across AI, healthcare, and smart education under 24-36 hour deadlines.",
      achievements: [
        "Reached finals with 'CogniFlow AI' adaptive learning assistant in a 36-hour hackathon sprint against 80+ collegiate teams.",
        "Led UI/UX design wireframing in Figma and built frontends using React, Tailwind CSS, and REST API integrations.",
        "Pitched technical demos and product roadmaps to panels of industry judges and startup founders."
      ],
      skillsUsed: ["React", "Figma", "Tailwind CSS", "Python", "Git", "Rapid Prototyping"]
    },
    {
      id: "exp-2",
      role: "AI Conclave Delegate & Emerging Tech Participant",
      company: "Regional AI & Tech Conclaves",
      companyUrl: "https://example.com",
      location: "Kottayam / Kochi, Kerala",
      period: "2024 - 2025",
      current: false,
      badge: "AI Explorer",
      summary: "Attended keynote panels, research symposiums, and hands-on workshops on Large Language Models, Generative AI, and agentic workflows.",
      achievements: [
        "Showcased 'MedAI' conversational triage prototype to researchers and software architects.",
        "Participated in specialized breakout tracks on prompt engineering, ethical AI guidelines, and edge ML inference.",
        "Networked with AI startup founders and researchers exploring computer vision and natural language processing."
      ],
      skillsUsed: ["Generative AI", "LLM APIs", "Python", "Prompt Engineering", "Scikit-Learn"]
    },
    {
      id: "exp-3",
      role: "UI/UX Design Workshop Fellow",
      company: "Design Sprints & HCI Masterclasses",
      companyUrl: "https://example.com",
      location: "Amal Jyothi College of Engineering",
      period: "2024",
      current: false,
      summary: "Completed intensive workshops on user-centered design, Figma component architecture, empathy mapping, and usability testing.",
      achievements: [
        "Designed 'Aura' campus event portal, receiving top design commendation for visual hierarchy and user empathy.",
        "Mastered advanced Figma features including auto-layout, interactive variants, design tokens, and micro-interactions.",
        "Conducted usability audits with 15+ student participants to iterate on user friction points."
      ],
      skillsUsed: ["Figma", "UI/UX Research", "Wireframing", "Design Systems", "Usability Testing"]
    },
    {
      id: "exp-4",
      role: "B.Tech in Computer Science & Engineering (Fresher)",
      company: "Amal Jyothi College of Engineering (AJCE)",
      companyUrl: "https://www.ajce.in",
      location: "Koovappally, Kanjirappally, Kerala",
      period: "2024 - Present",
      current: true,
      badge: "Current Degree",
      summary: "Pursuing undergraduate engineering degree with emphasis on Data Structures, Algorithms, Object-Oriented Programming, and Web Engineering.",
      achievements: [
        "Active member of campus technical clubs, coding forums, and student developer chapters.",
        "Maintained strong academic standing across foundational mathematics, C programming, and digital logic.",
        "Regularly organizing and participating in peer study groups for algorithmic problem solving."
      ],
      skillsUsed: ["C Programming", "Data Structures", "Computer Organization", "Discrete Math"]
    }
  ],
  testimonials: [
    {
      id: "t-1",
      name: "Dr. Mathew Varghese",
      role: "Senior Faculty & Hackathon Mentor",
      company: "Amal Jyothi College of Engineering",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Axsa brings a refreshing combination of technical curiosity and aesthetic sensibility. Her proactive participation in hackathons and workshops as a fresher demonstrates remarkable drive and teamwork that will take her very far.",
      verified: true,
      linkedInUrl: "https://linkedin.com"
    },
    {
      id: "t-2",
      name: "Nandana Rajesh",
      role: "UI/UX Lead & Workshop Facilitator",
      company: "Design Guild Kerala",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
      quote: "During our intensive UI/UX workshop, Axsa stood out for her attention to detail and ability to translate user feedback into clean, intuitive Figma prototypes. She designs with genuine empathy for end-users.",
      verified: true,
      linkedInUrl: "https://linkedin.com"
    },
    {
      id: "t-3",
      name: "Rahul Nair",
      role: "Hackathon Team Lead & Developer",
      company: "AJCE Tech Community",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "Working alongside Axsa during our 36-hour hackathon was an absolute pleasure. When under intense pressure, she quickly structured our frontend, refined the pitch deck, and kept our team motivated all the way to the finals.",
      verified: true,
      linkedInUrl: "https://linkedin.com"
    }
  ]
};
