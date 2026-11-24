import { projects, type Project } from "../data";
import Logo from "./Logo";
import Section from "./Section";
import Tags from "./Tags";

function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.link || project.github || project.certificate;

  return (
    <article className="tile flex flex-col gap-3 p-7">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[19px] leading-[1.25] font-bold tracking-[-0.02em]">{project.title}</h3>
        {project.live && (
          <span className="flex-none rounded-lg bg-live-bg px-2.5 py-1 text-[12.5px] font-bold text-live-ink">Live</span>
        )}
      </div>
      <p className="text-[15px] text-muted">{project.desc}</p>
      <Tags items={project.tech} />
      {hasLinks && (
        <div className="mt-auto flex flex-wrap items-center gap-x-[18px] pt-2">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link tap">
              Visit Site →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="tap inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg"
            >
              <Logo name="github" size="size-[26px]" />
            </a>
          )}
          {project.certificate && (
            <a href={project.certificate} download className="text-link tap">
              Certificate ↓
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" alt>
      <h2 className="h2">Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
