import { experience } from "../data";
import Section from "./Section";
import Tags from "./Tags";

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="h2">Experience</h2>
      <div className="flex flex-col gap-4">
        {experience.map((job) => (
          <article key={`${job.role} ${job.company}`} className="card">
            <div className="mb-3.5 flex flex-wrap justify-between gap-x-6 gap-y-1">
              <div className="min-w-0">
                <h3 className="text-[19px] leading-[1.25] font-bold tracking-[-0.02em]">{job.role}</h3>
                <p className="mt-0.5 font-semibold text-accent">{job.company}</p>
                <p className="text-[14.5px] text-muted">{job.location}</p>
              </div>
              <p className="text-[14.5px] whitespace-nowrap text-muted">{job.dates}</p>
            </div>
            <ul className="list-disc pl-5 text-[15px] text-body">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="mb-1.5">
                  {bullet}
                </li>
              ))}
            </ul>
            {job.tech.length > 0 && (
              <div className="mt-3.5">
                <Tags items={job.tech} />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
