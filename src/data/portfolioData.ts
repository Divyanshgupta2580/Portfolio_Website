export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  status: string;
  category: "Software / AI";
  contribution: string;
  shortDescription: string;
  problemStatement?: string;
  fullDescription: string;
  highlights: string[];
  technologies: string[];
  technicalSpecs?: { label: string; value: string }[];
  architectureOverview: string;
  githubUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  featuredImage?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; tag: string; icon?: string }[];
}

export interface CapabilityItem {
  id: string;
  num: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface AboutCard {
  iconName: string;
  label: string;
  line1: string;
  line2: string;
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
  isUpcoming?: boolean;
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
      id: "qualcomm",
      num: "01",
      name: "Qualcomm Hackathon",
      project: "JanSetu",
      focus: "AI / Edge Computing",
      contribution: "Co-developed the complete backend with a teammate.",
      badge: "Completed",
      description: "AI-focused project exploring on-device edge computing and device-optimized AI workflows."
    },
    {
      id: "ab-talks",
      num: "02",
      name: "AB Talks",
      project: "Tron",
      focus: "AI Agent Project",
      contribution: "Majorly developed the project with a teammate, with UI development contributed by my teammate.",
      badge: "Completed",
      description: "Autonomous AI agent project for automated topic discovery, scoring, and publishing."
    },
    {
      id: "far-away",
      num: "03",
      name: "FAR AWAY Hackathon",
      project: "RailGuard-AI",
      focus: "Autonomous Rail Systems",
      contribution: "Built the hardware layer and backend communication system connecting the receiver and signal modules.",
      badge: "Completed",
      description: "Autonomous rail infrastructure orchestration with sub-15ms WebSocket state sync and Gemini AI reasoning."
    },
    {
      id: "hackhazards",
      num: "04",
      name: "HackHazards'26",
      project: "BenefitOS",
      focus: "Civic / AI Platform",
      contribution: "Designed and developed the complete platform independently.",
      badge: "Completed",
      description: "AI-powered welfare scheme discovery platform using graph data structures and OCR document parsing."
    },
    {
      id: "build-with-bharat",
      num: "05",
      name: "Build With Bharat 2.0",
      focus: "National Engineering Challenge",
      contribution: "Upcoming participation in national engineering challenge.",
      badge: "Upcoming",
      isUpcoming: true,
      description: "National engineering hackathon exploring high-impact developer and public tech solutions."
    }
  ],

  technologies: [
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Neo4j",
    "Git / GitHub",
    "Docker",
    "Vercel"
  ],

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

