import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import "./note.scss";

const Note = ({ windowName, setWindowsState, zIndex, onFocus }) => {
  const [markdown, setMarkdown] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error("Failed to load note.txt:", err));
  }, []);

  const handleCopy = () => {
    if (markdown) {
      navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const lineCount = markdown ? markdown.split("\n").length : 0;

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
      width="60vw"
      height="75vh"
      defaultX={260}
      defaultY={70}
    >
      <div className="note-window-wrapper">
        {/* Editor Info Bar */}
        <div className="note-toolbar">
          <div className="file-info">
            <span className="ts-badge">TS</span>
            <span className="filename">profile.config.ts</span>
            {lineCount > 0 && <span className="line-count">{lineCount} lines</span>}
          </div>

          <button className="copy-btn" onClick={handleCopy} title="Copy code to clipboard">
            {copied ? (
              <>
                <svg height="14" viewBox="0 0 24 24" width="14" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ color: "#4ade80" }}>Copied!</span>
              </>
            ) : (
              <>
                <svg height="14" viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code View */}
        <div className="note-content">
          {markdown ? (
            <SyntaxHighlighter
              language="typescript"
              style={atelierDuneDark}
              showLineNumbers={true}
              customStyle={{
                margin: 0,
                padding: "1.25rem",
                fontSize: "0.88rem",
                background: "transparent",
              }}
            >
              {markdown}
            </SyntaxHighlighter>
          ) : (
            <div className="loading-state">
              <p>Loading profile.config.ts...</p>
            </div>
          )}
        </div>
      </div>
    </MacWindow>
  );
};

export default Note;