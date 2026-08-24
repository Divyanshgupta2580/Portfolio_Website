# Divyansh Gupta — Engineering Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite showcasing software engineering, AI/RAG architectures, and autonomous agent projects.

## Featured Technical Projects

1. **BenefitOS** — AI Citizen Welfare Discovery Platform
   - Streamlines government welfare scheme discovery and eligibility workflows.
   - Decoupled client architecture with Express API gateway, Neo4j graph dependency modeling, and OCR document extraction feeding a RAG recommendation pipeline.

2. **RailGuard-AI** — Autonomous Rail Operations & Safety Platform
   - Central rail infrastructure orchestration layer and real-time operations portal built for the FAR AWAY Hackathon.
   - Sub-15ms WebSocket state engine connecting driver cab HUDs, conductor manifests, and autonomous Gemini LLM dispatch arbitration grounded in a deterministic 106km railway track graph.

3. **JanSetu** — Deployed Civic Issue Reporting & Escalation Platform
   - Public infrastructure tracking platform for neighborhood complaints (potholes, streetlights).
   - Automated officer assignment and a 48-hour resolution SLA monitoring engine with hierarchical administrative escalation.

4. **Tron** — Autonomous AI Agent
   - Autonomous topic discovery, candidate scoring, and publishing agent.
   - Multi-model LLM generation (Gemini with Groq fallback), citation validation (arXiv API), and fail-closed duplicate detection with persistent SQLite memory.

---

## Tech Stack & Architecture

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Modular Vanilla CSS & Custom Design System (Dark mode, glassmorphism, responsive CSS grid)
- **Icons:** Lucide React
- **Build & Quality:** TypeScript strict mode, Vite bundler

---

## Getting Started Locally

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Divyanshgupta2580/Portfolio_Website.git
cd Portfolio_Website

# Install dependencies
npm install
```

### Running Locally
```bash
# Start local development server
npm run dev
```
Open `http://localhost:5173` to view the application.

### Building for Production
```bash
# Type check and build bundle
npm run build

# Preview production build
npm run preview
```

---

## Repository Structure

```
Portfolio_Website/
├── public/               # Static assets (images, documents)
├── src/
│   ├── components/       # UI Components (Hero, About, Projects, Journey, etc.)
│   ├── data/             # Centralized structured data (portfolioData.ts)
│   ├── index.css         # Global design system & theme tokens
│   ├── App.tsx           # Main application root
│   └── main.tsx          # React entry point
├── index.html            # HTML shell with meta tags & SEO
├── package.json          # Project scripts and dependencies
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite build configuration
```
