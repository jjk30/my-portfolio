import Image from "next/image";
import { RESUME_PATH, stats } from "../data";

export default function Hero() {
  return (
    <section id="home">
      <div className="wrap pt-[clamp(48px,6vw,80px)]">
        <div className="flex flex-wrap items-center gap-x-16 gap-y-10">
          <div className="rise min-w-0 flex-[0_1_288px]">
            <Image
              src="/profile.jpg"
              alt="Jishnu Janardanan"
              width={288}
              height={320}
              sizes="288px"
              preload
              className="block aspect-[9/10] h-auto w-full max-w-[288px] rounded-[28px] border border-line object-cover"
            />
          </div>
          <div className="min-w-0 flex-[1_1_480px]">
            <h1 className="rise mb-5 text-[clamp(42px,5.4vw,76px)] leading-[1.02] font-extrabold tracking-[-0.045em] [animation-delay:60ms]">
              Hi, I&apos;m Jishnu
              <br />
              <span className="text-accent">Janardanan</span>
            </h1>
            <p className="rise mb-3 text-[20px] leading-[1.4] font-medium [animation-delay:120ms]">
              Software Engineer | B.S. in Computer Engineering from Illinois Institute of Technology
            </p>
            <p className="rise mb-7 max-w-[460px] text-muted [animation-delay:180ms]">
              Building scalable applications with React and AWS. Passionate about clean code and delivering great user experiences.
            </p>
            <div className="rise flex flex-wrap gap-3 [animation-delay:240ms]">
              <a href="#contact" className="btn tap tap-solid bg-accent px-[26px] text-on-accent">
                Get in Touch
              </a>
              <a
                href={RESUME_PATH}
                download="Jishnu_Janardanan_Resume.pdf"
                className="btn tap tap-outline border border-line2 px-[26px]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="rise mt-[clamp(40px,5vw,64px)] grid gap-4 [animation-delay:320ms] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.line} className="min-w-0 rounded-[20px] bg-soft px-6 py-[22px]">
              <p className="mb-2.5 text-[13px] font-bold text-accent">{stat.source}</p>
              <p className="text-[clamp(28px,2.5vw,34px)] leading-[1.05] font-extrabold tracking-[-0.04em] whitespace-nowrap">
                {stat.value}
              </p>
              <p className="mt-2 text-[14.5px] text-muted">{stat.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
