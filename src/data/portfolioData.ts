export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: 'Software / AI' | 'Hardware / Edge';
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
  type: 'Education' | 'Hackathon' | 'Industry/Hardware' | 'Engineering';
  description: string;
  highlights: string[];
  badge?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Divyansh Gupta",
    headline: "Engineering Student · Software Developer · AI/ML Enthusiast",
    statusBadge: "Engineering Student · Open to Opportunities",
    bio: "Building practical software, AI systems, and hardware edge engineering projects that solve real problems.",
    aboutP1: "I am Divyansh Gupta, an engineering student and developer focused on building dependable software systems, intelligent algorithms, and hardware edge solutions.",
    aboutP2: "I engineer production-minded applications — combining robust full-stack software architectures with AI-powered RAG pipelines, graph data modeling, and embedded hardware edge systems.",
    aboutP3: "From building the BenefitOS welfare discovery platform for HackHazards'26 to developing the JanSetu autonomous streetlight monitoring system for Qualcomm, my focus is on practical, high-impact engineering.",
    aboutChips: [
      "C++",
      "Python",
      "TypeScript",
      "React Native",
      "Node.js",
      "Express",
      "Neo4j",
      "Arduino UNO Q",
      "IoT",
      "RAG / AI",
      "Expo",
      "Docker"
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
        iconName: "Cpu",
        label: "JanSetu",
        line1: "Qualcomm",
        line2: "Edge Project"
      },
      {
        iconName: "Code2",
        label: "Technical Stack",
        line1: "Software, AI",
        line2: "& Hardware"
      }
    ] as AboutCard[],
    highlights: [
      { label: "Role", value: "Engineering Student" },
      { label: "Domains", value: "AI/ML & Software Dev" },
      { label: "Focus", value: "Hackathon & Edge Systems Builder" },
    ],
    avatarPlaceholderText: "DG",
    portraitPath: "/assets/divyansh_portrait.jpg",
    resumePath: "/assets/resume.pdf",
    email: "inbox.DivyanshGupta1@protonmail.com",
    githubUrl: "https://github.com/Divyanshgupta2580",
    linkedinUrl: "https://www.linkedin.com/in/divyanshgupta2007/",
  },

  capabilities: [
    {
      id: "cap-1",
      num: "01",
      title: "Software & Systems Development",
      description: "Writing maintainable C++, Python, and TypeScript software with clean modular structure, robust logic, and high-performance execution.",
      iconName: "Code2",
      tags: ["C++", "Python", "TypeScript", "Systems"]
    },
    {
      id: "cap-2",
      num: "02",
      title: "AI & RAG Architectures",
      description: "Engineering retrieval-augmented generation (RAG) pipelines, OCR document extraction workflows, and intelligent recommendation systems.",
      iconName: "Network",
      tags: ["RAG", "OCR", "Generative AI", "Vector Search"]
    },
    {
      id: "cap-3",
      num: "03",
      title: "Cross-Platform Mobile Apps",
      description: "Developing responsive, accessible mobile applications using React Native and Expo paired with type-safe state management.",
      iconName: "Layers",
      tags: ["React Native", "Expo", "Mobile UI", "TypeScript"]
    },
    {
      id: "cap-4",
      num: "04",
      title: "Hardware & Embedded Systems",
      description: "Building embedded solutions with Arduino, custom sensor integration, and real-time control systems for practical applications.",
      iconName: "Cpu",
      tags: ["Arduino", "Sensors", "C / C++", "Embedded"]
    },
    {
      id: "cap-5",
      num: "05",
      title: "Backend APIs & Integrations",
      description: "Designing secure RESTful APIs, database schemas, and third-party integrations that power scalable and reliable applications.",
      iconName: "Server",
      tags: ["Node.js", "Express", "MongoDB", "REST"]
    },
    {
      id: "cap-6",
      num: "06",
      title: "Data & Cloud Infrastructure",
      description: "Leveraging data structures, algorithms, and cloud services to build scalable, reliable, and high-performance systems.",
      iconName: "Cloud",
      tags: ["Data Structures", "Algorithms", "AWS / Cloud", "Databases"]
    }
  ] as CapabilityItem[],

  skills: [
    {
      title: "Programming Languages",
      description: "Core languages used for systems engineering, backend logic, and AI workflows.",
      iconName: "Code2",
      skills: [
        { name: "C++", tag: "Systems / Embedded", level: "Proficient" },
        { name: "Python", tag: "AI / Scripting", level: "Proficient" },
        { name: "TypeScript", tag: "Type-Safe Fullstack", level: "Proficient" },
        { name: "JavaScript", tag: "Web & Mobile", level: "Proficient" },
      ],
    },
    {
      title: "Software & Mobile Development",
      description: "Frameworks for cross-platform mobile apps and web backends.",
      iconName: "Layers",
      skills: [
        { name: "React", tag: "Web UI", level: "Proficient" },
        { name: "React Native", tag: "Cross-Platform Mobile", level: "Proficient" },
        { name: "Node.js", tag: "Backend Runtime", level: "Proficient" },
        { name: "Express", tag: "REST Microservices", level: "Proficient" },
        { name: "Expo", tag: "Mobile Ecosystem", level: "Proficient" },
      ],
    },
    {
      title: "AI / Machine Learning",
      description: "Intelligent systems, document parsing, and graph-assisted retrieval.",
      iconName: "Sparkles",
      skills: [
        { name: "RAG Architectures", tag: "Retrieval Pipelines", level: "Proficient" },
        { name: "OCR Workflows", tag: "Document Parsing", level: "Proficient" },
        { name: "Generative AI APIs", tag: "Model Inference", level: "Intermediate" },
        { name: "Machine Learning Concepts", tag: "Foundations", level: "Intermediate" },
      ],
    },
    {
      title: "Databases & Infrastructure",
      description: "Graph databases, version control, and containerized deployment.",
      iconName: "Database",
      skills: [
        { name: "Neo4j", tag: "Graph Relationships", level: "Proficient" },
        { name: "Git & GitHub", tag: "Version Control", level: "Proficient" },
        { name: "RESTful APIs", tag: "Integration", level: "Proficient" },
        { name: "Docker", tag: "Containerization", level: "Intermediate" },
      ],
    },
    {
      title: "Hardware & Edge Computing",
      description: "Edge computing, microcontrollers, and sensor integration.",
      iconName: "Cpu",
      skills: [
        { name: "Arduino UNO Q", tag: "MCU + Linux MPU", level: "Proficient" },
        { name: "Embedded C++", tag: "Microcontroller Logic", level: "Proficient" },
        { name: "IoT Sensor Arrays", tag: "LDR & Telemetry", level: "Proficient" },
        { name: "Edge Computing", tag: "Local Diagnostics", level: "Intermediate" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "benefit-os",
      title: "BenefitOS",
      subtitle: "AI-Powered Citizen Welfare Discovery Platform",
      badge: "Built for HackHazards'26",
      category: "Software / AI",
      shortDescription: "A citizen-focused platform designed to help people discover welfare schemes, understand eligibility, prepare required documents, and navigate application workflows.",
      fullDescription: "BenefitOS addresses the administrative complexity citizens face when discovering and applying for public welfare schemes. By combining graph data modeling (Neo4j) with AI-powered RAG pipelines and OCR document parsing, BenefitOS maps user profiles against eligibility criteria, detects missing paperwork, and provides an interactive AI assistant to guide applicants step-by-step.",
      highlights: [
        "AI-Powered Welfare Scheme Recommendation Engine",
        "Deterministic & Dynamic Eligibility Discovery",
        "Document Readiness & Verification Workflow via OCR",
        "Conversational AI Assistant for Scheme Guidance",
        "Graph-Based Scheme & Beneficiary Relationship Mapping (Neo4j)",
        "Cross-Platform Mobile App built with React Native & Expo",
        "Express & Node.js API Microservice Architecture"
      ],
      technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Neo4j", "AI / RAG", "OCR"],
      technicalSpecs: [
        { label: "Target Platform", value: "Cross-Platform Mobile (React Native / Expo)" },
        { label: "Data Model", value: "Neo4j Graph Nodes & Traversal Edges" },
        { label: "AI Integration", value: "RAG Recommendation & OCR Parser" }
      ],
      architectureOverview: "BenefitOS uses a decoupled architecture where a React Native mobile application connects to an Express gateway. Scheme requirements are represented as nodes and edges in Neo4j to allow deep relationship queries. An OCR service processes uploaded identity documents, feeding verified metadata into the RAG recommendation pipeline.",
      githubUrl: undefined,
      demoUrl: undefined,
    },
    {
      id: "jansetu",
      title: "JanSetu",
      subtitle: "Autonomous Streetlight Failure Detection System",
      badge: "Built for Qualcomm",
      category: "Hardware / Edge",
      shortDescription: "An autonomous streetlight monitoring and failure-detection system designed around an edge device and sensor-based monitoring.",
      fullDescription: "JanSetu is a smart hardware innovation engineered to monitor lighting infrastructure without manual inspection. Leveraging light-dependent resistor (LDR) sensor arrays coupled with the dual MCU + Linux MPU architecture of the Arduino UNO Q, JanSetu identifies lamp outages and grid failures, transmitting diagnostic alerts to central monitoring endpoints.",
      highlights: [
        "LDR-Based Streetlight Intensity & Power Monitoring",
        "Automatic Fault Detection Engine",
        "Dual-Core Arduino UNO Q Edge Architecture (MCU Firmware + Linux MPU OS)",
        "Embedded C++ Sensor Interfacing & Threshold Logic",
        "Python-Based Edge Networking & Asynchronous Communication",
        "Automated Fault Incident Reporting & Diagnostic Logging"
      ],
      technologies: ["Arduino UNO Q", "C++", "Python", "IoT", "Edge Computing", "Embedded Systems"],
      technicalSpecs: [
        { label: "Hardware Platform", value: "Arduino UNO Q" },
        { label: "Core Processing", value: "MCU (C++ Firmware) + MPU (Linux Python)" },
        { label: "Sensor Mechanism", value: "LDR Array & Circuit Power Monitor" }
      ],
      architectureOverview: "JanSetu pairs low-level C++ microcontroller sensor acquisition loops on the Arduino UNO Q's MCU with a Linux-based MPU running Python daemon scripts. Sensor readings are processed locally to evaluate thresholds before transmitting diagnostic payload reports to central monitoring servers.",
      githubUrl: undefined,
      docsUrl: undefined,
    },
    {
      id: "tron",
      title: "Tron",
      subtitle: "Autonomous AI Agent",
      badge: "Autonomous AI Project",
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
        { label: "AI Generation Core", value: "Gemini Pro / Flash (Primary) + Groq (Fallback)" },
        { label: "Memory & Persistence", value: "SQLite Persistent State & Deduplication Hashes" },
        { label: "Source Retrieval", value: "Primary Research APIs & arXiv Query Fallback" },
        { label: "Execution Model", value: "Autonomous Scheduler & Schema-Validated Pipeline" }
      ],
      architectureOverview: "Tron runs an autonomous evaluation and synthesis loop. Discovered candidate topics undergo editorial scoring and rejection filtering. Qualifying candidates trigger structured generation via Gemini (failing over to Groq). Output is verified against primary citations and arXiv, checked against SQLite persistent memory to guarantee zero duplicates, and published autonomously.",
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
        "Full-Stack Web & Mobile Development (React, React Native, TypeScript)",
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
      id: "opp-hardware",
      num: "03",
      title: "Hardware & Edge Systems",
      opportunityType: "Freelance / Project",
      badge: "Embedded & Edge",
      description: "Engineering collaborations involving embedded microcontrollers, IoT sensor telemetry, and edge diagnostics.",
      features: [
        "Embedded C++ Microcontroller Programming (Arduino UNO Q)",
        "Linux MPU Daemon & Telemetry Scripting (Python)",
        "Autonomous Sensor Interfacing & Fault Detection Logic",
        "Physical Device & Gateway Communication"
      ],
      ctaLabel: "Discuss Hardware Projects"
    }
  ] as OpportunityItem[],

  journey: [
    {
      year: "2026",
      title: "BenefitOS — AI Citizen Welfare Discovery Platform",
      organization: "HACKHAZARDS'26",
      type: "Hackathon",
      badge: "Built for HackHazards'26",
      description: "Designed and built an AI-powered platform to streamline government welfare scheme discovery, document validation, and application workflows using graph databases and OCR.",
      highlights: [
        "Mapped scheme dependencies using Neo4j graph nodes",
        "Integrated OCR document parsing with RAG query systems",
        "Developed cross-platform mobile interfaces with React Native & Expo"
      ]
    },
    {
      year: "2026",
      title: "JanSetu — Autonomous Streetlight Failure System",
      organization: "QUALCOMM PROJECT",
      type: "Industry/Hardware",
      badge: "Built for Qualcomm",
      description: "Engineered an edge hardware system on the Arduino UNO Q platform for autonomous municipal streetlight failure detection and incident reporting.",
      highlights: [
        "Programmed MCU sensor reading loops in Embedded C++",
        "Developed MPU networking & telemetry scripts in Python",
        "Achieved autonomous fault detection using LDR sensor arrays"
      ]
    },
    {
      year: "2026",
      title: "TRON — Autonomous AI Agent",
      organization: "AB TALKS",
      type: "Engineering",
      badge: "Built for AB Talks",
      description: "An autonomous AI agent project developed for AB Talks, focused on intelligent task execution, multi-model evaluation, source verification, and autonomous publishing workflows.",
      highlights: [
        "Built autonomous topic discovery, candidate scoring, and rejection logic",
        "Multi-model synthesis using Gemini with automatic Groq fallback",
        "Persistent SQLite deduplication memory and schema-validated output"
      ]
    },
    {
      year: "Ongoing",
      title: "Building & Technical Collaboration",
      organization: "SOFTWARE & HARDWARE DEVELOPMENT",
      type: "Engineering",
      description: "Continuously experimenting with AI APIs, software architectures, embedded IoT networks, and developer tooling.",
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
