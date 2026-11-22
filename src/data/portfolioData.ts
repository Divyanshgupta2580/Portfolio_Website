export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  status: string;
  category: "Software / AI";
  contribution: string;
  fullDescription: string;
  highlights: string[];
  technologies: string[];
  technicalSpecs?: { label: string; value: string }[];
  architectureOverview: string;
  githubUrl?: string;
  demoUrl?: string;
  thumbnail?: string;
  showcase: {
    subtitle: string;
    description: string;
    highlights: string[];
    technologies: string[];
    diagrams: {
      label: string;
      title?: string;
      steps: string[];
      flow?: true;
      note?: string;
    }[];
  };
}

export interface SkillItem {
  name: string;
  tag: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
  capabilities?: string[];
}

export interface CapabilityItem {
  id: string;
  num: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface OpportunityItem {
  id: string;
  num: string;
  title: string;
  opportunityType: string;
  badge?: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  organization: string;
  projectTitle: string;
  projectSubtitle: string;
  contribution: string;
  type: "Hackathon" | "Engineering" | "Education";
  badge: string;
  description: string;
  highlights: string[];
  eventUrl?: string;
}

export interface AboutProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  contribution: string;
  technologies: string[];
}

export interface AboutHackathonItem {
  id: string;
  num: string;
  name: string;
  project?: string;
  focus: string;
  contribution: string;
  badge: string;
  description?: string;
  eventUrl?: string;
}

export interface AboutModalData {
  projects: AboutProjectItem[];
  hackathons: AboutHackathonItem[];
  technologies: string[];
  learning: {
    title: string;
    tagline: string;
    description: string;
    pillars: { label: string; desc: string }[];
    ctaLabel: string;
  };
}

const benefitOSSubtitle = "Welfare Access & Workforce Compliance Platform";
const vihaanX = {
  name: "Vihaan X: Software Track",
  eventUrl: "https://unstop.com/hackathons/vihaan-x-software-track-dtu-new-delhi-1761841",
};
const jeevika = {
  id: "jeevika",
  title: "JEEVIKA",
  subtitle: "Continuity-of-Care Prototype",
  description: "A healthcare workflow prototype that carries patient intake information through clinician review, emergency coordination, ward alerts, pharmacy dispensing, and follow-up.",
  contribution: "Built JEEVIKA for the Software Track at Vihaan X, organized by IEEE DTU.",
  technologies: ["React", "TypeScript", "Hono", "Flutter", "Cloudflare D1"],
};

export const ABOUT_MODAL_DATA: AboutModalData = {
  projects: [
    {
      id: "benefit-os",
      title: "BenefitOS",
      tagline: benefitOSSubtitle,
      category: "Civic Welfare / Workforce Compliance",
      badge: "HackHazards'26",
      contribution: "Designed and built the original BenefitOS platform independently at HackHazards'26.",
      technologies: ["React", "NestJS", "Prisma", "PostgreSQL", "OCR"]
    },
    {
      id: "railguard-ai",
      title: "RailGuard-AI",
      tagline: "Autonomous Rail Operations & Safety Platform",
      category: "Autonomous Rail Systems",
      badge: "FAR AWAY Hackathon",
      contribution: "Built the hardware layer and backend communication system connecting the receiver and signal modules.",
      technologies: ["React", "Node.js", "Express", "Socket.IO", "Google Gemini AI"]
    },
    {
      id: jeevika.id,
      title: jeevika.title,
      tagline: jeevika.subtitle,
      category: "Healthcare Software",
      badge: vihaanX.name,
      contribution: jeevika.contribution,
      technologies: jeevika.technologies
    }
  ],

  hackathons: [
    {
      id: "hackhazards",
      num: "01",
      name: "HackHazards'26",
      project: "BenefitOS",
      focus: "Civic / AI Platform",
      contribution: "Designed and developed the complete platform independently.",
      badge: "Completed",
      description: "BenefitOS began as a welfare discovery project and has expanded into a citizen welfare and employer compliance platform."
    },
    {
      id: "qualcomm",
      num: "02",
      name: "Qualcomm Hackathon",
      project: "JanSetu",
      focus: "AI / Edge Computing",
      contribution: "Me and my friend built the complete backend.",
      badge: "Completed",
      description: "AI-focused project exploring on-device edge computing and device-optimized AI workflows."
    },
    {
      id: "ab-talks",
      num: "03",
      name: "AB Talks",
      project: "Tron",
      focus: "AI Agent Project",
      contribution: "Majorly built by me; my friend worked on the UI.",
      badge: "Completed",
      description: "Autonomous AI agent project for automated topic discovery, scoring, and publishing."
    },
    {
      id: "far-away",
      num: "04",
      name: "FAR AWAY Hackathon",
      project: "RailGuard-AI",
      focus: "Autonomous Rail Systems",
      contribution: "Built the hardware layer and backend communication system connecting the receiver and signal modules.",
      badge: "Completed",
      description: "Autonomous rail infrastructure orchestration with sub-15ms WebSocket state sync and Gemini AI reasoning."
    },
    {
      id: "vihaan-x",
      num: "05",
      name: vihaanX.name,
      project: jeevika.title,
      focus: jeevika.subtitle,
      contribution: jeevika.contribution,
      badge: "Completed",
      description: jeevika.description,
      eventUrl: vihaanX.eventUrl
    }
  ],

  get technologies() {
    return PORTFOLIO_DATA.skills.flatMap(({ skills }) => skills.map(({ name }) => name));
  },

  learning: {
    title: "Always Learning & Building",
    tagline: "Continuous Engineering & Systems Growth",
    description: "Continuously exploring AI engineering, software systems, backend architecture, algorithms, and practical engineering solutions.",
    pillars: [
      { label: "AI Systems", desc: "Autonomous AI agents, RAG pipelines & multi-model workflows" },
      { label: "Software Architecture", desc: "Scalable backend APIs, distributed state & graph databases" },
      { label: "Algorithms & DSA", desc: "Data structures & competitive problem solving in C++" },
      { label: "Practical Projects", desc: "Production-minded engineering for hackathons & real-world problems" }
    ],
    ctaLabel: "View Skills"
  }
};

