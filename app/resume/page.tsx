"use client";

import { useState, useEffect } from "react";
import { RESUME_PATH } from "../data";

export default function Resume() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Avoid a flash of the wrong layout before the screen size is known
  if (isMobile === null) {
    return <main className="min-h-dvh bg-page" />;
  }

  if (isMobile) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-page px-(--pad-x) text-ink">
        <div className="w-full max-w-[320px] text-center">
          <h1 className="mb-1 text-[30px] leading-[1.1] font-extrabold tracking-[-0.035em]">Jishnu Janardanan</h1>
          <p className="mb-8 text-muted">Resume</p>
          <div className="flex flex-col gap-3">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="btn tap tap-solid justify-center bg-accent px-[26px] text-on-accent"
            >
              View Resume (PDF)
            </a>
            <a
              href={RESUME_PATH}
              download="Jishnu_Janardanan_Resume.pdf"
              className="btn tap tap-outline justify-center border border-line2 px-[26px]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="h-dvh bg-page">
      <iframe src={RESUME_PATH} title="Jishnu Janardanan Resume" className="h-full w-full border-0" />
    </main>
  );
}
