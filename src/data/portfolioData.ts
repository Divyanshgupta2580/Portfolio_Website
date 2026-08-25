export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  status?: string;
  category: 'Software / AI';
  shortDescription: string;
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
  skills: { name: string; tag?: string; level?: 'Expert' | 'Proficient' | 'Intermediate'; icon?: string }[];
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
  type: 'Education' | 'Hackathon' | 'Industry' | 'Engineering' | 'Systems';
  description: string;
  highlights: string[];
  badge?: string;
}

export const RESUME_URL = "https://drive.google.com/file/d/1XbqOPOtspT1fE-rc5Om4RG5dNWelJBru/view?usp=sharing";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Divyansh Gupta",
    headline: "Engineering Student · Software Developer · AI/ML Enthusiast",
    statusBadge: "Engineering Student · Open to Opportunities",
    bio: "Building practical software, AI systems, and backend architectures that solve real problems.",
    aboutP1: "I am Divyansh Gupta, an engineering student and developer focused on building dependable software systems, intelligent algorithms, and practical software solutions.",
    aboutP2: "I engineer production-minded applications — combining robust full-stack software architectures with AI-powered RAG pipelines, graph data modeling, and distributed backend systems.",
    aboutP3: "From building the BenefitOS welfare discovery platform for HackHazards'26 to developing the JanSetu civic issue reporting and escalation platform, my focus is on practical, high-impact engineering.",
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
      "OCR",
      "REST APIs",
      "Git & GitHub"
    ],
    aboutCards: [
      {
        iconName: "GraduationCap",
        label: "Background",
        line1: "Engineering",
        line2: "Student"
      },
      {
        iconName: "Trophy",
        label: "BenefitOS",
        line1: "HackHazards'26",
        line2: "Platform"
      },
      {
        iconName: "Network",
        label: "JanSetu",
        line1: "Civic Issue",
        line2: "Platform"
      },
      {
        iconName: "Code2",
        label: "Technical Stack",
        line1: "Software, AI",
        line2: "& Systems"
      }
    ] as AboutCard[],
    highlights: [
      { label: "Role", value: "Engineering Student" },
      { label: "Domains", value: "AI/ML & Software Dev" },
      { label: "Focus", value: "Hackathons & AI Systems" },
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
      title: "AI Engineering",
      description: "AI systems, RAG pipelines, LLM applications and intelligent workflows.",
      iconName: "Sparkles",
      tags: ["AI Systems", "RAG Pipelines", "LLMs", "AI Agents"]
    },
    {
      id: "cap-2",
      num: "02",
      title: "Software Engineering",
      description: "Backend systems, APIs, databases and production web applications.",
      iconName: "Layers",
      tags: ["React", "Node.js", "Express", "REST APIs"]
    },
    {
      id: "cap-3",
      num: "03",
      title: "Systems & Problem Solving",
      description: "Algorithms, distributed workflows and engineering solutions for real-world problems.",
      iconName: "Code2",
      tags: ["C++", "Algorithms", "Databases", "Distributed Workflows"]
    }
  ] as CapabilityItem[],

  skills: [
    {
      title: "Languages",
      description: "Core languages used for systems engineering, backend logic, and AI workflows.",
      iconName: "Code2",
      skills: [
        { name: "C++", tag: "Systems / Logic", level: "Proficient" },
        { name: "Python", tag: "AI / Scripting", level: "Proficient" },
        { name: "TypeScript", tag: "Type-Safe Fullstack", level: "Proficient" },
        { name: "JavaScript", tag: "Web & Fullstack", level: "Proficient" },
      ],
    },
    {
      title: "AI / ML",
      description: "Intelligent systems, document parsing, and agentic workflows.",
      iconName: "Sparkles",
      skills: [
        { name: "LLMs", tag: "Model Inference", level: "Proficient" },
        { name: "RAG", tag: "Retrieval Pipelines", level: "Proficient" },
        { name: "OCR", tag: "Document Extraction", level: "Proficient" },
        { name: "AI Agents", tag: "Autonomous Workflows", level: "Proficient" },
      ],
    },
    {
      title: "Backend / Systems",
      description: "Runtime engines, API microservices, and database architectures.",
      iconName: "Layers",
      skills: [
        { name: "Node.js", tag: "Backend Runtime", level: "Proficient" },
        { name: "Express", tag: "REST Microservices", level: "Proficient" },
        { name: "REST APIs", tag: "API Architecture", level: "Proficient" },
        { name: "Databases", tag: "Data Storage & Graph", level: "Proficient" },
      ],
    },
    {
      title: "Tools",
      description: "Version control, containerization, deployment platforms, and graph infrastructure.",
      iconName: "Database",
      skills: [
        { name: "Git", tag: "Version Control", level: "Proficient" },
        { name: "GitHub", tag: "Collaboration / CI", level: "Proficient" },
        { name: "Docker", tag: "Containerization", level: "Intermediate" },
        { name: "Vercel", tag: "Deployment", level: "Proficient" },
        { name: "Neo4j", tag: "Graph Database", level: "Proficient" },
        { name: "MongoDB", tag: "Document Database", level: "Proficient" },
        { name: "Firebase", tag: "Cloud & Backend", level: "Proficient" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "benefit-os",
      title: "BenefitOS",
      subtitle: "AI-Powered Citizen Welfare Discovery Platform",
      badge: "Deployed",
      status: "Deployed",
      category: "Software / AI",
      shortDescription: "A citizen-focused platform designed to help people discover welfare schemes, understand eligibility, prepare required documents, and navigate application workflows.",
      fullDescription: "BenefitOS addresses the administrative complexity citizens face when discovering and applying for public welfare schemes. By combining graph data modeling (Neo4j) with AI-powered RAG pipelines and OCR document parsing, BenefitOS maps user profiles against eligibility criteria, detects missing paperwork, and provides an interactive AI assistant to guide applicants step-by-step.",
      highlights: [
        "AI-Powered Welfare Scheme Recommendation Engine",
        "Deterministic & Dynamic Eligibility Discovery",
        "Document Readiness & Verification Workflow via OCR",
        "Conversational AI Assistant for Scheme Guidance",
        "Graph-Based Scheme & Beneficiary Relationship Mapping (Neo4j)",
        "Decoupled Client-Server & API Architecture",
        "Express & Node.js API Microservice Architecture"
      ],
      technologies: ["TypeScript", "Node.js", "Express", "Neo4j", "AI / RAG", "OCR", "React"],
      technicalSpecs: [
        { label: "Status", value: "Deployed" },
        { label: "Architecture", value: "Decoupled Client & Express API Gateway" },
        { label: "Data Model", value: "Neo4j Graph Nodes & Traversal Edges" },
        { label: "AI Integration", value: "RAG Recommendation & OCR Parser" }
      ],
      architectureOverview: "BenefitOS uses a decoupled architecture where a client application connects to an Express gateway. Scheme requirements are represented as nodes and edges in Neo4j to allow deep relationship queries. An OCR service processes uploaded identity documents, feeding verified metadata into the RAG recommendation pipeline.",
      githubUrl: undefined,
      demoUrl: undefined,
    },
    {
      id: "jansetu",
      title: "JanSetu",
      subtitle: "Deployed Civic Issue Reporting & Escalation Platform",
      badge: "Hackathon Project",
      status: "Hackathon Project",
      category: "Software / AI",
      shortDescription: "A deployed civic issue reporting and tracking platform that enables citizens to report problems in their surrounding neighborhoods with automated 48-hour officer escalation.",
      fullDescription: "JanSetu is a deployed civic issue reporting and tracking platform that enables citizens to report problems in their surrounding neighborhoods, such as potholes, broken streetlights, and other public-infrastructure issues. When a citizen reports a local issue, the system records and tracks the complaint, assigning it to the responsible officer. The assigned officer is expected to resolve the issue within 48 hours. If the assigned officer does not resolve the issue within 48 hours, the platform automatically escalates the complaint to a higher-level officer, establishing an administrative accountability workflow for unresolved civic complaints.",
      highlights: [
        "Citizen Civic Issue Reporting & Tracking Workflow",
        "Automated Responsible Officer Assignment",
        "48-Hour Resolution SLA Monitoring",
        "Automatic Escalation to Higher-Level Officers for Unresolved Issues",
        "Administrative Accountability & Resolution Status Tracking",
        "Infrastructure Diagnostics & Incident Alert Generation"
      ],
      technologies: ["TypeScript", "Python", "Node.js", "C++", "IoT", "Edge Computing"],
      technicalSpecs: [
        { label: "Status", value: "Hackathon Project" },
        { label: "Platform Type", value: "Civic Issue & Escalation Platform" },
        { label: "Resolution SLA", value: "48-Hour Automatic Hierarchical Escalation" },
        { label: "Workflow Engine", value: "Citizen Report -> Officer Assignment -> Escalation" }
      ],
      architectureOverview: "JanSetu is built around an end-to-end civic reporting and accountability workflow. Citizens submit local infrastructure complaints through the platform. The system records each issue, assigns it to the designated local officer, and tracks the resolution status. An automated SLA monitoring engine tracks the 48-hour resolution window; if unresolved, the complaint is escalated to a higher-level officer to enforce administrative accountability.",
      githubUrl: undefined,
      docsUrl: undefined,
    },
    {
      id: "tron",
      title: "Tron",
      subtitle: "Autonomous AI Agent",
      badge: "Hackathon Project",
      status: "Hackathon Project",
      category: "Software / AI",
      shortDescription: "An autonomous AI agent that discovers relevant topics, evaluates candidates, makes editorial decisions, generates content, validates sources, maintains persistent memory, and publishes autonomously.",
      fullDescription: "Tron is an autonomous AI agent engineered for intelligent content discovery, editorial scoring, and end-to-end publishing. Featuring multi-model LLM generation (Gemini with Groq fallback), citation verification against primary sources and arXiv, schema-validated output structuring, and fail-closed duplicate detection via persistent SQLite memory, Tron operates entirely autonomously without manual intervention.",
      highlights: [
        "Autonomous Topic Discovery & Candidate Evaluation",
        "Editorial Decision-Making with Rejection Logic",
        "Persistent Memory of Publications & Decisions (SQLite)",
        "Autonomous Scheduling & Publishing",
        "Structured AI Generation with Schema Validation",
        "Fail-Closed Duplicate Protection",
        "Source Validation & Fallback Handling (Gemini -> Groq, Sources -> arXiv)"
      ],
      technologies: ["Gemini", "Groq", "arXiv", "SQLite", "Python", "Autonomous Agents", "LLMs", "API"],
      technicalSpecs: [
        { label: "Status", value: "Hackathon Project" },
        { label: "AI Generation Core", value: "Gemini Pro / Flash (Primary) + Groq (Fallback)" },
        { label: "Memory & Persistence", value: "SQLite Persistent State & Deduplication Hashes" },
        { label: "Source Retrieval", value: "Primary Research APIs & arXiv Query Fallback" },
        { label: "Execution Model", value: "Autonomous Scheduler & Schema-Validated Pipeline" }
      ],
      architectureOverview: "Tron runs an autonomous evaluation and synthesis loop. Discovered candidate topics undergo editorial scoring and rejection filtering. Qualifying candidates trigger structured generation via Gemini (failing over to Groq). Output is verified against primary citations and arXiv, checked against SQLite persistent memory to guarantee zero duplicates, and published autonomously.",
      githubUrl: undefined,
      demoUrl: undefined,
    },
    {
      id: "railguard-ai",
      title: "RailGuard-AI",
      subtitle: "Autonomous Central Rail Operations & Safety Platform",
      badge: "Deployed",
      status: "Deployed",
      category: "Software / AI",
      shortDescription: "An autonomous central rail infrastructure orchestration layer and real-time operations platform developed during the FAR AWAY hackathon, combining edge telemetry with LLM reasoning.",
      fullDescription: "RailGuard-AI is an autonomous central rail infrastructure orchestration platform built during the FAR AWAY hackathon. The system addresses low-visibility winter fog hazards and fragmented rail operations by providing a real-time data bus with sub-15ms WebSocket state synchronization across loco-pilot cabs, ticket examiners, and control centers. It integrates FogSafe edge telemetry with Gemini LLM reasoning grounded in a deterministic railway sector graph and Indian Railway G&SR operating rules to predict track anomalies and optimize network scheduling.",
      highlights: [
        "Zero-Optical Cab Signaling & FogSafe Edge Telemetry Integration",
        "Central Real-Time WebSocket State Synchronization Engine (Sub-15ms)",
        "Gemini Function-Calling Agent Grounded in Track Graph & G&SR Rules",
        "Automated Conflict Prediction & Dynamic Loop Line Route Arbitration",
        "Synchronized Loco-Pilot Cab HUD & Conductor Manifest Matrix",
        "FAR AWAY Hackathon Contributor / Team Member"
      ],
      technologies: ["React", "Node.js", "Express", "Socket.IO", "Google Gemini AI", "TypeScript", "IoT / LoRa", "Python"],
      technicalSpecs: [
        { label: "Status", value: "Deployed" },
        { label: "Event / Context", value: "FAR AWAY Hackathon (Railways Theme)" },
        { label: "Role", value: "Contributor / Team Member" },
        { label: "Real-Time Bus", value: "Sub-15ms WebSocket State Sync Engine" },
        { label: "AI Reasoning", value: "Gemini Tool Calling over Deterministic Track Graph" }
      ],
      architectureOverview: "RailGuard-AI implements a unified real-time architecture where physical edge telemetry feeds into a Node.js/Socket.IO central state bus. A deterministic 106km track graph model enforces safety clearances and braking physics while a Gemini AI agent uses function-calling tools to evaluate track capacity and issue conflict-free dispatch advisories to driver and conductor interfaces.",
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
      title: "BenefitOS — AI Citizen Welfare Discovery Platform",
      organization: "HACKHAZARDS'26",
      type: "Hackathon",
      badge: "Deployed",
      description: "Designed and built an AI-powered platform to streamline government welfare scheme discovery, document validation, and application workflows using graph databases and OCR.",
      highlights: [
        "Mapped scheme dependencies using Neo4j graph nodes",
        "Integrated OCR document parsing with RAG query systems",
        "Engineered intelligent eligibility workflows and API microservices"
      ]
    },
    {
      year: "2026",
      title: "JanSetu — Deployed Civic Issue Reporting & Escalation Platform",
      organization: "QUALCOMM HACKATHON",
      type: "Hackathon",
      badge: "Hackathon Project",
      description: "Participated in the Qualcomm Snapdragon Multiverse Hackathon, collaborating on an AI-focused project built around Qualcomm's on-device computing ecosystem and exploring optimized AI inference for edge devices.",
      highlights: [
        "Developed and integrated AI capabilities for efficient on-device inference",
        "Worked with Qualcomm AI Hub tooling and device-optimized AI workflows",
        "Contributed to building and testing an AI solution for Qualcomm-powered hardware"
      ]
    },
    {
      year: "2026",
      title: "TRON — Autonomous AI Agent",
      organization: "AB TALKS",
      type: "Engineering",
      badge: "Hackathon Project",
      description: "An autonomous AI agent project developed for AB Talks, focused on intelligent task execution, multi-model evaluation, source verification, and autonomous publishing workflows.",
      highlights: [
        "Built autonomous topic discovery, candidate scoring, and rejection logic",
        "Multi-model synthesis using Gemini with automatic Groq fallback",
        "Persistent SQLite deduplication memory and schema-validated output"
      ]
    },
    {
      year: "2026",
      title: "RailGuard-AI — Autonomous Rail Operations & Safety Platform",
      organization: "FAR AWAY HACKATHON",
      type: "Hackathon",
      badge: "Deployed",
      description: "Contributed as a team member to RailGuard-AI during the FAR AWAY hackathon, developing an autonomous rail infrastructure orchestration platform combining real-time edge telemetry and Gemini AI dispatch reasoning.",
      highlights: [
        "Real-time WebSocket telemetry synchronization across rail operations",
        "Integrated FogSafe edge telemetry for zero-optical low-visibility cab signaling",
        "Grounded Gemini agent reasoning on deterministic track graphs and G&SR safety rules"
      ]
    },
    {
      year: "Ongoing",
      title: "Building & Technical Collaboration",
      organization: "SOFTWARE & AI SYSTEMS",
      type: "Engineering",
      description: "Continuously experimenting with AI APIs, software architectures, RAG pipelines, and developer tooling.",
      highlights: [
        "Building practical software that addresses real-world challenges"
      ]
    }
  ] as JourneyItem[],

  opportunityTypes: [
    "Internship",
    "Freelance / Project",
    "Collaboration",
    "Technical Project / Source Code Request",
    "Full-time Opportunity",
    "Other"
  ]
};
