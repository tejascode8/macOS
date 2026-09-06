import React from "react";
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  const toggleWindow = (winName) => {
    setWindowsState((state) => ({ ...state, [winName]: !state[winName] }));
  };

  const dockItems = [
    {
      id: "github",
      label: "GitHub",
      icon: "/doc-icons/github.svg",
      className: "github",
      isOpen: windowsState.github,
      action: () => toggleWindow("github"),
    },
    {
      id: "note",
      label: "Notes",
      icon: "/doc-icons/note.svg",
      className: "note",
      isOpen: windowsState.note,
      action: () => toggleWindow("note"),
    },
    {
      id: "resume",
      label: "Resume",
      icon: "/doc-icons/pdf.svg",
      className: "pdf",
      isOpen: windowsState.resume,
      action: () => toggleWindow("resume"),
    },
    {
      id: "calender",
      label: "Calendar",
      icon: "/doc-icons/calender.svg",
      className: "calender",
      isOpen: false,
      action: () => window.open("https://calendar.google.com/", "_blank"),
    },
    {
      id: "spotify",
      label: "Spotify",
      icon: "/doc-icons/spotify.svg",
      className: "spotify",
      isOpen: windowsState.spotify,
      action: () => toggleWindow("spotify"),
    },
    {
      id: "mail",
      label: "Mail",
      icon: "/doc-icons/mail.svg",
      className: "mail",
      isOpen: false,
      action: () =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=tejasyadav765@gmail.com",
          "_blank"
        ),
    },
    {
      id: "link",
      label: "LinkedIn",
      icon: "/doc-icons/link.svg",
      className: "link",
      isOpen: false,
      action: () =>
        window.open("https://linkedin.com/in/tejas-yadav-60837a406", "_blank"),
    },
    {
      id: "cli",
      label: "Terminal",
      icon: "/doc-icons/cli.svg",
      className: "cli",
      isOpen: windowsState.cli,
      action: () => toggleWindow("cli"),
    },
  ];

  return (
    <footer className="dock" role="navigation" aria-label="macOS Dock">
      {dockItems.map((item) => (
        <div
          key={item.id}
          className="dock-item-wrapper"
          onClick={item.action}
        >
          <div className="dock-tooltip">{item.label}</div>
          <div className={`icon ${item.className}`}>
            <img src={item.icon} alt={item.label} />
          </div>
          {item.isOpen && <span className="active-dot"></span>}
        </div>
      ))}
    </footer>
  );
};

export default Dock;
