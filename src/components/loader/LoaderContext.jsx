import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import macWallpaper from "../../assets/mac-wallpaper.jpg";
import appleIconBlack from "../../assets/apple-icon-black.jpg";

const LoaderContext = createContext(null);

const CRITICAL_SVG_ASSETS = [
  "/doc-icons/github.svg",
  "/doc-icons/note.svg",
  "/doc-icons/pdf.svg",
  "/doc-icons/calender.svg",
  "/doc-icons/spotify.svg",
  "/doc-icons/mail.svg",
  "/doc-icons/link.svg",
  "/doc-icons/cli.svg",
  "/navbar-icons/apple.svg",
  "/navbar-icons/wifi.svg",
];

export const LoaderProvider = ({ children }) => {
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootStatus, setBootStatus] = useState("Initializing macOS Sonoma Kernel...");
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  const [globalLoadingMessage, setGlobalLoadingMessage] = useState("");

  const animationFrameRef = useRef(null);
  const isMountedRef = useRef(true);

  // Preloads an image and returns a promise
  const preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  // Wait for window/document complete load
  const waitForWindowLoad = () => {
    return new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        const onLoad = () => {
          window.removeEventListener("load", onLoad);
          resolve(true);
        };
        window.addEventListener("load", onLoad);
      }
    });
  };

  // Wait for web fonts if supported
  const waitForFonts = () => {
    if (document.fonts && document.fonts.ready) {
      return document.fonts.ready.catch(() => true);
    }
    return Promise.resolve(true);
  };

  // Preload text data file
  const preloadText = (url) => {
    return fetch(url).then(() => true).catch(() => true);
  };

  const runBootSequence = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    setIsBooting(true);
    setBootProgress(0);
    setBootStatus("Initializing Apple Silicon & System Kernel...");

    let targetProgress = 0;
    let currentDisplayProgress = 0;
    let isAllResourcesLoaded = false;

    // Track list of all resources to load completely
    const tasks = [
      { name: "Window Complete Load", promise: waitForWindowLoad(), weight: 20 },
      { name: "Typography & System Fonts", promise: waitForFonts(), weight: 10 },
      { name: "Retina Wallpaper", promise: preloadImage(macWallpaper), weight: 30 },
      { name: "Apple System Icon", promise: preloadImage(appleIconBlack), weight: 5 },
      { name: "Developer Note File", promise: preloadText("/note.txt"), weight: 10 },
      ...CRITICAL_SVG_ASSETS.map((icon) => ({
        name: `Icon: ${icon}`,
        promise: preloadImage(icon),
        weight: 25 / CRITICAL_SVG_ASSETS.length,
      })),
    ];

    let totalWeightCompleted = 0;
    const totalWeight = 100;

    tasks.forEach((task) => {
      task.promise.then(() => {
        totalWeightCompleted += task.weight;
        targetProgress = Math.min(Math.round(totalWeightCompleted), 95);

        if (targetProgress < 30) {
          setBootStatus("Loading Apple Silicon & Core Frameworks...");
        } else if (targetProgress < 60) {
          setBootStatus("Preloading Desktop Assets & Retina Wallpaper...");
        } else if (targetProgress < 85) {
          setBootStatus("Mounting Dock Modules & Window System...");
        } else {
          setBootStatus("Finalizing macOS Desktop Environment...");
        }
      });
    });

    // When all promises have completed
    Promise.all(tasks.map((t) => t.promise)).then(() => {
      isAllResourcesLoaded = true;
      targetProgress = 100;
    });

    // Smooth animation loop that guarantees the loader stays active until website is 100% loaded
    let startTime = performance.now();

    const animateProgress = (now) => {
      const elapsed = now - startTime;

      // Minimum smooth advancement speed to prevent sudden snapping
      if (currentDisplayProgress < targetProgress) {
        currentDisplayProgress += Math.max(0.6, (targetProgress - currentDisplayProgress) * 0.08);
        if (currentDisplayProgress > targetProgress) {
          currentDisplayProgress = targetProgress;
        }
      }

      const displayInt = Math.floor(currentDisplayProgress);
      setBootProgress(displayInt);

      if (displayInt >= 100 && isAllResourcesLoaded) {
        setBootStatus("Welcome to Tejas Yadav's macOS");
        setBootProgress(100);

        // Smoothly unveil desktop after a brief, polished pause at 100%
        setTimeout(() => {
          if (isMountedRef.current) {
            setIsBooting(false);
          }
        }, 500);
        return;
      }

      animationFrameRef.current = requestAnimationFrame(animateProgress);
    };

    animationFrameRef.current = requestAnimationFrame(animateProgress);
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    runBootSequence();

    return () => {
      isMountedRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [runBootSequence]);

  const reboot = useCallback(() => {
    runBootSequence();
  }, [runBootSequence]);

  const skipBoot = useCallback(() => {
    // Only allow skipping once critical resources are ready, or force instant finish
    setBootProgress(100);
    setBootStatus("Launching Desktop...");
    setTimeout(() => {
      setIsBooting(false);
    }, 150);
  }, []);

  const showLoader = useCallback((msg = "Loading...") => {
    setGlobalLoadingMessage(msg);
    setIsGlobalLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsGlobalLoading(false);
    setGlobalLoadingMessage("");
  }, []);

  return (
    <LoaderContext.Provider
      value={{
        isBooting,
        bootProgress,
        bootStatus,
        reboot,
        skipBoot,
        isGlobalLoading,
        globalLoadingMessage,
        showLoader,
        hideLoader,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};
