"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, sectionIds, RESUME_PATH } from "../data";
import ThemeSwitch from "./ThemeSwitch";

export default function Nav() {
  const [active, setActive] = useState("home");
  const navRef = useRef<HTMLElement>(null);

  // Scroll spy: the section crossing a thin band 40% down the screen is "in view".
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -59% 0px" },
    );
    sections.forEach((section) => spy.observe(section));

    // On tall screens the last section never reaches the band, so the footer
    // coming fully into view marks the end of the page.
    const footer = document.querySelector("footer");
    const end = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(sectionIds[sectionIds.length - 1]);
      },
      { threshold: 1 },
    );
    if (footer) end.observe(footer);

    return () => {
      spy.disconnect();
      end.disconnect();
    };
  }, []);

  // On phones the row scrolls sideways: keep the highlighted link on screen.
  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>("[aria-current]");
    if (!nav || !link || nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollTo({ left: link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2 });
  }, [active]);

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-7 px-(--pad-x) py-1">
        <a
          href="#home"
          aria-label="JJ30, back to top"
          className="tap inline-flex min-h-11 items-center rounded-md text-[20px] font-extrabold tracking-[-0.03em]"
        >
          <span className="text-accent">JJ</span>
          <span className="text-muted">30</span>
        </a>
        <nav ref={navRef} aria-label="Sections" className="nav-links">
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className="nav-link tap"
            >
              {label}
            </a>
          ))}
          <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="nav-link tap">
            Resume
          </a>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
}
