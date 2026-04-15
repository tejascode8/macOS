# macOS Desktop Simulation

A fully interactive macOS desktop simulation built with React, featuring a functional dock, draggable/resizable windows, and multiple applications that mimic the macOS user experience.

## 📋 Project Overview

This project is a web-based macOS desktop simulation that replicates the look, feel, and interactivity of Apple's macOS operating system. It serves as both a technical demonstration of modern React capabilities and an interactive portfolio piece showcasing various web development techniques.

**Purpose**: To create an immersive desktop environment simulation that demonstrates advanced React patterns, CSS animations, and interactive UI components.

**Problem Solved**: Provides developers with a creative way to showcase their skills through an engaging, interactive environment rather than traditional portfolio layouts.

## ✨ Features

- **Interactive Dock**: macOS-style dock with hover animations and application launchers
- **Draggable & Resizable Windows**: Fully functional windows with minimize/maximize/close controls
- **Multiple Applications**:
  - **GitHub Viewer**: Displays GitHub repositories and profile information
  - **Note Editor**: Markdown-enabled note-taking application
  - **Resume Viewer**: PDF resume display with navigation controls
  - **Spotify Player**: Music player interface (UI simulation)
  - **CLI Terminal**: Command-line interface simulation with interactive commands
- **System Navigation**: macOS-style top navigation bar with system status indicators
- **Responsive Design**: Adapts to different screen sizes while maintaining desktop metaphor
- **Real-time Clock**: Dynamic date and time display in the navigation bar
- **Application State Management**: Individual window state tracking (open/closed, position, size)
- **External Integration**: Links to real services (Google Calendar, Gmail, etc.)

## 🛠️ Tech Stack

### Frontend

- **React 19.2.0**: Modern React with latest features
- **Vite 7.2.4**: Next-generation frontend tooling
- **SCSS/SASS 1.97.2**: Advanced CSS preprocessing with variables and mixins
- **React RND 10.5.2**: Draggable and resizable window components
- **React Console Emulator 5.0.2**: Terminal/CLI simulation
- **React Markdown 10.1.0**: Markdown rendering for note application
- **React Syntax Highlighter 16.1.0**: Code syntax highlighting

### Development Tools

- **ESLint 9.39.1**: Code quality and consistency
- **TypeScript Definitions**: Type safety for React components
- **Vite React Plugin**: Optimized React development experience

### Runtime Environment

- **Node.js**: JavaScript runtime (v18+ recommended)
- **Modern Browsers**: Chrome, Firefox, Safari, Edge with ES6+ support

## 📦 Dependencies

### Core Dependencies

| Package                    | Version | Purpose                     |
| -------------------------- | ------- | --------------------------- |
| `react`                    | ^19.2.0 | UI library                  |
| `react-dom`                | ^19.2.0 | React DOM rendering         |
| `react-rnd`                | ^10.5.2 | Draggable/resizable windows |
| `react-console-emulator`   | ^5.0.2  | Terminal simulation         |
| `react-markdown`           | ^10.1.0 | Markdown rendering          |
| `react-syntax-highlighter` | ^16.1.0 | Code syntax highlighting    |
| `sass`                     | ^1.97.2 | CSS preprocessing           |

### Development Dependencies

| Package                       | Version | Purpose                              |
| ----------------------------- | ------- | ------------------------------------ |
| `@vitejs/plugin-react`        | ^5.1.1  | Vite React integration               |
| `eslint`                      | ^9.39.1 | Code linting                         |
| `@eslint/js`                  | ^9.39.1 | ESLint JavaScript configuration      |
| `eslint-plugin-react-hooks`   | ^7.0.1  | React Hooks linting rules            |
| `eslint-plugin-react-refresh` | ^0.4.24 | Fast Refresh linting                 |
| `@types/react`                | ^19.2.5 | TypeScript definitions for React     |
| `@types/react-dom`            | ^19.2.3 | TypeScript definitions for React DOM |
| `globals`                     | ^16.5.0 | Global variables for ESLint          |
| `vite`                        | ^7.2.4  | Build tool and dev server            |

## 📁 Project Structure

