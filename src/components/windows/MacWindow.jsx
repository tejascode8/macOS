import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const WINDOW_TITLES = {
  github: "GitHub — @tejascode8 (Repositories & Live Sync)",
  note: "profile.config.ts — Notes",
  resume: "Resume — Tejas Yadav (Full-Stack Developer).pdf",
  spotify: "Spotify — Developer Playlist",
  cli: "tejasyadav@portfolio: ~ (zsh)",
};

const MacWindow = ({
  children,
  width = "55vw",
  height = "65vh",
  defaultX,
  defaultY,
  windowName,
  setWindowsState,
  title,
  zIndex = 10,
  onFocus,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const initialX = defaultX !== undefined ? defaultX : 240;
  const initialY = defaultY !== undefined ? defaultY : 80;

  const displayTitle = title || WINDOW_TITLES[windowName] || `${windowName} — macOS`;

  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setWindowsState((state) => ({ ...state, [windowName]: false }));
  };

  return isMaximized ? (
    <div
      className="window maximized"
      style={{
        position: "absolute",
        top: "32px",
        left: "1vw",
        width: "98vw",
        height: "calc(100vh - 40px)",
        zIndex: zIndex + 50,
      }}
      onMouseDown={onFocus}
    >
      <div className="nav" onDoubleClick={toggleMaximize}>
        <div className="dots">
          <button onClick={handleClose} className="dot red" title="Close" aria-label="Close" />
          <button onClick={handleClose} className="dot yellow" title="Minimize" aria-label="Minimize" />
          <button onClick={toggleMaximize} className="dot green" title="Restore" aria-label="Restore" />
        </div>

        <div className="title">
          <p>{displayTitle}</p>
        </div>
      </div>
      <div className="main-content">{children}</div>
    </div>
  ) : (
    <Rnd
      default={{
        width: width,
        height: height,
        x: initialX,
        y: initialY,
      }}
      minWidth={320}
      minHeight={220}
      bounds="parent"
      dragHandleClassName="nav"
      style={{ zIndex: zIndex }}
      onMouseDown={onFocus}
    >
      <div className="window">
        <div className="nav" onDoubleClick={toggleMaximize}>
          <div className="dots">
            <button onClick={handleClose} className="dot red" title="Close" aria-label="Close" />
            <button onClick={handleClose} className="dot yellow" title="Minimize" aria-label="Minimize" />
            <button onClick={toggleMaximize} className="dot green" title="Maximize" aria-label="Maximize" />
          </div>

          <div className="title">
            <p>{displayTitle}</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