export const RESUME_URL = "https://drive.google.com/file/d/1XbqOPOtspT1fE-rc5Om4RG5dNWelJBru/view?usp=sharing";

export const NAVIGATION = [
  { id: "about", label: "About" },
  { id: "experience", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const PORTFOLIO_DATA = {
  metadata: {
    url: "https://divyansh-gupta-portfolio-lac.vercel.app/",
    title: "Divyansh Gupta — Software Developer & AI/ML Enthusiast",
    description: "Portfolio of Divyansh Gupta, an engineering student building AI applications and backend systems. Projects include BenefitOS, JEEVIKA, and JanSetu.",
    socialDescription: "Engineering Student · Software Developer · AI/ML Enthusiast. Building practical software, AI systems, and engineering projects.",
    siteName: "Divyansh Gupta Portfolio",
    favicon: "/assets/divyansh-pixel-portrait.png",
  },
  personal: {
    name: "Divyansh Gupta",
    headline: "Software Engineer & AI Systems Developer",
    statusBadge: "Engineering Student · Open to Opportunities",
    bio: "Engineering student building AI-powered systems, backend architectures, real-time applications, and practical software solutions.",
    about: "I’m an AI Engineer and Full-Stack Developer who doesn’t just build demos; I ship production-ready systems that solve real problems. As a computer science engineering student at Mirai School of Technology (AKTU), I focus on designing clear APIs, simplifying workflows, and making information easier to find and use.",
    academic: {
      college: "Mirai School of Technology",
      university: "AKTU University",
      degree: "B.Tech in Computer Science Engineering (AI & ML)",
      graduation: "2029",
      sem1Cgpa: "9.00",
      sem2Cgpa: "9.43"
    },
    highlights: [
      { label: "Academics · 9.43 CGPA", value: "B.Tech CSE (AI & ML)", description: "Mirai School of Tech · AKTU (2029)" },
      { label: "Core Focus", value: "Software & AI Systems", description: "Backend, RAG & Real-Time" },
      { label: "Competitions", value: "5 Completed Hackathons", description: "HackHazards, Qualcomm, FAR AWAY, AB Talks, Vihaan X" },
    ],
    focus: [
      { title: "Systems Builder", description: "Architecting backend services, REST APIs, real-time WebSocket state buses, and hardware communication" },
      { title: "AI & Data Modeling", description: "Engineering RAG pipelines, graph data structures in Neo4j, and autonomous multi-model agent workflows" },
      { title: "Hackathon Competitor", description: "Built projects at five hackathons, including Vihaan X, HackHazards'26, Qualcomm, FAR AWAY, and AB Talks" },
    ],
    profileCards: [
      { id: "projects", value: "3", label: "Major Projects", description: "BenefitOS, RailGuard-AI & JEEVIKA" },
      {
        id: "tech",
        get value(): string { return String(ABOUT_MODAL_DATA.technologies.length); },
        label: "Technologies",
        description: "Languages, Backend & Data"
      },
      {
        id: "hackathons",
        get value(): string {
          return String(ABOUT_MODAL_DATA.hackathons.filter(({ badge }) => badge === "Completed").length);
        },
        label: "Completed Hackathons",
        description: "Qualcomm, FAR AWAY, AB Talks, HackHazards, Vihaan X"
      },
      { id: "learning", value: "Always", label: "Learning & Building", description: "Continuous Systems Growth" },
    ] as const,
    portraitTags: ["C++", "Python", "TypeScript", "Node.js"],
    footer: {
      description: "Building software, AI systems, and engineering solutions that solve practical problems.",
      focus: "Engineering Student · AI & Software Engineering",
    },
    contact: {
      availability: "I am open to engineering internships, freelance technical challenges, AI/ML collaborations, and full-time software developer opportunities.",
      directChannels: "Have an opportunity, project idea, or technical proposal? Reach out directly.",
      inquiry: "Submit an inquiry for software engineering internships, AI/ML research collaborations, or technical projects.",
      notes: [
        { title: "Quick Response", description: "I typically respond within 24 hours" },
        { title: "Open to Opportunities", description: "Internships, projects and collaborations" },
        { title: "Let's Create Impact", description: "Building practical solutions that matter" },
      ],
    },
    avatarPlaceholderText: "DG",
    portraitPath: "/assets/divyansh-pixel-portrait.png",
    portraitSize: { width: 1122, height: 1402 },
    resumePath: RESUME_URL,
    email: "inbox.DivyanshGupta1@protonmail.com",
    githubUrl: "https://github.com/Divyanshgupta2580",
    linkedinUrl: "https://www.linkedin.com/in/divyanshgupta2007/",
  },

  capabilities: [
    {
      id: "cap-1",
      num: "01",
      title: "AI Systems & Workflows",
      description: "Engineering RAG pipelines, graph representations in Neo4j, and autonomous AI agents with structured outputs.",
      iconName: "Sparkles",
      tags: ["RAG Pipelines", "Autonomous Agents", "LLM Integration", "OCR Workflows"]
    },
    {
      id: "cap-2",
      num: "02",
      title: "Backend & Systems Architecture",
      description: "Developing scalable REST APIs, microservices, real-time WebSocket communication, and database architectures.",
      iconName: "Layers",
      tags: ["Node.js", "Express", "REST APIs", "WebSocket State Sync"]
    },
    {
      id: "cap-3",
      num: "03",
      title: "Algorithms & Problem Solving",
      description: "Core algorithms, data structures in C++, distributed state coordination, and hardware-backend interfaces.",
      iconName: "Code2",
      tags: ["C++", "Data Structures", "Neo4j Graph", "Hardware Interfacing"]
    }
  ] as CapabilityItem[],

  skills: [
    {
      title: "Languages",
      description: "Core languages used for systems engineering, backend logic, and AI workflows.",
      iconName: "Code2",
      skills: [
        { name: "C++", tag: "Systems Programming & Problem Solving" },
        { name: "Python", tag: "AI Pipelines & Backend Scripting" },
        { name: "TypeScript", tag: "Type-Safe Fullstack Engineering" },
        { name: "JavaScript", tag: "Web Applications & APIs" },
      ],
    },
    {
      title: "Frontend",
      description: "Modern component-driven web interfaces and application development.",
      iconName: "Globe",
      skills: [
        { name: "React", tag: "Component Architecture & Responsive UI" },
        { name: "Next.js", tag: "React Applications & Server Rendering" },
        { name: "HTML & CSS", tag: "Semantic Markup & Responsive Layouts" },
        { name: "Vite", tag: "Frontend Development & Builds" },
        { name: "Redux", tag: "State Management" },
      ],
    },
    {
      title: "Backend",
      description: "Runtime engines, API microservices, and real-time state synchronization.",
      iconName: "Layers",
      skills: [
        { name: "Node.js", tag: "Server Runtime & Asynchronous I/O" },
        { name: "Express", tag: "REST API Microservices & Middleware" },
        { name: "FastAPI", tag: "Python API Development" },
        { name: "Server-Sent Events (SSE)", tag: "Streaming Updates over HTTP" },
      ],
    },
    {
      title: "Databases & Caching",
      description: "Relational databases, document storage, and caching.",
      iconName: "Database",
      skills: [
        { name: "PostgreSQL", tag: "Relational Databases & SQL" },
        { name: "MongoDB", tag: "Document Datastore & Aggregations" },
        { name: "Firebase", tag: "Cloud Datastore & Real-Time Sync" },
        { name: "Supabase", tag: "PostgreSQL Backend Services" },
        { name: "Redis", tag: "In-Memory Data Storage & Caching" },
      ],
    },
    {
      title: "AI & Machine Learning",
      description: "Machine learning and LLM integrations.",
      iconName: "Sparkles",
      skills: [
        { name: "scikit-learn", tag: "Machine Learning in Python" },
        { name: "LLM APIs (Groq, OpenAI, Anthropic, Gemini)", tag: "Language Model Integration" },
      ],
    },
    {
      title: "Tools & Deployment",
      description: "Containerization, deployment platforms, and version control workflows.",
      iconName: "Terminal",
      skills: [
        { name: "Git & GitHub", tag: "Version Control & Collaboration" },
        { name: "Docker", tag: "Containerization & Environment Isolation" },
        { name: "Vercel", tag: "Frontend Deployment & Hosting" },
        { name: "Railway", tag: "Backend Deployment & Hosting" },
        { name: "Render", tag: "Backend Deployment & Hosting" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "benefit-os",
      title: "BenefitOS",
      subtitle: benefitOSSubtitle,
      badge: "Deployed",
      status: "Deployed",
      category: "Software / AI",
      contribution: "Designed and built the original BenefitOS platform independently at HackHazards'26.",
      showcase: {
        subtitle: benefitOSSubtitle,
        description: "A two-sided platform for Indian public welfare. Citizens can check scheme eligibility, prepare documents, and track applications. Employers can onboard workers, check benefit payment readiness, and prepare workforce welfare enrollment records.",
        highlights: [
          "Citizen welfare and employer compliance portals",
          "Rules-based scheme eligibility, OCR document vault, and application tracking",
          "Bulk workforce onboarding and Direct Benefit Transfer readiness checks",
          "Enrollment records and compliance workflows for workforce welfare schemes",
          "English and Hindi AI guidance for citizens",
        ],
        technologies: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "OCR"],
        diagrams: [
          { label: "System Flow", flow: true, steps: [
            "Citizen Portal and Enterprise Gateway\nSeparate citizen and employer workflows",
            "NestJS Backend\nEligibility rules, document processing, and workforce services",
            "Prisma and PostgreSQL\nProfiles, scheme rules, worker rosters, and application records",
          ] },
          { label: "Citizen Journey", flow: true, steps: [
            "Household profile\nCollect the information required for scheme matching",
            "Rules-based eligibility\nEvaluate those details against scheme rules and document requirements",
            "Documents and applications\nOrganize paperwork with OCR, track applications, and access bilingual guidance",
          ] },
          { label: "Employer Journey", flow: true, steps: [
            "Import a worker roster\nValidate CSV, Excel, or JSON records",
            "Review benefit payment readiness\nFlag account-holder name mismatches and outdated bank codes",
            "Prepare workforce welfare records\nGenerate enrollment paperwork and track compliance activity",
          ] },
        ],
      },
      fullDescription: "BenefitOS started at HackHazards'26 as a welfare discovery project. Its current scope connects two workflows. The citizen portal checks household details against scheme rules, organizes documents with OCR, tracks applications, and offers English and Hindi guidance. The employer gateway imports worker rosters, checks readiness for Direct Benefit Transfer (DBT), and helps prepare workforce welfare enrollment and compliance records.",
      highlights: [
        "Distinct citizen and employer interfaces with role-aware access",
        "Deterministic eligibility rules and application tracking",
        "OCR document processing and bilingual citizen guidance",
        "Bulk roster validation and benefit payment readiness checks",
        "Enrollment and compliance records for employer workflows"
      ],
      technologies: ["React", "NestJS", "Prisma", "PostgreSQL", "TypeScript", "Socket.IO", "OCR"],
      technicalSpecs: [
        { label: "Status", value: "Deployed" },
        { label: "Origin", value: "HackHazards'26" },
        { label: "Application", value: "Citizen portal and employer compliance gateway" },
        { label: "Backend", value: "NestJS, Prisma, and PostgreSQL" },
        { label: "Eligibility", value: "Deterministic scheme rules" }
      ],
      architectureOverview: "The two portals share a NestJS API backed by Prisma and PostgreSQL. A rules engine evaluates citizen profiles and document requirements. Separate employer services validate worker rosters, flag bank-record issues, and generate enrollment records. OCR extracts document fields, and the bilingual copilot explains steps in the citizen workflow.",
      demoUrl: "https://benifit-os.onrender.com/",
    },
    {
      id: "jansetu",
      title: "JanSetu",
      subtitle: "Civic Issue Reporting & Escalation Platform",
      badge: "Hackathon Project",
      status: "Hackathon Project",
      category: "Software / AI",
      contribution: "Me and my friend built the complete backend.",
      showcase: {
        subtitle: "Deployed Civic Issue Reporting & Escalation Platform",
        description: "A deployed civic issue reporting and tracking platform that enables citizens to report problems in their surrounding neighborhoods with automated 48-hour officer escalation.",
        highlights: [
          "Citizen Civic Issue Reporting & Real-Time Tracking",
          "Automated Responsible Officer Assignment & SLA Monitoring",
          "48-Hour Resolution SLA with Automatic Hierarchical Escalation",
          "Administrative Accountability for Unresolved Civic Complaints",
        ],
        technologies: ["TypeScript", "Python", "Node.js", "C++", "IoT Edge Computing"],
        diagrams: [
          { label: "Escalation Flow", flow: true, steps: ["Citizen Issue Report\nPotholes & Streetlights", "Officer Assigned\n48-Hour Resolution SLA", "Automatic Escalation to Higher-Level Officer\nIf unresolved within 48 hours"] },
          { label: "48-Hour SLA", title: "48-Hour Accountability Workflow", steps: [
            "A citizen reports a local civic issue through JanSetu.",
            "The issue is recorded and tracked by the system.",
            "The reported issue is assigned to the responsible officer.",
            "The assigned officer is expected to resolve the issue within 48 hours.",
            "The system tracks the resolution status in real-time.",
            "If unresolved within 48 hours, the complaint escalates to a higher-level officer.",
            "This creates an accountability workflow for unresolved civic complaints.",
          ] },
          { label: "Architecture", title: "Civic Issue Tracking & Diagnostics Engine", steps: [
            "Citizen Reporting Pipeline: Real-time incident intake, geographic tagging, and status verification.",
            "Automated SLA Engine: Background daemon tracking 48-hour resolution windows and triggering hierarchical escalation.",
            "Infrastructure Diagnostics: Telemetry integration for automated streetlight and infrastructure outage monitoring.",
          ] },
        ],
      },
      fullDescription: "JanSetu is a civic issue reporting and escalation platform developed during the Qualcomm Hackathon. The platform enables citizens to submit local infrastructure reports, assigns incidents to designated local officers, and enforces a 48-hour resolution SLA with automated hierarchical escalation to ensure administrative accountability.",
      highlights: [
        "Co-developed the complete backend with a teammate",
        "Automated Officer Assignment & Resolution Workflow",
        "48-Hour Resolution SLA Monitoring & Hierarchical Escalation",
        "Administrative Accountability & Status Tracking APIs",
        "Qualcomm Snapdragon Multiverse Hackathon Entry"
      ],
      technologies: ["Node.js", "Express", "TypeScript", "Python", "REST APIs", "Edge Computing"],
      technicalSpecs: [
        { label: "Status", value: "Hackathon Project" },
        { label: "Event", value: "Qualcomm Hackathon" },
        { label: "Contribution", value: "Co-Developed Backend" },
        { label: "Resolution SLA", value: "48-Hour Hierarchical Escalation" },
        { label: "Backend Core", value: "Node.js / Express REST Engine" }
      ],
      architectureOverview: "JanSetu connects citizen issue reporting to an automated escalation backend. When complaints are submitted, the backend assigns them to the responsible local official and initializes a 48-hour SLA timer. If the issue is not marked resolved within the timeframe, it automatically escalates up the municipal hierarchy.",
      githubUrl: undefined,
      demoUrl: undefined,
    },
    {
      id: "tron",
      title: "Tron",
      subtitle: "Autonomous AI Agent",
      badge: "Hackathon Project",
      status: "Hackathon Project",
      category: "Software / AI",
      contribution: "Majorly built by me; my friend worked on the UI.",
      showcase: {
        subtitle: "Autonomous AI Agent",
        description: "An autonomous AI agent that discovers relevant topics, evaluates candidates, makes editorial decisions, generates content, validates sources, maintains persistent memory, and publishes autonomously.",
        highlights: [
          "Autonomous Topic Discovery & Candidate Evaluation",
          "Editorial Decision-Making with Rejection Logic",
          "Persistent Memory of Publications & Decisions (SQLite)",
          "Autonomous Scheduling & Publishing",
          "Structured AI Generation with Schema Validation",
          "Fail-Closed Duplicate Protection & Source Fallback (Groq / arXiv)",
        ],
        technologies: ["Gemini", "Groq", "arXiv", "SQLite", "Python", "Autonomous Agents", "LLMs", "API"],
        diagrams: [
          { label: "Agent Flow", flow: true, steps: ["Topic Discovery\nCandidate Engine", "Editorial Scoring & Rejection Filter\nGemini Generation · Groq Fallback", "Source Validation & Memory Check\narXiv & Sources · SQLite Memory", "Schema Validation & Scheduling\nAutonomous Publishing · Scheduled Run"] },
          { label: "Decision Pipeline", title: "Editorial Scoring & Multi-Model Fallback", steps: [
            "Candidate Evaluation: Discovered topics are filtered via strict threshold scoring.",
            "Rejection Logic: Low-relevance or unsupported topics are rejected early.",
            "Multi-Model Architecture: Primary generation executes via Gemini Pro/Flash with automatic failover to Groq Llama-3.",
            "Strict Schema: Output is validated against predefined Pydantic JSON schemas.",
          ] },
          { label: "Memory & Publishing", title: "Persistent Memory & Source Integrity", steps: [
            "SQLite Store: Tracks historical publication logs, rejected candidates, and semantic topic clusters.",
            "Duplicate Protection: Employs fail-closed deduplication hashes before publishing.",
            "Citation Verification: Cross-checks factual assertions against primary research citations and arXiv API fallbacks.",
          ] },
        ],
      },
      fullDescription: "Tron is an autonomous AI agent engineered for AB Talks for intelligent content discovery, editorial scoring, and end-to-end publishing. It features multi-model LLM generation (Gemini with Groq fallback), citation verification against primary sources and arXiv, schema-validated output structuring, and fail-closed duplicate detection via persistent SQLite memory.",
      highlights: [
        "Majorly developed the project with a teammate (UI by teammate)",
        "Autonomous Topic Discovery & Editorial Scoring Engine",
        "Multi-Model LLM Generation (Gemini with Groq Fallback)",
        "Persistent SQLite Deduplication Memory",
        "Primary Source Verification against arXiv APIs"
      ],
      technologies: ["Python", "Gemini", "Groq", "SQLite", "arXiv API", "Autonomous Agents", "LLMs"],
      technicalSpecs: [
        { label: "Status", value: "Hackathon Project" },
        { label: "Event", value: "AB Talks" },
        { label: "Contribution", value: "Major Developer (UI by Teammate)" },
        { label: "AI Core", value: "Gemini + Groq Fallback" },
        { label: "State Store", value: "SQLite Persistent Deduplication" }
      ],
      architectureOverview: "Tron operates an autonomous evaluation loop: candidate topics are evaluated against editorial criteria, qualifying topics are synthesized using multi-model LLM generation, sources are verified against primary citations/arXiv, and deduplication hashes are committed to SQLite memory before autonomous publishing.",
      githubUrl: undefined,
      demoUrl: undefined,
    },
    {
      id: "railguard-ai",
      title: "RailGuard-AI",
      subtitle: "Autonomous Rail Operations & Safety Platform",
      badge: "Deployed",
      status: "Deployed",
      category: "Software / AI",
      contribution: "Built the hardware layer and backend communication system connecting the receiver and signal modules.",
      showcase: {
        subtitle: "Autonomous Rail Operations & Safety Platform",
        description: "An autonomous central rail infrastructure orchestration layer and real-time operations platform developed during the FAR AWAY hackathon, combining edge telemetry with LLM reasoning.",
        highlights: [
          "Zero-Optical Cab Signaling & FogSafe Edge Telemetry",
          "Central Real-Time WebSocket State Synchronization Engine",
          "Gemini Tool-Calling Agent Grounded in Deterministic Track Graph",
          "Automated Conflict Prediction & Dynamic Route Arbitration",
          "Synchronized Loco-Pilot Cab HUD & Conductor Manifest Matrix",
          "FAR AWAY Hackathon Contributor / Team Member",
        ],
        technologies: ["React", "Node.js", "Express", "Socket.IO", "Google Gemini AI", "TypeScript", "IoT / LoRa", "Python"],
        diagrams: [
          { label: "System Flow", flow: true, steps: ["FogSafe Edge Telemetry\nESP32 + LoRa 433MHz", "Sub-15ms WebSocket State Bus\nCentral State Bus · Node.js & Socket.IO", "Synchronized Role Broadcasts\nLoco-Pilot Cab HUD · Gemini OCC Agent"] },
          { label: "Agentic Triage", title: "Deterministic Track Graph & Gemini Function Calling", steps: [
            "106km Sector Graph: Represents 53 automatic blocks and Clear Standing Room (CSR) loop line capacities.",
            "Tool-Calling Grounding: Invokes mathematical functions (get_loop_capacity, calculate_braking_distance) to eliminate hallucinations.",
            "G&SR Rule Enforcement: Enforces Indian Railway safety rules for loop line clearance and dynamic wrong-way overtake advisories.",
          ] },
          { label: "FogSafe & Telemetry", title: "Zero-Optical Cab Signaling & Passenger Relay", steps: [
            "LoRa 433MHz Mesh: Relays signal aspect and visibility telemetry directly into locomotive cabs >3.5 km in advance during severe winter fog.",
            "Sub-15ms Passenger SOS: Instant WebSocket relay from passenger berth beacons to conductor split-flap matrix.",
            "Kinetic Deceleration: Physics calculations for heavy freight and passenger express stopping distances.",
          ] },
        ],
      },
      fullDescription: "RailGuard-AI is an autonomous rail infrastructure orchestration platform built during the FAR AWAY hackathon. The system addresses low-visibility winter fog hazards and fragmented rail communications by providing a real-time data bus with sub-15ms WebSocket state synchronization across loco-pilot cabs, ticket examiners, and control centers. It integrates FogSafe edge telemetry with Gemini LLM reasoning grounded in a deterministic railway sector graph and Indian Railway G&SR operating rules.",
      highlights: [
        "Built hardware layer & backend communication between receiver & signal modules",
        "Sub-15ms WebSocket State Synchronization Across Operations",
        "FogSafe Edge Telemetry for Zero-Optical Cab Signaling",
        "Gemini Function-Calling Agent Grounded in Track Graph & G&SR Rules",
        "Automated Conflict Prediction & Dynamic Route Arbitration"
      ],
      technologies: ["React", "Node.js", "Express", "Socket.IO", "Google Gemini AI", "TypeScript", "Hardware Interfacing", "Python"],
      technicalSpecs: [
        { label: "Status", value: "Deployed" },
        { label: "Event", value: "FAR AWAY Hackathon" },
        { label: "Contribution", value: "Hardware Layer & Backend Comm" },
        { label: "Real-Time Bus", value: "Sub-15ms WebSocket State Sync" },
        { label: "AI Engine", value: "Gemini Function Calling over Track Graph" }
      ],
      architectureOverview: "RailGuard-AI implements a unified architecture where physical hardware telemetry feeds into a Node.js/Socket.IO state bus. A deterministic track graph model calculates braking distances and clearances while a Gemini AI agent evaluates track capacity and issues conflict-free dispatch advisories.",
      githubUrl: undefined,
      demoUrl: undefined,
    },
    {
      id: jeevika.id,
      title: jeevika.title,
      subtitle: jeevika.subtitle,
      badge: "Hackathon Prototype",
      status: "Hackathon Prototype",
      category: "Software / AI",
      contribution: jeevika.contribution,
      showcase: {
        subtitle: jeevika.subtitle,
        description: jeevika.description,
        highlights: [
          "One consented patient thread across care handoffs",
          "Multilingual kiosk and mobile intake",
          "Clinician review, staff queues, and ward alert coordination",
          "Pharmacy dispensing and home follow-up workflows",
        ],
        technologies: jeevika.technologies,
        diagrams: [
          { label: "Patient Thread", flow: true, steps: [
            "Multilingual intake\nCollect check-in information through the kiosk or mobile app",
            "Clinician workspace\nReview intake and carry the context into the encounter",
            "Care handoff\nShare relevant context with ward and pharmacy workflows",
            "Follow-up\nRoute recovery observations to a staff review queue",
          ] },
          { label: "System Architecture", flow: true, steps: [
            "React web and Flutter mobile\nRole-specific views for intake, review, and coordination",
            "Hono API and TypeScript rules\nHandle shared workflow records and separate language assistance from rule-based checks",
            "Cloudflare D1\nPersist synthetic demo records",
          ] },
        ],
      },
      fullDescription: "JEEVIKA demonstrates how a shared patient thread can carry information across hospital and home-care handoffs. Multilingual intake feeds a clinician workspace. The same thread supports emergency and ward coordination, pharmacy dispensing, and follow-up. The prototype uses synthetic patient data and keeps clinicians responsible for care decisions.",
      highlights: [
        "Connected multilingual patient intake to clinician review",
        "Shared patient context across queues, ward alerts, and pharmacy handoffs",
        "Included home observations and staff follow-up",
        "Kept language assistance separate from rule-based workflow checks",
      ],
      technologies: jeevika.technologies,
      technicalSpecs: [
        { label: "Event", value: vihaanX.name },
        { label: "Organizer", value: "IEEE DTU" },
        { label: "Status", value: "Synthetic-data prototype" },
        { label: "Interfaces", value: "React web and Flutter mobile" },
        { label: "API and Storage", value: "Hono and Cloudflare D1" },
      ],
      architectureOverview: "React and Flutter provide web and mobile interfaces for the care workflow. A Hono API uses shared TypeScript modules and persists demonstration records in Cloudflare D1. Language tools assist intake and communication, while separate workflow rules and staff review govern handoffs.",
    }
  ] as Project[],

  opportunities: [
    {
      id: "opp-swe",
      num: "01",
      title: "Software Engineering",
      opportunityType: "Internship",
      badge: "Open to Internships",
      description: "Full-stack and backend software engineering roles focusing on building robust, scalable applications.",
      features: [
        "Full-Stack Web Development (React, TypeScript, Modern UI)",
        "Backend & Microservice Architectures (Node.js, Express, REST APIs)",
        "Systems Programming & Algorithm Design (C++, Python)",
        "Clean, Maintainable, Modular Codebases"
      ],
      ctaLabel: "Discuss Software Roles"
    },
    {
      id: "opp-ai",
      num: "02",
      title: "AI / ML & Systems",
      opportunityType: "Collaboration",
      badge: "AI & Graph Research",
      description: "Projects and technical collaborations involving RAG pipelines, graph representations, and intelligent workflows.",
      features: [
        "RAG (Retrieval-Augmented Generation) Implementations",
        "Graph Database Relationship Modeling (Neo4j)",
        "OCR & Intelligent Document Verification Workflows",
        "AI-Assisted Software Application Integration"
      ],
      ctaLabel: "Discuss AI Collaboration"
    },
    {
      id: "opp-backend",
      num: "03",
      title: "Backend & Distributed Systems",
      opportunityType: "AI / Backend Project",
      badge: "Systems & APIs",
      description: "Engineering collaborations involving backend architectures, API integrations, and scalable database systems.",
      features: [
        "Backend API Design & Microservice Integration (Node.js, Express)",
        "Graph & Relational Database Architecture (Neo4j, SQL)",
        "High-Performance System Logic & Algorithms (C++, Python)",
        "Secure, Production-Minded Software Deployments"
      ],
      ctaLabel: "Discuss Backend Projects"
    }
  ] as OpportunityItem[],

  journey: [
    {
      year: "2026",
      title: "HACKHAZARDS'26",
      organization: "HackHazards'26 Hackathon",
      projectTitle: "BenefitOS",
      projectSubtitle: benefitOSSubtitle,
      contribution: "Designed and built the original BenefitOS platform independently at HackHazards'26.",
      type: "Hackathon",
      badge: "Completed",
      description: "BenefitOS began as a citizen welfare discovery project at HackHazards'26 and later expanded to include workforce enrollment and employer compliance workflows.",
      highlights: [
        "Designed and built the original platform independently",
        "Expanded the citizen workflow to cover eligibility, document readiness, and application tracking",
        "Added an employer gateway for worker onboarding, DBT readiness checks, and workforce welfare records"
      ]
    },
    {
      year: "2026",
      title: "QUALCOMM HACKATHON",
      organization: "Qualcomm Snapdragon Multiverse",
      projectTitle: "JanSetu",
      projectSubtitle: "Civic Issue Reporting & Escalation Platform",
      contribution: "Me and my friend built the complete backend.",
      type: "Hackathon",
      badge: "Completed",
      description: "Participated in the Qualcomm Snapdragon Multiverse Hackathon, developing an automated civic issue reporting, tracking, and hierarchical escalation platform.",
      highlights: [
        "Me and my friend built the complete backend",
        "Developed automated local officer assignment logic",
        "Engineered 48-hour SLA timer and hierarchical escalation workflows"
      ]
    },
    {
      year: "2026",
      title: "AB TALKS",
      organization: "AB Talks Hackathon",
      projectTitle: "Tron",
      projectSubtitle: "Autonomous AI Agent",
      contribution: "Majorly built by me; my friend worked on the UI.",
      type: "Engineering",
      badge: "Completed",
      description: "An autonomous AI agent engineered for intelligent topic discovery, candidate scoring, citation validation, and automated publishing.",
      highlights: [
        "Majorly built by me; my friend worked on the UI",
        "Engineered autonomous topic evaluation and multi-model LLM generation",
        "Built persistent SQLite deduplication memory and arXiv citation verification"
      ]
    },
    {
      year: "2026",
      title: "FAR AWAY HACKATHON",
      organization: "FAR AWAY Hackathon (Railways Theme)",
      projectTitle: "RailGuard-AI",
      projectSubtitle: "Autonomous Rail Operations & Safety Platform",
      contribution: "Built the hardware layer and backend communication system connecting the receiver and signal modules.",
      type: "Hackathon",
      badge: "Completed",
      description: "An autonomous rail operations and safety platform combining FogSafe edge telemetry with sub-15ms WebSocket state synchronization across loco-pilots, conductors, and dispatchers.",
      highlights: [
        "Built hardware layer & backend communication between receiver & signal modules",
        "Engineered sub-15ms WebSocket state synchronization across train crew interfaces",
        "Grounded Gemini agent reasoning on deterministic track graphs and G&SR safety rules"
      ]
    },
    {
      year: "2026",
      title: "VIHAAN X",
      organization: vihaanX.name,
      projectTitle: jeevika.title,
      projectSubtitle: jeevika.subtitle,
      contribution: jeevika.contribution,
      type: "Hackathon",
      badge: "Completed",
      description: "Built the JEEVIKA prototype while participating in the Software Track at Delhi Technological University, New Delhi.",
      highlights: [
        "Connected multilingual intake, clinician review, and follow-up through a shared patient thread",
        "Demonstrated ward coordination and pharmacy handoffs with synthetic patient data",
      ],
      eventUrl: vihaanX.eventUrl
    }
  ] as JourneyItem[],

  codeRequestType: "Technical Project / Source Code Request",
  opportunityTypes: [
    "Internship",
    "Freelance Development",
    "Software Development",
    "AI / Backend Project",
    "Collaboration",
    "Hackathon Team",
    "Other"
  ]
};
