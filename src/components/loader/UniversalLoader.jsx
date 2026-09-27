import React, { useEffect } from "react";
import "./universalLoader.scss";
import { useLoader } from "./LoaderContext";

/**
 * Native macOS 12-segment radial spinner component
 */
export const MacSpinner = ({ size = "md", color = "#ffffff", text, className = "" }) => {
  return (
    <div className={`macos-spinner ${className}`} style={{ color }}>
      <div className={`spinner-wheel ${size}`}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="blade" />
        ))}
      </div>
      {text && <span className="spinner-text">{text}</span>}
    </div>
  );
};

/**
 * Glassmorphic Skeleton Shimmer for Cards / Window contents
 */
export const CardSkeleton = ({ count = 3 }) => {
  return (
    <div className="card-skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card-skeleton">
          <div className="skeleton-shimmer skeleton-img" />
          <div className="skeleton-body">
            <div className="skeleton-shimmer skeleton-title" />
            <div className="skeleton-shimmer skeleton-desc" />
            <div className="skeleton-shimmer skeleton-desc-sub" />
            <div className="skeleton-tags">
              <div className="skeleton-shimmer skeleton-tag" />
              <div className="skeleton-shimmer skeleton-tag" />
              <div className="skeleton-shimmer skeleton-tag" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Modal / Window loader overlay
 */
export const WindowLoaderOverlay = ({ message = "Loading...", size = "lg" }) => {
  return (
    <div className="universal-loader-overlay">
      <div className="loader-card">
        <MacSpinner size={size} />
        <span className="spinner-text">{message}</span>
      </div>
    </div>
  );
};

/**
 * Universal System Boot Loader (Full-Screen macOS Experience)
 */
export const BootLoader = () => {
  const { isBooting, bootProgress, bootStatus, skipBoot } = useLoader();

  // Support skipping boot with Spacebar or Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" || e.key === "Escape" || e.key === "Enter") {
        skipBoot();
      }
    };

    if (isBooting) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isBooting, skipBoot]);

  if (!isBooting) return null;

  return (
    <div className={`macos-boot-screen ${bootProgress >= 100 ? "fade-out" : ""}`}>
      <div className="boot-container">
        {/* Glowing Apple Logo */}
        <div className="apple-logo-wrapper">
          <svg viewBox="0 0 170 170" fill="currentColor">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.77-7.87-12.24-14.37-6.04-8.8-10.82-18.78-14.34-29.93-3.52-11.16-5.28-22.18-5.28-33.06 0-14.52 3.66-26.65 10.97-36.4 7.31-9.74 16.5-14.7 27.56-14.88 4.79 0 10.36 1.34 16.71 4.02 6.35 2.68 10.31 4.08 11.89 4.2 2.01-.25 6.22-1.68 12.63-4.31 6.41-2.62 11.66-3.83 15.76-3.62 12.19.64 22.09 4.96 29.71 12.98-10.68 6.47-15.91 15.42-15.69 26.85.22 9.04 3.74 16.64 10.57 22.79 6.83 6.16 14.84 9.61 24.04 10.36-2.48 7.37-5.59 15.11-9.34 23.23zM119.22 33.64c0-7.3 2.66-14.16 7.99-20.59 5.33-6.43 11.95-10.74 19.86-12.93.99 7.08-.82 13.9-5.43 20.46-4.61 6.56-11.39 10.92-20.35 13.08-.69-.02-1.38-.02-2.07-.02z" />
          </svg>
        </div>

        {/* macOS Progress Bar */}
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${Math.min(bootProgress, 100)}%` }}
          />
        </div>

        {/* Dynamic Status Text */}
        <div className="boot-meta">
          <span className="boot-status">{bootStatus}</span>
          <span className="boot-percentage">{bootProgress}%</span>
        </div>

        {/* Click/Key Skip Action */}
        <button
          className="skip-prompt"
          onClick={skipBoot}
          title="Skip boot animation"
          aria-label="Skip boot animation"
        >
          <span>Click or press</span>
          <kbd>Space</kbd>
          <span>to skip</span>
        </button>
      </div>
    </div>
  );
};

/**
 * Unified UniversalLoader Component
 * Mode options:
 * - "boot": Fullscreen macOS startup screen
 * - "spinner": Native 12-segment radial indicator
 * - "overlay": Glassmorphism window loader
 * - "skeleton": Shimmer skeleton cards
 */
const UniversalLoader = ({
  mode = "spinner",
  size = "md",
  color = "#ffffff",
  text,
  count = 3,
}) => {
  switch (mode) {
    case "boot":
      return <BootLoader />;
    case "overlay":
      return <WindowLoaderOverlay message={text} size={size} />;
    case "skeleton":
      return <CardSkeleton count={count} />;
    case "spinner":
    default:
      return <MacSpinner size={size} color={color} text={text} />;
  }
};

export default UniversalLoader;
