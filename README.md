# Mit Makwana | AI Systems Engineer Portfolio

> **Live URL:** [mit-portfolio-nu.vercel.app](https://mit-portfolio-nu.vercel.app/)

## Positioning
This repository contains the source code for my professional portfolio. The design and messaging are positioned to reflect my core expertise as an **AI Systems Engineer**. It moves beyond standard interface development to highlight the ability to design and build intelligent systems that connect workflows, data, automation, and AI models into usable, production-ready products.

## Tech Stack
- **Frontend Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (Mobile-first, fully responsive)
- **Icons:** Lucide React
- **Animations:** Custom CSS transitions + React Intersection Observer
- **Deployment:** Vercel (CI/CD connected to `main` branch)

## Main Sections
1. **Hero:** High-impact executive positioning and primary CTAs.
2. **Core Competencies ("Systems I Build"):** Focus on AI Workflow Automation, Custom LLM Agents, RAG Knowledge Systems, and Full-Stack AI Products.
3. **Featured Case Studies:** Grounded, verifiable projects detailing Problem, Solution, Technical Decision, and Impact.
4. **Architecture Thinking:** Visual breakdown of a real-world LLM/WhatsApp CRM data flow (User → Webhook → Intent → Context → Logic → AI Engine → Handoff).
5. **Credentials:** Validated certifications and professional growth.
6. **Technical Stack:** Cleanly categorized (Frontend, Backend, AI, Automation, Cloud).
7. **Contact / "Why Work With Me":** Final conversion section and direct communication links.

## Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MitMakwana13/Mit-Portfolio.git
   cd Mit-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## Deployment Notes
This project is configured for seamless deployment on **Vercel**. 
- It includes a `vercel.json` file to ensure client-side routing fallback works properly.
- Any pushes to the `main` branch will automatically trigger a new production build.
- The `public` folder contains static assets, including the downloadable resume PDF.
