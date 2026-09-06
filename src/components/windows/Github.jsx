import React, { useState, useEffect, useMemo } from "react";
import defaultGithubData from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./github.scss";

// Curated metadata dictionary to enrich GitHub repos with high-res thumbnails and details
const CURATED_METADATA = {
  intervai: {
    title: "IntervAI — AI Career Preparation Platform",
    description:
      "AI-powered career platform featuring AI mock interviews, RAG-based automated resume analysis, personalized learning roadmaps, performance evaluation, and Razorpay credit payments.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redis", "LangChain", "Qdrant", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    demoLink: "https://intervai-24vu.onrender.com/",
  },
  locomap: {
    title: "LocoMap — Real-Time Train Tracking",
    description:
      "Real-time train tracking & route visualization platform integrating live railway data, interactive maps, weather conditions, elevation profiles, terrain/POI analysis, and delay insights.",
    tags: ["React", "Tailwind CSS", "Zustand", "Framer Motion", "MapTiler", "REST APIs", "TypeScript"],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1000",
    demoLink: "https://loco-map-rho.vercel.app",
  },
  perplexity: {
    title: "Perplexity — AI Research & Chat Platform",
    description:
      "Full-stack AI platform with secure authentication, email verification, persistent chat history, real-time messaging, and AI-powered internet research with context-aware conversations.",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO", "LangChain", "Mistral AI", "Tavily"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    demoLink: "https://perplexity-ai-kzpm.onrender.com/",
  },
  macos: {
    title: "macOS — Interactive Portfolio OS",
    description:
      "Interactive macOS desktop simulation built with React, featuring window management, terminal CLI emulator, syntax-highlighted notes, live GitHub integration, and native macOS design.",
    tags: ["React", "Vite", "Sass", "macOS UI", "Window Manager", "Interactive"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000",
    demoLink: "https://mac-os-wine.vercel.app",
  },
  evenza: {
    title: "Evenza — Event Booking Platform",
    description:
      "Full-stack event discovery and reservation platform with interactive event management, user booking flows, and responsive UI.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Event Booking", "Full Stack"],
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1000",
    demoLink: "https://evenza-zqyj.onrender.com/",
  },
  "figma-editor": {
    title: "Figma-Editor — Canvas Design Tool",
    description:
      "A mini Figma design editor canvas supporting vector drawing, shape manipulation, text formatting, and interactive design workspace.",
    tags: ["JavaScript", "Canvas API", "UI Editor", "Design Tool", "React"],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1000",
    demoLink: "https://figma-editor.onrender.com",
  },
  "ai-battle-arena": {
    title: "AI-Battle-Arena — Autonomous Bot Battles",
    description:
      "Gamified interactive arena featuring simulated AI bot battles with tactical combat logic, dynamic health and power stats, and battle visualizers.",
    tags: ["JavaScript", "Game Dev", "AI Simulation", "Interactive"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000",
  },
  codesk: {
    title: "CODESK — Cloud Developer Workspace",
    description:
      "Developer workspace and collaborative code editor environment designed for quick prototyping, syntax highlighting, and snippet management.",
    tags: ["JavaScript", "Code Editor", "Developer Tools", "Web IDE"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
  },
  moodify: {
    title: "Moodify — Mood-Based Music Discovery",
    description:
      "Mood-based music and playlist recommendation web application tailored to current emotional states and user vibe.",
    tags: ["JavaScript", "Web Audio", "Recommendations", "Modern UI"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
  },
  snitch: {
    title: "Snitch — Activity & Data Monitor",
    description:
      "Web intelligence and activity monitoring tool providing real-time data tracking and analytics insights.",
    tags: ["JavaScript", "Monitoring", "Analytics", "Real-time"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  "system-design-primer": {
    title: "System Design Primer",
    description:
      "Learn how to design large-scale systems. Prep for system design interviews with architecture flashcards and patterns.",
    tags: ["System Design", "Architecture", "Scalability", "Microservices"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000";

const GitCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          src={data.image || DEFAULT_IMAGE}
          alt={data.title || data.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = DEFAULT_IMAGE;
          }}
        />
        <div className="card-image-overlay">
          {data.language && <span className="lang-badge">{data.language}</span>}
          {data.stars > 0 && <span className="stat-badge">★ {data.stars}</span>}
          {data.forks > 0 && <span className="stat-badge">⑂ {data.forks}</span>}
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h1>{data.title || data.name}</h1>
        </div>

        <p className="description">
          {data.description || "Open-source repository created by @tejascode8 on GitHub."}
        </p>

        {data.tags && data.tags.length > 0 && (
          <div className="tags">
            {data.tags.slice(0, 5).map((tag, idx) => (
              <span key={idx} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="urls">
          <a
            href={data.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-repo"
          >
            <svg
              height="16"
              viewBox="0 0 16 16"
              width="16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            Repository
          </a>
          {data.demoLink && (
            <a
              href={data.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-demo"
            >
              <svg
                height="14"
                viewBox="0 0 24 24"
                width="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowsState, zIndex, onFocus }) => {
  const [projects, setProjects] = useState(defaultGithubData);
  const [userProfile, setUserProfile] = useState({
    name: "TEJAS",
    login: "tejascode8",
    avatar_url: "https://avatars.githubusercontent.com/u/150177172?v=4",
    bio: "Full-Stack Developer | MERN Stack | Generative AI & Agentic AI | Cloud & DevOps | System Design",
    public_repos: 11,
    followers: 0,
    following: 2,
    html_url: "https://github.com/tejascode8",
  });
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [lastSyncTime, setLastSyncTime] = useState(null);

  const fetchGithubData = async () => {
    setLoading(true);
    try {
      // 1. Fetch User Profile
      const userRes = await fetch("https://api.github.com/users/tejascode8");
      if (userRes.ok) {
        const userData = await userRes.json();
        setUserProfile(userData);
        try {
          localStorage.setItem("github_user_tejascode8", JSON.stringify(userData));
        } catch (e) {
          // ignore storage error
        }
      }

      // 2. Fetch Repositories
      const reposRes = await fetch(
        "https://api.github.com/users/tejascode8/repos?sort=pushed&per_page=100"
      );
      if (reposRes.ok) {
        const reposData = await reposRes.json();

        // Map live GitHub repos with rich curated metadata
        const mapped = reposData.map((repo) => {
          const key = repo.name.toLowerCase();
          const curated = CURATED_METADATA[key] || {};

          return {
            id: repo.id,
            name: repo.name,
            title: curated.title || repo.name,
            description: repo.description || curated.description || "",
            tags:
              curated.tags ||
              (repo.topics && repo.topics.length > 0
                ? repo.topics
                : [repo.language || "Code", "GitHub", "Open Source"]),
            language: repo.language || curated.tags?.[0] || "Code",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            repoLink: repo.html_url || `https://github.com/tejascode8/${repo.name}`,
            demoLink: repo.homepage || curated.demoLink || null,
            image: curated.image || DEFAULT_IMAGE,
            pushed_at: repo.pushed_at,
          };
        });

        // Ensure all featured curated projects exist even if not returned or filtered
        const finalProjects = [...mapped];
        defaultGithubData.forEach((def) => {
          if (!finalProjects.some((p) => p.name.toLowerCase() === def.name?.toLowerCase())) {
            finalProjects.push(def);
          }
        });

        setProjects(finalProjects);
        setLastSyncTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));

        try {
          localStorage.setItem(
            "github_repos_tejascode8",
            JSON.stringify({ data: finalProjects, timestamp: Date.now() })
          );
        } catch (e) {
          // ignore storage error
        }
      }
    } catch (err) {
      console.warn("GitHub API dynamic fetch fallback to offline cache:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check cached data first
    try {
      const cachedRepos = localStorage.getItem("github_repos_tejascode8");
      const cachedUser = localStorage.getItem("github_user_tejascode8");

      if (cachedUser) {
        setUserProfile(JSON.parse(cachedUser));
      }

      if (cachedRepos) {
        const { data, timestamp } = JSON.parse(cachedRepos);
        if (data && data.length > 0) {
          setProjects(data);
          setLastSyncTime(
            new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          );
        }
      }
    } catch (e) {
      // ignore
    }

    // Fetch live updates automatically
    fetchGithubData();
  }, []);

  // Filter languages list
  const availableLanguages = useMemo(() => {
    const langs = new Set(["All"]);
    projects.forEach((p) => {
      if (p.language) langs.add(p.language);
    });
    return Array.from(langs);
  }, [projects]);

  // Filter projects by search query and language
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title?.toLowerCase().includes(q) ||
        project.name?.toLowerCase().includes(q) ||
        project.description?.toLowerCase().includes(q) ||
        project.tags?.some((t) => t.toLowerCase().includes(q));

      const matchesLang =
        selectedLanguage === "All" ||
        project.language === selectedLanguage ||
        project.tags?.includes(selectedLanguage);

      return matchesSearch && matchesLang;
    });
  }, [projects, searchQuery, selectedLanguage]);

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
      width="68vw"
      height="78vh"
      defaultX={160}
      defaultY={50}
    >
      <div className="github-window">
        {/* GitHub User Header */}
        <div className="github-header">
          <div className="profile-main">
            <img
              src={userProfile.avatar_url}
              alt={userProfile.name || userProfile.login}
              className="avatar"
            />
            <div className="profile-info">
              <div className="name-row">
                <h2>{userProfile.name || "Tejas Yadav"}</h2>
                <span className="username">@{userProfile.login}</span>
                <span className="sync-status" title="Synced with live GitHub API">
                  <span className="pulse-dot"></span> Live Sync
                </span>
              </div>
              <p className="bio">{userProfile.bio}</p>
              <div className="stats-row">
                <span className="stat-pill">
                  <strong>{projects.length || userProfile.public_repos}</strong> Repositories
                </span>
                <span className="stat-pill">
                  <strong>{userProfile.followers}</strong> Followers
                </span>
                <span className="stat-pill">
                  <strong>{userProfile.following}</strong> Following
                </span>
                {lastSyncTime && (
                  <span className="last-sync">Updated at {lastSyncTime}</span>
                )}
              </div>
            </div>
          </div>

          <div className="header-actions">
            <button
              className="refresh-btn"
              onClick={fetchGithubData}
              disabled={loading}
              title="Refresh GitHub Repositories"
            >
              <svg
                className={loading ? "spin" : ""}
                height="15"
                viewBox="0 0 24 24"
                width="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
              </svg>
              {loading ? "Syncing..." : "Sync"}
            </button>

            <a
              href={userProfile.html_url || "https://github.com/tejascode8"}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link-btn"
            >
              <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              View GitHub
            </a>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="search-filter-bar">
          <div className="search-box">
            <svg
              height="15"
              viewBox="0 0 24 24"
              width="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search repositories by name, tech or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery("")}>
                ✕
              </button>
            )}
          </div>

          <div className="language-pills">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                className={`lang-pill ${selectedLanguage === lang ? "active" : ""}`}
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Repositories Cards Grid */}
        <div className="cards">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <GitCard key={project.id || project.name} data={project} />)
          ) : (
            <div className="no-results">
              <p>No repositories match "<strong>{searchQuery}</strong>"</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLanguage("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </MacWindow>
  );
};

export default Github;
