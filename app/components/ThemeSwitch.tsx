"use client";

import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";
const FADE_CLASS = "theme-fade";
const FADE_MS = 350; // just past the 0.3s color fade in globals.css

// The <html> class is the single source of truth. The inline script in
// layout.tsx sets it before first paint; this component reads and flips it.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.classList.contains("dark");
const isDarkOnServer = () => false;

let fadeTimer: number | undefined;

function setTheme(dark: boolean) {
  const root = document.documentElement;
  root.classList.add(FADE_CLASS);
  root.classList.toggle("dark", dark);
  window.clearTimeout(fadeTimer);
  fadeTimer = window.setTimeout(() => root.classList.remove(FADE_CLASS), FADE_MS);
}

function savedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export default function ThemeSwitch() {
  const dark = useSyncExternalStore(subscribe, isDark, isDarkOnServer);

  // Until the visitor picks a theme, keep following the system setting.
  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = (event: MediaQueryListEvent) => {
      if (savedTheme() === null) setTheme(event.matches);
    };
    system.addEventListener("change", follow);
    return () => system.removeEventListener("change", follow);
  }, []);

  const toggle = () => {
    const next = !isDark();
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Private mode or storage disabled: the switch still works for this visit.
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark theme"
      title="Switch theme"
      onClick={toggle}
      className="theme-switch tap tap-switch"
    >
      <span aria-hidden="true" className="switch-knob" />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="switch-icon switch-sun"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="switch-icon switch-moon"
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
    </button>
  );
}
