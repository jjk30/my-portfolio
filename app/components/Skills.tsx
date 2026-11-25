import { skillGroups, type Skill } from "../data";
import Logo from "./Logo";
import Section from "./Section";

function CircuitIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="size-5 flex-none text-accent"
    >
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </svg>
  );
}

function Badge({ skill }: { skill: Skill }) {
  return (
    <span className="badge">
      {skill.logo && <Logo name={skill.logo} />}
      {skill.icon === "circuit" && <CircuitIcon />}
      {skill.name}
    </span>
  );
}

export default function Skills() {
  return (
    <Section id="skills" alt>
      <h2 className="h2">Technical Skills</h2>
      <div className="flex flex-wrap gap-5">
        {skillGroups.map((group) => (
          <div key={group.title} className={`tile ${group.wide ? "flex-[1_1_100%]" : "flex-[1_1_440px]"}`}>
            <h3 className="mb-3.5 flex items-center gap-2.5 text-[18px] leading-[1.2] font-bold tracking-[-0.02em]">
              {group.logo && <Logo name={group.logo} size="size-6" />}
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <Badge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
