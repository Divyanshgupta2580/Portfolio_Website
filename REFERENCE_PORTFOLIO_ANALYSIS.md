# Reference Portfolio Analysis

**Reference Site:** [https://mayank-rajput-portfolio.vercel.app/](https://mayank-rajput-portfolio.vercel.app/)  
**Target Portfolio Subject:** Divyansh Gupta (Engineering Student · Software Developer · AI/ML Enthusiast)  
**Analysis Date:** 2026-08-21  

---

## 1. Overall Layout & Architecture

### Page Structure & Section Order
The reference site follows a vertical single-page application (SPA) architecture with clear visual section boundaries, rich glassmorphism cards, and interactive micro-animations:

1. **Page Wipe Transition Overlay**: Initial gold branded loading wipe screen (`.page-wipe`) with logo text and progress bar.
2. **Sticky Header / Navbar**: Top fixed glassmorphic navbar with logo on the left, centered/spread navigation links, direct email link, and a prominent gold `Hire Me` CTA.
3. **Hero Section (`#home`)**: Dual-column layout (left: status badge, large heading, role definition, bio description, 3 quick highlight statistics with vertical dividers, CTA buttons, social links; right: high-tech framed portrait with rotating concentric tech rings, ambient glow, and 4 floating 3D tilt tech badges; bottom: mouse scroll indicator).
4. **Services Section (`#services`)**: `What I Do` / `Services I Offer` — 6-card 3-column responsive grid with numbered indices (`01`–`06`), icon badges, titles, descriptions, and bottom hover indicator line.
5. **About Section (`#about`)**: `About Me` — 2-column split (left: narrative paragraphs, technical skill chips, `Let's Build Together` contact button; right: 4 stat cards with icons, labels, and bold highlight metrics).
6. **Skills Section (`#skills`)**: `Tech Stack` / `Skills & Technologies` — 4-column responsive grid of skill cards featuring tech icons, names, and skill level badges (`Expert`, `Proficient`, `Intermediate`).
7. **Projects / Portfolio Section (`#portfolio`)**: `Real Work` / `Live Projects` — Alternating case-study layouts (`cs-reverse` on even items) with project numbers (`01`, `02`), live status badges, category tags, system descriptions, tech badges, live demo / GitHub buttons, and browser chrome framed screenshots / interactive mockups.
8. **Education & Achievements Section (`#education`)**: `Background` / `Education & Achievements` — 2-column split (left: prominent education degree card with university icon, specialization, and college name; right: vertical list of achievement/certification cards with distinct color accents).
9. **Pricing / Commercial Section (`#pricing`)**: `Transparent Pricing` — 3-tier pricing card grid (Starter, Pro, AI Custom) with feature checklists, currency, and CTA buttons. *(To be repurposed for Divyansh into "Opportunities / What I'm Open To")*.
10. **Contact CTA Section (`#contact`)**: `Get In Touch` / `Let's Build Something Real` — Full-width centered banner with cyan highlight line, large heading, description, `Open Contact Form` modal trigger, resume download, and direct email link.
11. **Footer**: Minimalist footer with logo (admin backdoor trigger), copyright notice, social links, and resume download link.
12. **Floating Controls & Modals**: Custom cursor (dot + lerping ring), circular SVG scroll progress button (back-to-top), dark/light theme toggle, and dedicated glassmorphic Contact Modal overlay.

### Spacing & Grid System
- **Max Container Width:** `1200px` (`max-width: 1200px; margin: 0 auto; padding: 0 24px;`).
- **Navbar Height:** `70px` (`--nav-h: 70px;`).
- **Section Padding:** `100px 0` on desktop, `70px 0` on mobile.
- **Responsive Breakpoints:**
  - Desktop Large: `> 1200px`
  - Desktop Standard: `992px` – `1200px`
  - Tablet: `768px` – `991px`
  - Mobile: `< 768px` (Navbar transitions to bottom/floating Pill Nav menu)

---

## 2. Navigation System

### Desktop Navigation (`.navbar`)
- **Logo:** `MR.` with gold dot accent (`.nav-logo`). Fixed on top left.
- **Nav Links:** `Home`, `Services`, `About`, `Skills`, `Projects`, `Education`, `Pricing`.
- **Active State Indicator:** Highlights link with active accent color and updates dynamically on scroll via scrollspy (`IntersectionObserver` / scroll position calculation).
- **Sticky / Glass Behavior:** Background switches from transparent to heavy backdrop blur (`rgba(8, 20, 20, 0.94)`, `backdrop-filter: blur(12px)`) with subtle border when scrolled > 20px.
- **Right Action Area:** Displays email (`inbox.rajputmayank@gmail.com`) and small gold magnetic `Hire Me` button that opens the Contact Modal.

### Mobile Navigation (`.pill-nav`)
- Below `768px`, the standard navbar links collapse into a floating pill-track dock (`.pill-track`) fixed at the bottom with a hamburger toggle button and slide-out menu drawer containing icon + label items (`Home`, `Services`, `About`, `Skills`, `Projects`, `Edu`, `Pricing`, `Contact`).

---

## 3. Hero Section Analysis

- **Left Content:**
  - Status Tag (`.hero-tag`): Green pulsing dot (`.pulse-ring`) with text `B.Tech CSE (AI/ML) · Open to Opportunities`.
  - Main Heading (`.hero-name`): Large typography (`clamp(2.8rem, 6vw, 4.5rem)`), bold heading with split styling.
  - Dual Role Subtitle (`.hero-role`): `Full-Stack Developer` & `<span class="accent-teal">AI Enthusiast</span>`.
  - Descriptive Bio (`.hero-sub`): Concise 2-line summary with location highlight.
  - Quick Stats Grid (`.hero-stats`): 3 statistic blocks (`USAII Global AI Hackathon Finalist`, `12+ Mastered`, `Coding Since 2025`) separated by vertical accent lines (`.hstat-sep`).
  - CTA Button Group (`.hero-actions`): Gold magnetic `Get In Touch` button (opens modal), ghost `GitHub Profile` button, and outline `Resume` download button.
  - Social Links: Icon links for GitHub and LinkedIn.
- **Right Visual (Framed Portrait):**
  - Dimensions: `380px x 380px` circular portrait container.
  - Framing: Two animated concentric dashed/solid HUD tech rings spinning at different speeds (`.hero-photo-ring`).
  - Ambient Lighting: Radial cyan/teal backlight glow behind the image (`.photo-teal-glow`).
  - Floating Badges (`.float-badge`): 4 floating 3D tilt cards positioned at quadrants (React, Python, Node.js, AI/ML) with floating keyframe animations.
- **Bottom:** Animated mouse scroll indicator (`.hero-scroll-hint`) with moving wheel dot.

### Adaptation for Divyansh Gupta:
- **Heading:** `Divyansh Gupta`
- **Role:** `Engineering Student` & `Software Developer · AI/ML Enthusiast`
- **Status Badge:** `Engineering Student · Open to Technical Opportunities`
- **Quick Stats:**
  - `BenefitOS` (HackHazards'26 Platform Builder)
  - `JanSetu` (Qualcomm Edge Systems Builder)
  - `Core Stack` (C++, Python, TypeScript, React Native, Neo4j, Arduino)
- **Portrait:** Uses `public/assets/divyansh_portrait.jpg` with HUD framing and floating tech badges (`C++`, `Python`, `AI/ML`, `Arduino UNO Q`).

---

## 4. About Section Analysis

- **Layout:** Asymmetric 2-column layout.
- **Left Column:**
  - Tag: `About Me`
  - Headline: `Driven by code, fueled by curiosity`
  - 3 structured paragraphs focusing on background, technical drive, and current engineering milestones.
  - Technology Chips (`.about-chips`): Pill badges for core technologies.
  - CTA: `Let's Build Together` button opening the contact modal.
- **Right Column (Highlight Metric Cards):**
  - 4 high-impact stat cards in a 2x2 grid (`.about-stat-grid`).
  - Each card contains an icon, label, and bold 2-line highlight text with subtle glass background and hover tilt.

### Adaptation for Divyansh Gupta:
- **Left Narrative:** Focuses on systems programming, AI/RAG architectures (BenefitOS), and hardware/embedded edge computing (JanSetu).
- **Right Stat Cards:**
  1. `HackHazards'26` — Citizen Welfare Discovery Builder
  2. `Qualcomm Innovation` — Autonomous Streetlight IoT System
  3. `Full-Stack & Edge` — Mobile, Web & Microcontroller Architectures
  4. `Foundational CS` — C++, Python, TypeScript & Graph Data Systems

---

## 5. Services / Engineering Capabilities Section

- **Layout:** 6-card grid (3 columns x 2 rows).
- **Card Structure (`.svc-card`):**
  - Top Index Number (`01`, `02`, etc.) in monospace accent font.
  - Icon container with colored icon.
  - Heading and concise description.
  - Bottom accent border animation on hover (`.svc-hover-line`).

### Adaptation for Divyansh Gupta (Engineering Capabilities):
1. `01` — **Software & Systems Development** (C++, Python, TypeScript, high-performance logic)
2. `02` — **AI & RAG Architectures** (LLM pipelines, Neo4j knowledge graphs, document processing)
3. `03` — **Cross-Platform Mobile Development** (React Native, Expo, mobile-first welfare workflows)
4. `04` — **Hardware & Embedded Edge Computing** (Arduino UNO Q, sensor interfacing, MCU + Linux MPU)
5. `05` — **Backend APIs & Microservices** (Node.js, Express, RESTful APIs, secure endpoints)
6. `06` — **Database Modeling & Graph Structures** (Neo4j Graph DB, relational & document storage)

---

## 6. Skills & Technologies Section

- **Layout:** Multi-column grid of technology cards (`.skill-card`).
- **Elements:**
  - Official SVG / tech icon.
  - Technology Name.
  - Proficiency Badge (`Expert`, `Proficient`, `Intermediate`).
  - 3D magnetic tilt effect on mousemove.

### Adaptation for Divyansh Gupta:
- **Languages:** C++, Python, JavaScript, TypeScript, Embedded C.
- **Frameworks & Mobile:** React, React Native, Expo, Node.js, Express.
- **AI & Data:** Neo4j Graph DB, RAG Pipelines, Vector Search, OCR / Document Extraction.
- **Hardware & IoT:** Arduino UNO Q, LDR Sensor Arrays, Linux MPU Edge Telemetry.
- **Tools:** Git, Linux, Vercel, RESTful APIs.

---

## 7. Projects / Portfolio Showcase

- **Structure:** Large alternating case studies (`.case-study`).
- **Elements:**
  - Numbering (`01`, `02`).
  - Badge (`Live`, `Open Source`, `Hackathon Project`).
  - Category / Stack Tag.
  - Title and detailed problem/solution description.
  - Technology tag list.
  - Action buttons (`Live Demo`, `GitHub Repository`, `View Technical Specs`).
  - Visual Representation: Browser chrome frame with interactive architecture diagram or screenshot preview.

### Flagship Projects for Divyansh Gupta:
- **Project 01:** **BenefitOS** — *AI-Powered Citizen Welfare Discovery Platform* (Built for HackHazards'26).
  - Tech: React Native, Expo, TypeScript, Node.js, Express, Neo4j Graph DB, AI/RAG.
- **Project 02:** **JanSetu** — *Autonomous Streetlight Failure Detection System* (Built for Qualcomm).
  - Tech: Arduino UNO Q, C++, Python, LDR Sensor Array, MCU + Linux MPU Edge Architecture.

---

## 8. Education & Journey Section

- **Layout:** 2-column layout (`.edu-layout`).
- **Left Column:** Main Degree Card with University icon, graduation period, degree name, specialization, and college details.
- **Right Column:** Vertical card list of milestones, hackathon achievements, and technical certifications with distinct icon color accents.

### Adaptation for Divyansh Gupta:
- **Education:** Engineering Student (Computer Science & Engineering / AI & Systems).
- **Milestones:** HackHazards'26 Flagship Development, Qualcomm IoT Prototype, Systems Engineering journey.

---

## 9. Pricing Section Re-purposing ("What I'm Open To / Opportunities")

The reference site has a 3-tier commercial pricing table (`Starter`, `Pro`, `AI Custom`).  
**Decision:** Divyansh is an engineering student seeking professional roles and collaborations, not selling fixed SaaS packages. We repurpose this 3-card structural layout into **"What I'm Open To / Opportunities"**:

1. **Software Engineering Internships** (Full-time & part-time software development roles, systems programming, backend architectures).
2. **AI / ML & Full-Stack Projects** (RAG systems, graph database architectures, cross-platform mobile apps).
3. **Hardware & Edge Systems Collaboration** (Embedded IoT devices, sensor networks, robotics/edge hardware prototyping).

---

## 10. Contact Section & Contact Modal

- **On-Page Contact Banner (`#contact`):**
  - Gradient accent line, bold title (`Let's Build Something Real`), descriptive text, primary modal button (`Open Contact Form`), resume button, and direct mail link (`inbox.DivyanshGupta1@protonmail.com`).
- **Dedicated Contact Modal (`#contactModal`):**
  - Dark glassmorphism overlay (`backdrop-filter: blur(12px)`).
  - Left column: Direct contact info (Email, GitHub, LinkedIn) and active availability pill (`Open to opportunities`).
  - Right column: Interactive form (Name, Email, Subject, Opportunity Type, Message).
  - Backend: Connected to Vercel Serverless Function `/api/contact` using Resend.

---

## 11. Footer

- Logo: `Divyansh.dev` with cyan dot accent.
- Copyright: `Designed & built by Divyansh Gupta · © 2026`.
- Social Links: GitHub, LinkedIn, Email, Resume Download.

---

## 12. Theme & Visual Language

- **Color Palette (Dark Theme):**
  - Background Base: `#07080d` / `#0b0d14`
  - Cards & Glass: `rgba(15, 18, 30, 0.75)` with `backdrop-filter: blur(16px)`
  - Primary Technical Accent: Cyber Cyan / Electric Teal (`#00f2fe`, `#00d2ff`)
  - Secondary CTA Accent: Gold / Cyan Gradient (`linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)`)
  - Typography: `Space Grotesk` (Headings), `Inter` (Body text), `Fira Code` / `JetBrains Mono` (Code & badges)

---

## 13. Animation & Micro-Interactions Inventory

| Animation | Trigger | Behavior | Purpose |
| :--- | :--- | :--- | :--- |
| **Page Wipe** | Page Load | Scale-Y wipe animation reveals page content | Smooth initial presentation |
| **Custom Cursor** | Mousemove (Desktop) | Instant inner dot + smooth lerping outer ring | Premium interactive feel |
| **Scroll Progress** | Window Scroll | Circular SVG stroke fills as user scrolls down; click scrolls to top | Navigation orientation |
| **Reveal on Scroll** | IntersectionObserver | Cards fade and slide up with staggered delays (`delay-1` to `delay-4`) | Dynamic content delivery |
| **3D Tilt** | Mousemove over cards | Subtle 3D perspective tilt (`rotateX`, `rotateY`) | Tactile depth |
| **Magnetic Buttons** | Mousemove near buttons | Buttons smoothly follow cursor within threshold | High-end polish |
| **HUD Tech Rings** | Continuous | Concentric dashed/solid rings spin at 40s/60s rates around portrait | Technical aesthetic |
| **Pulsing Badges** | Continuous | Status dots pulse with glowing ripple effect | Indicates active availability |

---

## 14. Interaction Inventory Table

| Element | Interaction | Behavior | Divyansh Equivalent |
| :--- | :--- | :--- | :--- |
| **Navbar Links** | Click / Scroll | Smoothly scrolls to section; active indicator slides | Full desktop & mobile scrollspy |
| **Hire Me Button** | Click | Opens the dedicated Contact Modal | Directs to contact modal / inquiry |
| **Theme Toggle** | Click | Toggles light / dark data-theme attribute | Supports dark (default) & clean light mode |
| **Scroll-to-Top** | Click | Smoothly scrolls window to top (`scrollY = 0`) | Circular SVG progress button |
| **Project Cards** | Hover / Click | 3D card tilt; opens deep-dive technical specs modal | Full technical architecture modal |
| **Opportunity Cards** | Click | Selects opportunity type and opens Contact Modal | Pre-fills opportunity type in form |
| **Contact Form** | Submit | Validates input, prevents spam, submits to `/api/contact` | Live Resend email delivery |
| **Mobile Menu** | Click | Toggles pill navigation drawer | Floating bottom mobile navigation |
| **Resume Buttons** | Click | Downloads / opens `/assets/resume.pdf` | Direct resume access |
| **Social Links** | Click | Opens GitHub (`github.com/Divyanshgupta2580`) / LinkedIn | External secure tabs |
