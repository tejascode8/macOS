import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState, zIndex, onFocus }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        `Tejas Yadav — Full-Stack & Generative AI Developer\n\n` +
        `Focused on building intelligent and scalable web applications using the MERN Stack and Generative AI. ` +
        `Strong foundation in frontend/backend engineering, AI integrations (RAG, Agentic workflows), ` +
        `real-time systems, AWS cloud deployments, and system design through hands-on product development.`,
    },
    skills: {
      description: "List technical skills and competencies",
      usage: "skills",
      fn: () =>
`Languages:
  • JavaScript (ES6+)

Frontend:
  • React.js, Vite, Tailwind CSS, HTML5, CSS3, SCSS/SASS

Backend & Real-Time:
  • Node.js, Express.js, REST APIs, Microservices Architecture, WebSockets, Socket.IO

Databases & Caching:
  • MongoDB, Mongoose, Redis

Artificial Intelligence & GenAI:
  • Generative AI, Agentic AI, RAG, Embeddings & Vector Search (Qdrant),
  • Semantic Search, NLP, LangChain, LangGraph, MediaPipe, Computer Vision

Cloud & DevOps:
  • AWS (ECS, EC2, ECR, ALB), Docker, CI/CD Pipelines

Tools & Ecosystem:
  • Git, GitHub, Redux Toolkit, Zustand, BullMQ, JWT, OAuth, Bcrypt, ImageKit, Firebase`,
    },
    projects: {
      description: "View featured production projects",
      usage: "projects",
      fn: () =>
`1. intervAI — AI-Powered Career Preparation Platform
   • Live: https://intervai-24vu.onrender.com
   • Stack: React, Node.js, Express.js, MongoDB, Redis, Firebase, LangChain, LangGraph, Qdrant, Docker, AWS
   • Features: AI mock interviews, RAG-based automated resume analysis, personalized learning roadmaps,
               performance evaluation, and Razorpay credit payments backed by microservices & API Gateway.

2. LocoMap — Real-Time Train Tracking & Route Visualization
   • Live: https://loco-map-rho.vercel.app
   • Stack: React, Tailwind CSS, Zustand, Framer Motion, MapTiler, REST APIs
   • Features: Live railway data integration, interactive map tracking, weather conditions, elevation profiles,
               terrain/POI analysis, delay insights, glassmorphism UI, and SVG visualizations.

3. Perplexity — AI-Driven Research & Chat Platform
   • Live: https://perplexity-ai-kzpm.onrender.com
   • Stack: React, Vite, Redux Toolkit, Node.js, Express.js, MongoDB, Socket.IO, LangChain, Mistral AI, Tavily, JWT
   • Features: Full-stack AI research platform with real-time web search, context-aware conversations,
               secure authentication, email verification, and persistent chat history.`,
    },
    experience: {
      description: "Display professional engineering experience",
      usage: "experience",
      fn: () =>
`Full-Stack & Generative AI Developer (2024 - Present)
  • Architected and deployed production web platforms (intervAI, LocoMap, Perplexity AI).
  • Built RAG pipelines and Agentic AI workflows using LangChain, LangGraph, and Qdrant vector databases.
  • Developed high-throughput microservices, Redis caching layers, BullMQ queues, and WebSockets.
  • Containerized services with Docker and deployed to AWS (ECS, EC2, ECR, ALB) with CI/CD.`,
    },
    education: {
      description: "Display academic background and credentials",
      usage: "education",
      fn: () =>
`1. Master of Computer Applications (MCA) — 8.1 / 10 CGPA
   • Institution: Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, UP
   • Duration: July 2024 – June 2026

2. Bachelor of Science (B.Sc.) — 7.2 / 10 CGPA
   • Institution: Prof. Rajendra Singh (Rajju Bhaiya) University (PRSU), Allahabad, UP
   • Duration: May 2021 – June 2024`,
    },
    contact: {
      description: "Get direct contact information",
      usage: "contact",
      fn: () =>
`Name: Tejas Yadav
Email: tejasyadav765@gmail.com
Phone: +91 8726567030
Location: Uttar Pradesh, India (Open to Remote / Relocation)`,
    },
    github: {
      description: "Open GitHub profile in a new tab",
      usage: "github",
      fn: () => {
        window.open("https://github.com/tejascode8", "_blank");
        return "Opening GitHub: https://github.com/tejascode8 ...";
      },
    },
    linkedin: {
      description: "Open LinkedIn profile in a new tab",
      usage: "linkedin",
      fn: () => {
        window.open("https://linkedin.com/in/tejas-yadav-60837a406", "_blank");
        return "Opening LinkedIn: https://linkedin.com/in/tejas-yadav-60837a406 ...";
      },
    },
    resume: {
      description: "View and download resume PDF",
      usage: "resume",
      fn: () => {
        window.open("/resume.pdf", "_blank");
        return "Opening Resume PDF in a new tab (/resume.pdf)...";
      },
    },
    social: {
      description: "View all social and portfolio links",
      usage: "social",
      fn: () =>
`GitHub:    https://github.com/tejascode8
LinkedIn:  https://linkedin.com/in/tejas-yadav-60837a406
Portfolio: https://tejas-portfolio-five-alpha.vercel.app`,
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════════════════════════════════════════╗
║                  Tejas Yadav — Terminal Portfolio v2.0                     
║              Full-Stack Developer (MERN Stack + Generative AI)             
╚════════════════════════════════════════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive macOS Terminal.

Type 'help' to see all commands, or try one of these:
  • about       - Learn about my background & technical focus
  • skills      - View full technical stack (Frontend, Backend, AI, Cloud)
  • projects    - Explore featured production projects with live links
  • experience  - View engineering experience & architecture achievements
  • education   - Check academic background and degrees
  • contact     - Get email, phone & location details
  • social      - View GitHub, LinkedIn & portfolio links
  • resume      - Open / download my official resume PDF
  • github      - Jump directly to my GitHub profile
  • linkedin    - Connect with me on LinkedIn
  • clear       - Clear the terminal screen

Happy exploring! 🚀
`;

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
      width="54vw"
      height="65vh"
      defaultX={240}
      defaultY={90}
    >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"tejas@dev:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;

