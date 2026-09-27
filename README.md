# macOS Desktop Simulation & Interactive Portfolio OS

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![SASS](https://img.shields.io/badge/SASS-1.97.2-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://mac-os-wine.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**An interactive, high-fidelity macOS Sonoma desktop simulation built with React 19 and Vite.**

[🌐 Live Demo](https://mac-os-wine.vercel.app) • [💼 Developer Portfolio](https://tejas-portfolio-five-alpha.vercel.app) • [🐙 GitHub Repository](https://github.com/tejascode8/macOS)

</div>

---

## 📋 Project Overview

**macOS Desktop Simulation** is a web-based operating system simulator replicating the look, feel, and interactivity of Apple's macOS Sonoma. It serves as both a technical demonstration of advanced React 19 architecture, asset preloading, and custom SCSS glassmorphism, and an interactive developer portfolio.

* **Purpose**: Provide an engaging, interactive desktop environment that showcases modern web development, window management, and real-time API integrations.
* **Problem Solved**: Replaces traditional static portfolio websites with an interactive, memorable OS experience where recruiters and developers can explore code, live projects, resumes, and terminal commands.

---

## ✨ Key Features

* **🍎 Universal Boot Loader & Preload Engine (`UniversalLoader.jsx`, `LoaderContext.jsx`)**:
  * Realistic Apple Silicon startup screen with glowing Apple logo, progress bar, real-time percentage, and dynamic kernel status text.
  * Weighted multi-resource preload pipeline tracking document loading, fonts (`document.fonts.ready`), retina wallpapers, SVG icon sets, and text files.
  * Native macOS 12-segment radial spinner (`MacSpinner`) and glassmorphic card skeletons.
  * Quick skip support using `Space`, `Escape`, or `Enter`.
  * Full macOS reboot simulation via Apple menu or CLI command (`reboot`).

* **🌊 Glassmorphic macOS Dock (`Dock.jsx`)**:
  * Magnification physics on hover with cubic-bezier smoothing and adjacent neighbor scaling.
  * Tooltips displaying application labels.
  * Active application indicators (white dot indicator).
  * Quick launchers for GitHub, Notes, Resume, Google Calendar, Spotify, Mail, LinkedIn, and Terminal.

* **🪟 Draggable & Resizable Window Manager (`MacWindow.jsx`)**:
  * Powered by `react-rnd` with boundary constraints (`bounds="parent"`).
  * Authentic macOS traffic light controls: Red (Close), Yellow (Minimize), Green (Maximize / Restore).
  * Double-click title bar to toggle full-screen maximize.
  * Dynamic active-window elevation algorithm (`bringToFront`) managing z-index layering.

* **💻 Interactive Terminal CLI (`Cli.jsx`)**:
  * Built with `react-console-emulator` featuring a custom `tejas@dev:~$` prompt.
  * Interactive commands for inspecting developer background, technical competencies, live project links, education, and triggering system reboots.

* **🐙 Live GitHub Explorer (`Github.jsx`)**:
  * Real-time synchronization with GitHub REST API (`/users/tejascode8` and `/repos`).
  * User profile header with live avatar, bio, repository count, and followers.
  * Dual-layer caching (`localStorage` + bundled JSON seed data) for instant offline fallback.
  * In-memory search filter across project titles, names, descriptions, and tags.
  * Dynamic language filter pills populated from repository languages.
  * Curated metadata overlays with high-resolution Unsplash covers and direct demo/repo links.

* **📝 Developer Notes & Code Viewer (`Note.jsx`)**:
  * Asynchronously fetches and displays `profile.config.ts`.
  * Syntax highlighting powered by `react-syntax-highlighter` (`atelierDuneDark` theme) with line numbers.
  * 1-click clipboard copy button with visual "Copied!" feedback.

* **📄 Embedded PDF Resume Viewer (`Resume.jsx`)**:
  * In-window PDF reader with direct toolbar download and "Open in New Tab" actions.

* **🎵 Spotify Music Player Widget (`Spotify.jsx`)**:
  * Embedded Spotify playlist music player.

* **⏱️ System Menu Bar (`Nav.jsx` & `DateTime.jsx`)**:
  * Functional Apple menu, Developer Profile dropdown, and Window manager menus.
  * Real-time live digital clock updating every 1,000ms.
  * Wi-Fi status indicator.

---

## 🛠️ Tech Stack

### Core Technologies
* **React 19.2.0**: Modern UI library using hooks (`useState`, `useEffect`, `useRef`, `useCallback`, `useMemo`, `useContext`).
* **Vite 7.2.4**: Next-generation frontend build tooling and hot module replacement (HMR).
* **SCSS / SASS 1.97.2**: Advanced CSS preprocessing with variables, mixins, glassmorphic backdrop filters, and keyframe animations.
* **react-rnd 10.5.2**: Draggable and resizable window system.
* **react-console-emulator 5.0.2**: Terminal CLI simulation engine.
* **react-syntax-highlighter 16.1.0**: Code syntax highlighting for developer notes.
* **react-markdown 10.1.0**: Markdown parsing and formatting.

### Development & Quality Tools
* **ESLint 9.39.1**: Code quality and consistency linting.
* **@vitejs/plugin-react 5.1.1**: Official Vite plugin for React.
* **TypeScript Definitions**: Type definitions for React components (`@types/react`, `@types/react-dom`).

---

## 📁 Project Structure

```text
mac-os-main/
├── public/
│   ├── doc-icons/                 # Dock application icons (SVG)
│   │   ├── calender.svg
│   │   ├── cli.svg
│   │   ├── github.svg
│   │   ├── link.svg
│   │   ├── mail.svg
│   │   ├── note.svg
│   │   ├── pdf.svg
│   │   └── spotify.svg
│   ├── navbar-icons/              # Menu bar icons (SVG)
│   │   ├── apple.svg
│   │   └── wifi.svg
│   ├── note.txt                   # Developer profile configuration (TypeScript)
│   └── resume.pdf                 # Developer resume PDF file
├── src/
│   ├── assets/
│   │   ├── apple-icon-black.jpg   # Apple graphic
│   │   ├── github.json            # Offline seed data for repositories
│   │   └── mac-wallpaper.jpg      # Retina macOS desktop background
│   ├── components/
│   │   ├── loader/                # Preloading & boot sequence subsystem
│   │   │   ├── LoaderContext.jsx  # Asset preloader & global loader state
│   │   │   ├── UniversalLoader.jsx# Startup screen, radial spinner & skeletons
│   │   │   └── universalLoader.scss
│   │   ├── windows/               # Application window components
│   │   │   ├── Cli.jsx            # Terminal CLI emulator
│   │   │   ├── cli.scss
│   │   │   ├── Github.jsx         # Live GitHub projects explorer
│   │   │   ├── github.scss
│   │   │   ├── MacWindow.jsx      # Base draggable/resizable window wrapper
│   │   │   ├── window.scss
│   │   │   ├── Note.jsx           # Syntax-highlighted code viewer
│   │   │   ├── note.scss
│   │   │   ├── Resume.jsx         # PDF resume reader & downloader
│   │   │   ├── resume.scss
│   │   │   ├── Spotify.jsx        # Spotify music player embed
│   │   │   └── spotify.scss
│   │   ├── DateTime.jsx           # Real-time system clock component
│   │   ├── Dock.jsx               # Floating glassmorphic dock launcher
│   │   ├── dock.scss
│   │   ├── Nav.jsx                # Top Apple menu & status bar
│   │   └── nav.scss
│   ├── App.jsx                    # Desktop state & window z-index engine
│   ├── app.scss                   # Global styles and background
│   └── main.jsx                   # Application entry point
├── index.html                     # HTML5 template with SEO metadata
├── vite.config.js                 # Vite bundler configuration
├── eslint.config.js               # ESLint configuration
├── package.json                   # Project dependencies and scripts
└── .gitignore                     # Git ignore rules
```

---

## 💻 CLI Terminal Commands Reference

The built-in Terminal (`Cli.jsx`) supports the following interactive commands:

| Command | Description |
| :--- | :--- |
| `help` | Lists all available terminal commands. |
| `about` | Displays professional summary and technical focus. |
| `skills` | Lists technical competencies across Frontend, Backend, AI, Cloud, and Databases. |
| `projects` | Details featured production projects (`intervAI`, `LocoMap`, `Perplexity`) with live links. |
| `experience` | Summarizes full-stack engineering achievements and architecture experience. |
| `education` | Displays degrees, institutions, and CGPA scores. |
| `contact` | Provides direct email, phone, and location details. |
| `social` | Displays GitHub, LinkedIn, and portfolio URLs. |
| `resume` | Opens `/resume.pdf` in a new browser tab. |
| `github` | Opens GitHub profile (`@tejascode8`) in a new tab. |
| `linkedin` | Opens LinkedIn profile in a new tab. |
| `reboot` / `restart` | Initiates a full macOS system reboot with the startup loader. |
| `echo <string>` | Echoes input string back to terminal. |
| `clear` | Clears the terminal screen. |

---

## 🚀 Installation & Setup

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tejascode8/macOS.git
   cd macOS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Launches local development server with Hot Module Replacement (HMR). |
| `build` | `npm run build` | Bundles and optimizes application for production in `dist/`. |
| `preview` | `npm run preview` | Locally serves production build for testing. |
| `lint` | `npm run lint` | Runs ESLint to check code quality and syntax errors. |

---

## 👤 Author

**Tejas Yadav**
* **Portfolio**: [tejas-portfolio-five-alpha.vercel.app](https://tejas-portfolio-five-alpha.vercel.app)
* **GitHub**: [@tejascode8](https://github.com/tejascode8)
* **LinkedIn**: [tejas-yadav-60837a406](https://linkedin.com/in/tejas-yadav-60837a406)
* **Email**: [tejasyadav765@gmail.com](mailto:tejasyadav765@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

