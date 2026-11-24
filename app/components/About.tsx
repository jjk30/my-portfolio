import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <h2 className="h2">About Me</h2>
      <div className="flex flex-wrap gap-x-12 gap-y-7">
        <div className="min-w-0 flex-[1_1_420px] text-[17px] text-body">
          <p className="mb-3.5">
            I am a Computer Engineering student from Illinois Institute of Technology, graduated in May 2026. I like building things that work well and look good.
          </p>
          <p>
            When I am not coding or designing systems, you will find me watching cricket, playing basketball, or checking out new sneaker drops.
          </p>
        </div>
        <div className="min-w-0 flex-[1_1_360px]">
          <h3 className="mb-3 text-[18px] font-bold tracking-[-0.02em]">Education</h3>
          <div className="rounded-[20px] bg-soft px-[22px] py-5">
            <p className="font-bold">B.S. Computer Engineering</p>
            <p className="font-semibold text-accent">Illinois Institute of Technology</p>
            <p className="mt-1 text-[14.5px] text-muted">May 2026</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
