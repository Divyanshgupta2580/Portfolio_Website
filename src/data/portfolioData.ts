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

export const ABOUT_MODAL_DATA: AboutModalData = {
  projects: [
    {
      id: "benefit-os",
      title: "BenefitOS",
      tagline: "AI Citizen Welfare Discovery Platform",
      category: "Civic Welfare / AI Platform",
      badge: "HackHazards'26",
      contribution: "Designed and developed the complete platform independently.",
      technologies: ["Neo4j", "Node.js", "TypeScript", "OCR", "RAG"]
    },
    {
      id: "railguard-ai",
      title: "RailGuard-AI",
      tagline: "Autonomous Rail Operations & Safety Platform",
      category: "Autonomous Rail Systems",
      badge: "FAR AWAY Hackathon",
      contribution: "Built the hardware layer and backend communication system connecting the receiver and signal modules.",
      technologies: ["React", "Node.js", "Express", "Socket.IO", "Google Gemini AI"]
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
      description: "AI-powered welfare scheme discovery platform using graph data structures and OCR document parsing."
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
      id: "build-with-bharat",
      num: "05",
      name: "Build With Bharat 2.0",
      focus: "Upcoming Engineering Hackathon",
      contribution: "Upcoming / Event has not taken place yet.",
      badge: "Upcoming",
      description: "Upcoming national hackathon — details will be added upon participation."
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
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "capabilities", label: "What I Do" },
  { id: "journey", label: "Journey" },
  { id: "opportunities", label: "Open to Work" },
  { id: "contact", label: "Contact" },
];

export const PORTFOLIO_DATA = {
  metadata: {
    url: "https://divyansh-gupta-portfolio-lac.vercel.app/",
    title: "Divyansh Gupta — Software Developer & AI/ML Enthusiast",
    description: "Personal portfolio of Divyansh Gupta, an engineering student and software developer building AI/ML platforms, intelligent algorithms, and backend systems. Creator of BenefitOS and JanSetu.",
    socialDescription: "Engineering Student · Software Developer · AI/ML Enthusiast. Building practical software, AI systems, and engineering projects.",
    siteName: "Divyansh Gupta Portfolio",
    favicon: "/favicon.svg",
  },
  personal: {
    name: "Divyansh Gupta",
    headline: "Software Engineer & AI Systems Developer",
    statusBadge: "Engineering Student · Open to Opportunities",
    bio: "Engineering student building AI-powered systems, backend architectures, real-time applications, and practical software solutions.",
    about: "Computer Science engineering student at Mirai School of Technology (AKTU) focused on building dependable software systems, backend architectures, and AI pipelines.",
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
      { label: "Competitions", value: "4+ Completed Hackathons", description: "HackHazards, Qualcomm, FAR AWAY, AB Talks" },
    ],
    focus: [
      { title: "Systems Builder", description: "Architecting backend services, REST APIs, real-time WebSocket state buses, and hardware communication" },
      { title: "AI & Data Modeling", description: "Engineering RAG pipelines, graph data structures in Neo4j, and autonomous multi-model agent workflows" },
      { title: "Hackathon Competitor", description: "4+ completed hackathons (HackHazards'26, Qualcomm, FAR AWAY, AB Talks) with working software systems" },
    ],
    profileCards: [
      { id: "projects", value: "2+", label: "Major Projects", description: "BenefitOS & RailGuard-AI" },
      { id: "tech", value: "10+", label: "Technologies", description: "Languages, Backend & Data" },
      { id: "hackathons", value: "4+", label: "Completed Hackathons", description: "Qualcomm, FAR AWAY, AB Talks, HackHazards" },
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
    portraitPath: "/assets/divyansh_portrait.jpg",
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
        { name: "Server-sent events", tag: "Streaming Updates over HTTP" },
      ],
    },
    {
      title: "Databases & Data",
      description: "Databases, caching, machine learning, and LLM integrations.",
      iconName: "Database",
      skills: [
        { name: "MongoDB", tag: "Document Datastore & Aggregations" },
        { name: "PostgreSQL", tag: "Relational Databases & SQL" },
        { name: "Firebase", tag: "Cloud Datastore & Real-Time Sync" },
        { name: "Redis", tag: "In-Memory Data Storage & Caching" },
        { name: "scikit-learn", tag: "Machine Learning in Python" },
        { name: "LLM APIs (Groq, OpenAI, Anthropic)", tag: "Language Model Integration" },
      ],
    },
    {
      title: "Tools & Infrastructure",
      description: "Containerization, deployment platforms, and version control workflows.",
      iconName: "Terminal",
      skills: [
        { name: "Docker", tag: "Containerization & Environment Isolation" },
        { name: "Git & GitHub", tag: "Version Control & Collaboration" },
        { name: "Vercel", tag: "Frontend Deployment & Hosting" },
        { name: "Railway", tag: "Backend Deployment & Hosting" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "benefit-os",
      title: "BenefitOS",
      subtitle: "AI Citizen Welfare Discovery Platform",
      badge: "Deployed",
      status: "Deployed",
      category: "Software / AI",
      contribution: "Designed and developed the complete platform independently.",
      showcase: {
        subtitle: "AI-Powered Citizen Welfare Discovery Platform",
        description: "A citizen-focused platform designed to help people discover welfare schemes, understand eligibility, prepare required documents, and navigate application workflows.",
        highlights: [
          "AI-Powered Welfare Scheme Recommendation Engine",
          "Deterministic & Dynamic Eligibility Discovery",
          "Document Readiness & Verification Workflow via OCR",
          "Conversational AI Assistant for Scheme Guidance",
        ],
        technologies: ["TypeScript", "Node.js", "Express", "Neo4j", "AI / RAG", "OCR", "React"],
        diagrams: [
          { label: "System Flow", flow: true, steps: ["Client Application\nClient UI", "REST API Gateway\nExpress Backend · Node.js Runtime", "Graph & AI Inference\nNeo4j Graph DB · RAG + OCR Engine"] },
          { label: "RAG Pipeline", title: "OCR Document Extraction & RAG Workflow", steps: [
            "Citizen uploads identity/income verification document.",
            "OCR pipeline extracts structured key-value entities and text fields.",
            "Semantic embeddings match extracted attributes against national welfare database criteria.",
            "Vector retrieval ranks qualifying citizen benefits with explainable rationale.",
          ] },
          { label: "Neo4j Graph", title: "Neo4j Graph Relationship Engine", steps: [
            "(:Citizen)-[:ELIGIBLE_FOR]->(:Scheme)",
            "(:Scheme)-[:REQUIRES_DOC]->(:Document)",
            "(:Scheme)-[:ADMINISTERED_BY]->(:Ministry)",
          ], note: "Traverses multi-hop dependency chains in sub-10ms latency." },
        ],
      },
      fullDescription: "BenefitOS is an AI-powered citizen welfare discovery platform engineered for HackHazards'26. The platform models government eligibility criteria as connected graph structures in Neo4j, enabling dynamic traversal of inter-scheme prerequisites and conflicting provisions. It integrates OCR-based document parsing with a Retrieval-Augmented Generation (RAG) query engine to analyze citizen documents against official scheme parameters and deliver clear eligibility assessments.",
      highlights: [
        "Designed and developed the complete platform independently",
        "Neo4j Graph Database Scheme Dependency Modeling",
        "OCR Document Parsing with RAG Query Integration",
        "REST API Microservices & Automated Verification Workflows",
        "Deployed for HackHazards'26 Challenge"
      ],
      technologies: ["Neo4j", "Node.js", "Express", "TypeScript", "OCR", "RAG", "REST APIs"],
      technicalSpecs: [
        { label: "Status", value: "Deployed" },
        { label: "Event", value: "HackHazards'26" },
        { label: "Contribution", value: "Built Independently" },
        { label: "Graph Engine", value: "Neo4j Graph Database" },
        { label: "Query Architecture", value: "OCR Parsing + RAG Retrieval" }
      ],
      architectureOverview: "BenefitOS processes citizen inquiries through an orchestrated pipeline: input documents undergo OCR extraction, extracted attributes are queried against a Neo4j knowledge graph of eligibility criteria, and a RAG pipeline validates scheme requirements to return structured eligibility recommendations.",
      githubUrl: undefined,
      demoUrl: undefined,
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
      projectSubtitle: "AI Citizen Welfare Discovery Platform",
      contribution: "Designed and developed the complete platform independently.",
      type: "Hackathon",
      badge: "Completed",
      description: "Designed and built an AI-powered platform to streamline citizen welfare scheme discovery, document verification, and eligibility assessment using graph databases and OCR.",
      highlights: [
        "Designed and developed the complete platform independently",
        "Mapped government scheme prerequisites as Neo4j graph nodes and relationships",
        "Integrated OCR document parsing with RAG query verification pipelines"
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
