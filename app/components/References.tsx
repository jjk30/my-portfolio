import Section from "./Section";

export default function References() {
  return (
    <Section id="references" alt narrow>
      <h2 className="h2">References</h2>
      <a
        href="https://www.iit.edu/directory/people/won-jae-yi"
        target="_blank"
        rel="noopener noreferrer"
        className="tile tap tap-surface block p-7 text-ink"
      >
        <h3 className="text-[19px] font-bold tracking-[-0.02em]">Professor Won-Jae Yi</h3>
        <p className="mt-1 font-semibold text-accent">Associate Teaching Professor of Electrical and Computer Engineering</p>
        <p className="mt-2 text-muted">Illinois Institute of Technology</p>
        <div className="mt-3 text-[14.5px] leading-[1.7] text-muted">
          <p>3301 S Dearborn St, Chicago, IL 60616</p>
          <p>Email: wyi3@iit.edu</p>
          <p>Phone: (312) 567-3327</p>
          <p>Office: Seigel Hall 316</p>
        </div>
      </a>
    </Section>
  );
}
