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
  skills: { name: string; tag?: string; icon?: string }[];
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
    statusBadge: "Engineering Student · Software Developer · AI/ML",
    bio: "Building practical software, AI systems, and engineering projects that solve real problems.",
    aboutLong: "I am an engineering student with a deep passion for designing resilient software systems, AI/ML solutions, and hardware-software integrations. From graph-backed welfare discovery platforms to edge computing streetlight diagnostics, I focus on building practical engineering solutions that address real technical challenges.",
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
    linkedinUrl: "https://linkedin.com/in/divyansh-gupta",
  },

  skills: [
    {
      title: "Programming Languages",
      description: "Core languages used for systems engineering, backend logic, and AI workflows.",
      iconName: "Code2",
      skills: [
        { name: "C++", tag: "Systems / Embedded" },
        { name: "Python", tag: "AI / ML / Scripting" },
        { name: "TypeScript", tag: "Type-Safe Fullstack" },
        { name: "JavaScript", tag: "Web & Mobile" },
      ],
    },
    {
      title: "Software & Mobile Development",
      description: "Frameworks for cross-platform mobile apps and web backends.",
      iconName: "Layers",
      skills: [
        { name: "React", tag: "Frontend" },
        { name: "React Native", tag: "Mobile" },
        { name: "Node.js", tag: "Backend Runtime" },
        { name: "Express", tag: "REST Microservices" },
        { name: "Expo", tag: "Mobile Tooling" },
      ],
    },
    {
      title: "AI / Machine Learning",
      description: "Intelligent systems, document parsing, and graph-assisted retrieval.",
      iconName: "Sparkles",
      skills: [
        { name: "Artificial Intelligence", tag: "Core Concepts" },
        { name: "Machine Learning", tag: "Models & Data" },
        { name: "Generative AI", tag: "LLM Integration" },
        { name: "RAG", tag: "Retrieval Augmented" },
        { name: "OCR", tag: "Document Parsing" },
        { name: "AI APIs", tag: "Cloud Inference" },
      ],
    },
    {
      title: "Databases & Infrastructure",
      description: "Graph databases, version control, and containerized deployment.",
      iconName: "Database",
      skills: [
        { name: "Neo4j", tag: "Graph DB" },
        { name: "Git", tag: "Version Control" },
        { name: "GitHub", tag: "CI/CD & Storage" },
        { name: "REST APIs", tag: "Integration" },
        { name: "Docker", tag: "Containerization" },
        { name: "Cloud Deployment", tag: "Infrastructure" },
      ],
    },
    {
      title: "Hardware & Systems",
      description: "Edge computing, microcontrollers, and sensor integration.",
      iconName: "Cpu",
      skills: [
        { name: "Arduino", tag: "Microcontrollers" },
        { name: "Arduino UNO Q", tag: "MCU + MPU Board" },
        { name: "IoT", tag: "Sensor Networks" },
        { name: "Edge Computing", tag: "On-Device Inference" },
        { name: "Embedded Systems", tag: "C++ Firmware" },
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
    }
  ] as Project[],

  journey: [
    {
      year: "Present",
      title: "Engineering Education & Systems Development",
      organization: "Computer Science & Engineering",
      type: "Education",
      description: "Studying computer science fundamentals, software engineering principles, operating systems, networking, and modern artificial intelligence.",
      highlights: [
        "Focusing on high-performance C++ and Python engineering",
        "Building full-stack web and cross-platform mobile solutions",
        "Exploring generative AI, RAG architectures, and edge computing"
      ]
    },
    {
      year: "2026",
      title: "BenefitOS — AI Citizen Welfare Discovery Platform",
      organization: "HackHazards'26",
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
      year: "2025 - 2026",
      title: "JanSetu — Autonomous Streetlight Failure System",
      organization: "Qualcomm Project",
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
      year: "Ongoing",
      title: "Building & Technical Collaboration",
      organization: "Software & Hardware Development",
      type: "Engineering",
      description: "Continuously experimenting with AI APIs, software architectures, embedded IoT networks, and developer tooling.",
      highlights: [
        "Building practical software that addresses real-world challenges",
        "Open to engineering internships, freelance development, and technical collaboration"
      ]
    }
  ] as JourneyItem[],

  opportunityTypes: [
    "Internship",
    "Freelance / Project",
    "Collaboration",
    "Full-time Opportunity",
    "Other"
  ]
};
