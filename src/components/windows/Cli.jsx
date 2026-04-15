import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "I am a Full Stack MERN + GenAI developer passionate about building scalable web apps, AI-powered systems, and highly interactive user experiences using modern technologies.",
    },
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend: React.js, Next.js, TailwindCSS, GSAP, Three.js, D3.js
Backend: Node.js, Express.js, REST APIs
Databases: MongoDB, Redis
AI/GenAI: Prompt Engineering, OpenAI APIs, RAG, Embeddings, Vector DBs
Tools: Git, Docker, Postman, Figma
Cloud & Systems: AWS, Linux`,
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. AI SaaS Platform - MERN + OpenAI (RAG based)
2. Advanced Portfolio - React + GSAP + Three.js
3. Full Stack MERN Apps (50+ Projects Collection)
4. Real-time Systems - WebSockets + Scalable APIs
5. Data Visualization Dashboard - D3.js`,
    },
    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `Full Stack MERN + GenAI Developer (Self) (2025 - Present)
  - Built scalable full stack + AI integrated applications
  - Developed RAG systems, embeddings, and AI-powered features

Full Stack Developer (Learning Phase) (2023 - 2025)
  - Built 50+ projects across frontend, backend & AI
  - Mastered MERN stack, GSAP animations & system design`,
    },
    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Email: tejasyadav765@gmail.com
Phone: +91 8726567030
Location: Uttar Pradesh, India`,
    },
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/tejascode8", "_blank");
        return "Opening GitHub...";
      },
    },
    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => "Resume download started...",
    },
    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `GitHub: github.com/tejascode8
LinkedIn: /in/tejasyadav
Portfolio: coming soon...`,
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════
         Welcome to My Portfolio CLI!      
╚════════════════════════════════════════

Hello! 👋 I'm Tejas — Full Stack MERN + GenAI Developer.

Explore my work, skills, and projects through this interactive terminal.

Type 'help' to see all available commands, or try:
  • about      - Learn about me
  • skills     - View my technical stack
  • projects   - Check out my work
  • experience - See my journey
  • contact    - Get in touch

Tip: This portfolio reflects real-world projects, AI systems, and modern web engineering.

Happy exploring! 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
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
