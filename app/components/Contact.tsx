import Logo from "./Logo";
import Section from "./Section";

const ROW = "flex items-center gap-4 rounded-[20px] bg-soft px-5 py-4 text-ink";

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <>
      <span aria-hidden="true" className="inline-flex size-11 flex-none items-center justify-center rounded-full bg-tile text-ink">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[22px]"
        >
          {icon}
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block font-bold">{label}</span>
        <span className="block text-muted [overflow-wrap:anywhere]">{value}</span>
      </span>
    </>
  );
}

export default function Contact() {
  return (
    <Section id="contact" narrow>
      <h2 className="h2 mb-8 text-center">Get in Touch</h2>

      <div className="flex flex-col gap-3">
        <a href="mailto:jishnujanardanan2003@gmail.com" className={`${ROW} tap tap-surface`}>
          <Row
            label="Email"
            value="jishnujanardanan2003@gmail.com"
            icon={
              <>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </>
            }
          />
        </a>
        <a href="tel:+13128520631" className={`${ROW} tap tap-surface`}>
          <Row
            label="Phone"
            value="+1 (312)-852-0631"
            icon={
              <>
                <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
                <path d="M11 18.5h2" />
              </>
            }
          />
        </a>
        <div className={ROW}>
          <Row
            label="Location"
            value="Chicago, IL, U.S.A (Authorized to Work)"
            icon={
              <>
                <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </>
            }
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/jishnu-janardanan/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn tap tap-outline border border-line px-6 text-ink"
        >
          <Logo name="linkedin" size="size-[22px]" />
          LinkedIn
        </a>
        <a
          href="https://github.com/jjk30"
          target="_blank"
          rel="noopener noreferrer"
          className="btn tap tap-outline border border-line px-6 text-ink"
        >
          <Logo name="github" size="size-[22px]" />
          GitHub
        </a>
      </div>
    </Section>
  );
}
