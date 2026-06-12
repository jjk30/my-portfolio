"use client";

import { useState, useEffect } from "react";

const RESUME_PATH = "/Jishnu_Janardanan_Resume.pdf";

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
    return <main className="min-h-screen bg-zinc-950" />;
  }

  if (isMobile) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Jishnu Janardanan</h1>
          <p className="text-zinc-400 mb-8">Resume</p>
          <div className="flex flex-col gap-4">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors"
            >
              View Resume (PDF)
            </a>
            <a
              href={RESUME_PATH}
              download="Jishnu_Janardanan_Resume.pdf"
              className="px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 rounded-lg font-medium transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen bg-zinc-950">
      <iframe src={RESUME_PATH} title="Jishnu Janardanan Resume" className="w-full h-full border-0" />
    </main>
  );
}
