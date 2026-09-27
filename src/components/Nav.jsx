import React, { useState, useEffect, useRef } from "react";
import "./nav.scss";
import DateTime from "./DateTime";
import { useLoader } from "./loader/LoaderContext";

const Nav = ({ setWindowsState }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef(null);
  const { reboot } = useLoader();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const openWindow = (name) => {
    if (setWindowsState) {
      setWindowsState((state) => ({ ...state, [name]: true }));
    }
    setActiveMenu(null);
  };

  const handleRestart = () => {
    setActiveMenu(null);
    reboot();
  };

  return (
    <nav ref={navRef} role="navigation" aria-label="macOS Menu Bar">
      <div className="left">
        {/* Apple Menu */}
        <div className="menu-container">
          <div
            className={`apple-icon ${activeMenu === "apple" ? "active" : ""}`}
            onClick={() => toggleMenu("apple")}
          >
            <img src="/navbar-icons/apple.svg" alt="Apple" />
          </div>
          {activeMenu === "apple" && (
            <div className="dropdown-menu">
              <div className="dropdown-item bold" onClick={() => openWindow("cli")}>
                About This Mac Portfolio
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item" onClick={() => openWindow("github")}>
                GitHub Projects...
              </div>
              <div className="dropdown-item" onClick={() => openWindow("resume")}>
                View Resume PDF...
              </div>
              <div className="dropdown-item" onClick={() => openWindow("note")}>
                Open Developer Notes...
              </div>
              <div className="dropdown-divider"></div>
              <div
                className="dropdown-item"
                onClick={() =>
                  window.open("https://github.com/tejascode8/macOS", "_blank")
                }
              >
                Portfolio Source Code
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item" onClick={handleRestart}>
                Restart macOS...
              </div>
            </div>
          )}
        </div>

        {/* Developer Name */}
        <div className="menu-container">
          <div
            className={`nav-item bold ${activeMenu === "tejas" ? "active" : ""}`}
            onClick={() => toggleMenu("tejas")}
          >
            <p>Tejas Yadav</p>
          </div>
          {activeMenu === "tejas" && (
            <div className="dropdown-menu">
              <div className="dropdown-item bold">Tejas Yadav</div>
              <div className="dropdown-item subtext">Full-Stack & GenAI Developer</div>
              <div className="dropdown-divider"></div>
              <div
                className="dropdown-item"
                onClick={() =>
                  window.open("https://linkedin.com/in/tejas-yadav-60837a406", "_blank")
                }
              >
                LinkedIn Profile
              </div>
              <div
                className="dropdown-item"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=tejasyadav765@gmail.com",
                    "_blank"
                  )
                }
              >
                Send Email
              </div>
            </div>
          )}
        </div>

        {/* Window Menu */}
        <div className="menu-container">
          <div
            className={`nav-item ${activeMenu === "window" ? "active" : ""}`}
            onClick={() => toggleMenu("window")}
          >
            <p>Window</p>
          </div>
          {activeMenu === "window" && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => openWindow("github")}>
                GitHub Window
              </div>
              <div className="dropdown-item" onClick={() => openWindow("note")}>
                Notes Window
              </div>
              <div className="dropdown-item" onClick={() => openWindow("resume")}>
                Resume Window
              </div>
              <div className="dropdown-item" onClick={() => openWindow("spotify")}>
                Spotify Player
              </div>
              <div className="dropdown-item" onClick={() => openWindow("cli")}>
                Terminal CLI
              </div>
            </div>
          )}
        </div>

        {/* Terminal Menu */}
        <div className="menu-container">
          <div className="nav-item" onClick={() => openWindow("cli")}>
            <p>Terminal</p>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="nav-icon" title="Wi-Fi: Connected">
          <img src="/navbar-icons/wifi.svg" alt="WiFi" />
        </div>
        <div className="nav-item date-time-wrapper">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
