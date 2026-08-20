# Portfolio Gap Analysis — Divyansh Gupta

**Project:** `/Users/apple/Desktop/Portfolio_Website`  
**Reference Site:** `https://mayank-rajput-portfolio.vercel.app/`  
**Date:** 2026-08-21  

---

## 1. ✅ Already Implemented (Preserve & Protect)

* **Centralized Configuration (`src/data/portfolioData.ts`)**: All personal info, links, portrait, resume, and project details are strictly centralized.
* **Production Contact System (`api/contact.ts` + `src/services/contactService.ts`)**:
  - Live transactional submission using **Resend** to `inbox.DivyanshGupta1@protonmail.com`.
  - Rate limiting (10s cooldown), client & server-side validation, zero secrets in frontend code.
* **Real Personal Identity & Assets**:
  - Real name: `Divyansh Gupta`.
  - Real portrait: `public/assets/divyansh_portrait.jpg`.
  - Real GitHub: `https://github.com/Divyanshgupta2580`.
  - Real LinkedIn: `https://www.linkedin.com/in/divyanshgupta2007/`.
* **Factual Flagship Projects**:
  - **BenefitOS** (*Built for HackHazards'26*): AI-Powered Citizen Welfare Discovery Platform.
  - **JanSetu** (*Built for Qualcomm*): Autonomous Streetlight Failure Detection System.
* **Iconography Cleanliness**: 100% professional SVG/Lucide icons, zero decorative emojis.
* **Core Technical Aesthetic**: Deep obsidian theme (`#07080d`), cyber cyan accents (`#00f2fe`), glassmorphism cards.

---

## 2. 🧩 Missing Features & Sections (To Add)

1. **Services / Engineering Capabilities Section (`#capabilities` / `#services`)**:
   - Structured 6-card grid with numbered badges (`01`–`06`), icons, engineering domain titles, descriptions, and hover accent line animations.
   - Represents Divyansh's core capabilities:
     1. `01` — Software & Systems Development (C++, Python, TypeScript)
     2. `02` — AI & RAG Architectures (Neo4j Graph DB, LLM pipelines, OCR)
     3. `03` — Cross-Platform Mobile Apps (React Native, Expo)
     4. `04` — Hardware & Embedded Edge Systems (Arduino UNO Q, sensor interfacing)
     5. `05` — Backend APIs & Microservices (Node.js, Express, RESTful APIs)
     6. `06` — Data Modeling & Graph Structures (Knowledge graphs & query optimization)
2. **Opportunities / "What I'm Open To" Section (`#opportunities`)**:
   - Replaces the reference site's commercial pricing table with a 3-card structural layout representing engineering opportunities:
     1. **Software Engineering Internships** (Full-stack, systems, and backend development)
     2. **AI / ML Project Collaborations** (RAG pipelines, knowledge graphs, intelligent agents)
     3. **Hardware / Edge IoT Systems** (Embedded microcontroller and edge telemetry engineering)
   - Each card contains qualification points and a direct CTA that opens the contact modal with the opportunity pre-selected.
3. **Floating Utility Controls**:
   - **Circular SVG Scroll Progress Button**: Fixed bottom-right button with dynamic circular progress stroke that scrolls smoothly back to top when clicked.
   - **Custom Interactive Cursor (Desktop)**: Inner fast dot + smooth lerping outer ring that expands over clickable elements (`[data-magnetic]`, buttons, cards, links). Disabled on touch/mobile devices.
   - **Theme Switcher**: Dark / Light mode toggle with smooth CSS variable transitions.
4. **Mobile Pill Navigation Dock**:
   - Dedicated mobile navigation dock on small screens (`< 768px`) for effortless single-handed navigation.
5. **Initial Page Wipe Transition**:
   - Subtle high-tech intro wipe animation (`DG.`) on page load.

---

## 3. 🔧 Needs Improvement (To Refine)

1. **Hero Section Polish**:
   - Quick stats row enhanced with structured dividers (`.hstat-sep`), horizontal flow, and 3D floating tilt cards around the portrait.
   - Added interactive mouse scroll indicator at the bottom of the Hero.
2. **About Section**:
   - Upgrade to the reference site's 2-column asymmetric layout:
     - Left: Clear biographical paragraphs, technical chips, and `Let's Build Together` action button.
     - Right: 2x2 grid of 4 high-impact highlight metric cards with 3D tilt effects.
3. **Skills Section**:
   - Refine skill cards with structured proficiency level tags (`Expert`, `Proficient`, `Intermediate`) and magnetic hover effects.
4. **Case Study Projects Layout**:
   - Refine project cards into alternating large case study presentations (`01`, `02`) with browser chrome frames, architecture previews, and deep-dive technical specs modals.

---

## 4. 🚫 Should NOT Be Copied

* **Commercial Pricing Plans / Fixed Prices ($)**: Divyansh is an engineering student seeking opportunities, not a commercial freelance agency.
* **Mayank Rajput's Identity & Data**: All personal info, portrait, projects (LifeLens/VIGIL), and contacts belong exclusively to Mayank Rajput and must not appear in Divyansh's portfolio.
* **Unverified or Fabricated Achievements**: Only verified academic milestones, HackHazards'26, and Qualcomm project records will be featured.
