import { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import UniversalLoader from "./components/loader/UniversalLoader";
import { LoaderProvider } from "./components/loader/LoaderContext";

function DesktopContent() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  const [zIndices, setZIndices] = useState({
    github: 10,
    note: 10,
    resume: 10,
    spotify: 10,
    cli: 10,
  });

  const bringToFront = (name) => {
    setZIndices((prev) => {
      const maxZ = Math.max(...Object.values(prev), 10);
      return { ...prev, [name]: maxZ + 1 };
    });
  };

  return (
    <main>
      <UniversalLoader mode="boot" />
      <Nav setWindowsState={setWindowsState} />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />

      {windowsState.github && (
        <Github
          windowName="github"
          setWindowsState={setWindowsState}
          zIndex={zIndices.github}
          onFocus={() => bringToFront("github")}
        />
      )}

      {windowsState.note && (
        <Note
          windowName="note"
          setWindowsState={setWindowsState}
          zIndex={zIndices.note}
          onFocus={() => bringToFront("note")}
        />
      )}

      {windowsState.resume && (
        <Resume
          windowName="resume"
          setWindowsState={setWindowsState}
          zIndex={zIndices.resume}
          onFocus={() => bringToFront("resume")}
        />
      )}

      {windowsState.spotify && (
        <Spotify
          windowName="spotify"
          setWindowsState={setWindowsState}
          zIndex={zIndices.spotify}
          onFocus={() => bringToFront("spotify")}
        />
      )}

      {windowsState.cli && (
        <Cli
          windowName="cli"
          setWindowsState={setWindowsState}
          zIndex={zIndices.cli}
          onFocus={() => bringToFront("cli")}
        />
      )}
    </main>
  );
}

function App() {
  return (
    <LoaderProvider>
      <DesktopContent />
    </LoaderProvider>
  );
}

export default App;