export const PORTFOLIO_DATA = {
  personal: {
    name: "Divyansh Gupta",
    headline: "Software Engineer & AI Systems Developer",
    statusBadge: "Engineering Student · Open to Opportunities",
    bio: "Engineering student building AI-powered systems, backend architectures, real-time applications, and practical software solutions.",
    aboutP1: "I am Divyansh Gupta, an engineering student at Mirai School of Technology (AKTU University) pursuing B.Tech in Computer Science Engineering (AI & ML), with expected graduation in 2029.",
    aboutP2: "I engineer production-minded software systems — combining backend architectures, real-time telemetry synchronization, graph data modeling in Neo4j, and multi-model AI workflows.",
    aboutP3: "From independently designing and developing BenefitOS for HackHazards'26 to co-developing the backend for JanSetu (Qualcomm Hackathon) and building hardware/backend communications for RailGuard-AI (FAR AWAY Hackathon), my focus is on practical, high-impact engineering.",
    academic: {
      college: "Mirai School of Technology, Ghaziabad",
      university: "AKTU University",
      degree: "B.Tech in Computer Science Engineering — AI & ML",
      graduation: "Expected 2029",
      sem1Cgpa: "9.00",
      sem2Cgpa: "9.43"
    },
    aboutChips: [
      "C++",
      "Python",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "Neo4j",
      "Docker",
      "RAG / AI",
      "REST APIs",
      "Git & GitHub"
    ],
    aboutCards: [
      {
        iconName: "GraduationCap",
        label: "Academics",
        line1: "9.43 CGPA (Sem 2)",
        line2: "B.Tech CSE (AI & ML) · AKTU"
      },
      {
        iconName: "Trophy",
        label: "BenefitOS",
        line1: "HackHazards'26",
        line2: "Built Independently"
      },
      {
        iconName: "Network",
        label: "JanSetu & RailGuard",
        line1: "Backend & Hardware Comm",
        line2: "Qualcomm & FAR AWAY"
      },
      {
        iconName: "Code2",
        label: "Technical Stack",
        line1: "C++, Python, React, Node",
        line2: "Docker, Neo4j, MongoDB"
      }
    ] as AboutCard[],
    highlights: [
      { label: "Role", value: "Software Engineer & AI Systems Developer" },
      { label: "Academics", value: "9.43 CGPA · B.Tech CSE (AI & ML)" },
      { label: "Focus", value: "AI Systems, Backend & Real-Time" },
    ],
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
      description: "Modern component-driven web interfaces and client state management.",
      iconName: "Globe",
      skills: [
        { name: "React", tag: "Component Architecture & Responsive UI" },
      ],
    },
    {
      title: "Backend",
      description: "Runtime engines, API microservices, and real-time state synchronization.",
      iconName: "Layers",
      skills: [
        { name: "Node.js", tag: "Server Runtime & Asynchronous I/O" },
        { name: "Express", tag: "REST API Microservices & Middleware" },
      ],
    },
    {
      title: "Databases & Data",
      description: "Graph databases, document datastores, and cloud storage systems.",
      iconName: "Database",
      skills: [
        { name: "MongoDB", tag: "Document Datastore & Aggregations" },
        { name: "Firebase", tag: "Cloud Datastore & Real-Time Sync" },
        { name: "Neo4j", tag: "Graph Nodes & Cypher Relationship Modeling" },
      ],
    },
    {
      title: "Tools & Infrastructure",
      description: "Containerization, version control, and continuous integration workflows.",
      iconName: "Terminal",
      skills: [
        { name: "Docker", tag: "Containerization & Environment Isolation" },
        { name: "Git", tag: "Distributed Version Control" },
        { name: "GitHub", tag: "Source Code Management & CI/CD" },
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
      shortDescription: "A welfare scheme discovery and document verification platform built for HackHazards'26, mapping citizen welfare rules to Neo4j graph nodes and integrating OCR parsing.",
      problemStatement: "Citizens often struggle to discover relevant government welfare schemes due to fragmented eligibility rules, complex criteria, and cumbersome document verification.",
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
      contribution: "Co-developed the complete backend with a teammate.",
      shortDescription: "A civic complaint reporting and escalation platform built during the Qualcomm Hackathon, featuring automated officer assignment and 48-hour resolution SLA tracking.",
      problemStatement: "Public grievances and infrastructure faults frequently languish without administrative accountability due to lack of transparent escalation mechanisms.",
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
      contribution: "Majorly developed the project with a teammate, with UI development contributed by my teammate.",
      shortDescription: "An autonomous AI agent engineered for AB Talks that discovers topics, evaluates candidates, makes editorial decisions, verifies sources, and maintains persistent memory.",
      problemStatement: "Automated content workflows often suffer from hallucinations, source drift, and duplicate outputs without rigorous verification and memory safeguards.",
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
      shortDescription: "An autonomous rail operations and safety platform developed during the FAR AWAY hackathon, combining real-time edge telemetry with sub-15ms WebSocket state synchronization.",
      problemStatement: "Low-visibility winter fog hazards and fragmented rail communications cause dangerous track conflicts and severe network delays.",
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
      opportunityType: "Freelance / Project",
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
      title: "QUALCOMM HACKATHON",
      organization: "Qualcomm Snapdragon Multiverse",
      projectTitle: "JanSetu",
      projectSubtitle: "Civic Issue Reporting & Escalation Platform",
      contribution: "Co-developed the complete backend with a teammate.",
      type: "Hackathon",
      badge: "Completed",
      description: "Participated in the Qualcomm Snapdragon Multiverse Hackathon, developing an automated civic issue reporting, tracking, and hierarchical escalation platform.",
      highlights: [
        "Co-developed the complete backend with a teammate",
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
      contribution: "Majorly developed the project with a teammate, with UI development contributed by my teammate.",
      type: "Engineering",
      badge: "Completed",
      description: "An autonomous AI agent engineered for intelligent topic discovery, candidate scoring, citation validation, and automated publishing.",
      highlights: [
        "Majorly developed the project with a teammate (UI by teammate)",
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
      year: "Upcoming",
      title: "BUILD WITH BHARAT 2.0",
      organization: "National Engineering Hackathon",
      projectTitle: "Engineering Challenge",
      projectSubtitle: "Public Tech & Developer Tooling",
      contribution: "Registered / Upcoming participation in national engineering challenge.",
      type: "Hackathon",
      badge: "Upcoming",
      description: "Upcoming national engineering hackathon focusing on building high-impact developer and public technology systems.",
      highlights: [
        "Registered for upcoming national-level engineering competition",
        "Preparing architectures for scalable civic and public technology systems"
      ]
    }
  ] as JourneyItem[],

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
