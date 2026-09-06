import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";

const Spotify = ({ windowName, setWindowsState, zIndex, onFocus }) => {
  return (
    <MacWindow
      width="380px"
      height="450px"
      defaultX={320}
      defaultY={120}
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "0 0 12px 12px", border: "none" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Music Player"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;