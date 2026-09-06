import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState, zIndex, onFocus }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
      width="60vw"
      height="80vh"
      defaultX={280}
      defaultY={80}
    >
      <div className="resume-window">
        {/* PDF Header Action Bar */}
        <div className="resume-toolbar">
          <div className="doc-info">
            <span className="file-badge">PDF</span>
            <span className="file-name">resume.pdf (Tejas Yadav)</span>
          </div>

          <div className="toolbar-actions">
            <a
              href="/resume.pdf"
              download="Tejas_Yadav_Resume.pdf"
              className="action-btn download-btn"
            >
              <svg height="14" viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn open-btn"
            >
              <svg height="14" viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Open in New Tab
            </a>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="pdf-container">
          <iframe
            src="/resume.pdf#toolbar=1"
            title="Resume of Tejas Yadav"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </MacWindow>
  );
};

export default Resume;