```
mac-os-main/
├── public/
│   ├── doc-icons/              # Dock application icons
│   │   ├── calender.svg
│   │   ├── cli.svg
│   │   ├── github.svg
│   │   ├── link.svg
│   │   ├── mail.svg
│   │   ├── note.svg
│   │   ├── pdf.svg
│   │   └── spotify.svg
│   ├── navbar-icons/           # Navigation bar icons
│   │   ├── apple.svg
│   │   └── wifi.svg
│   ├── note.txt               # Sample note content
│   └── resume.pdf             # Resume PDF file
├── src/
│   ├── assets/                # Static assets
│   │   ├── apple-icon-black.jpg
│   │   ├── github.json       # GitHub data
│   │   └── mac-wallpaper.jpg # Desktop wallpaper
│   ├── components/
│   │   ├── DateTime.jsx      # Real-time clock component
│   │   ├── Dock.jsx          # macOS dock component
│   │   ├── dock.scss         # Dock styles
│   │   ├── Nav.jsx           # Top navigation bar
│   │   ├── nav.scss          # Navigation styles
│   │   └── windows/          # Application windows
│   │       ├── Cli.jsx       # Terminal application
│   │       ├── cli.scss      # Terminal styles
│   │       ├── Github.jsx    # GitHub viewer
│   │       ├── github.scss   # GitHub styles
│   │       ├── MacWindow.jsx # Base window component
│   │       ├── Note.jsx      # Note editor
│   │       ├── note.scss     # Note styles
│   │       ├── Resume.jsx    # Resume viewer
│   │       ├── resume.scss   # Resume styles
│   │       ├── Spotify.jsx   # Music player
│   │       ├── spotify.scss  # Music player styles
│   │       └── window.scss   # Common window styles
│   ├── App.jsx               # Main application component
│   ├── app.scss              # Global styles
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Project dependencies
├── package-lock.json         # Locked dependencies
└── .gitignore                # Git ignore rules
```

### Key Directories & Files

- **`src/components/windows/`**: Contains all application window components
- **`src/components/Dock.jsx`**: Main dock component with application launchers
- **`public/doc-icons/`**: SVG icons for dock applications
- **`src/assets/github.json`**: Sample GitHub data for the GitHub viewer
- **`public/note.txt`**: Sample markdown content for the note application

## 🚀 Installation Guide

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn** (v1.22 or higher)
- Modern web browser

### Step-by-Step Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mac-os.git
   cd mac-os
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎮 Usage

### Running the Application

**Development Mode:**

```bash
npm run dev
```

Starts a hot-reloading development server at `http://localhost:5173`

**Production Build:**

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory

**Preview Production Build:**

```bash
npm run preview
```

Serves the production build locally for testing

### Using the macOS Simulation

1. **Launch Applications**: Click any icon in the dock to open its corresponding application window
2. **Window Controls**: Use the red (close), yellow (minimize), and green (maximize) buttons on window title bars
3. **Drag & Resize**: Click and drag window title bars to move, drag window edges to resize
4. **Terminal Commands**: In the CLI application, try commands like `help`, `ls`, `clear`, or `date`
5. **Note Editing**: The note application supports markdown formatting
6. **External Links**: Some dock icons open external services in new tabs

## 📜 Scripts

| Script    | Command           | Description                              |
| --------- | ----------------- | ---------------------------------------- |
| `dev`     | `npm run dev`     | Start development server with hot reload |
| `build`   | `npm run build`   | Create production-optimized build        |
| `preview` | `npm run preview` | Preview production build locally         |
| `lint`    | `npm run lint`    | Run ESLint to check code quality         |

## 🖼️ Screenshots & Demo

### Application Screenshots

1. **Desktop Overview**: macOS-style desktop with dock and open windows
2. **GitHub Viewer**: Repository browser with commit history
3. **Note Editor**: Markdown editor with live preview
4. **Resume Viewer**: PDF viewer with navigation controls
5. **Spotify Player**: Music player interface
6. **CLI Terminal**: Command-line interface with command history

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation for new features
- Test changes thoroughly before submitting

## 👤 Author

**Tejas Yadav**

- GitHub: [@tejasyadav](https://github.com/tejasyadav)
- Email: tejasyadav765@gmail.com
- Portfolio: [mac-os-simulation.netlify.app](https://mac-os-simulation.netlify.app)

---

**Built with ❤️ using React, Vite, and modern web technologies**
