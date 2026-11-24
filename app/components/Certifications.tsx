import Image from "next/image";
import { certifications, featuredCertification as featured } from "../data";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications">
      <h2 className="h2">Certifications</h2>
      <div className="flex flex-wrap gap-5">
        <article className="flex min-w-0 flex-[2_1_640px] flex-wrap items-center gap-x-7 gap-y-5 rounded-3xl bg-soft p-7">
          <Image src={featured.badge} alt={featured.badgeAlt} width={160} height={160} className="size-40 flex-none" />
          <div className="min-w-0 flex-[1_1_320px]">
            <h3 className="text-[22px] leading-[1.2] font-extrabold tracking-[-0.025em]">{featured.title}</h3>
            <p className="mt-1 text-[15px] font-semibold">
              {/* Padding and the matching negative margin give a 44px target without moving the text. */}
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tap -my-[11px] inline-block rounded-md py-[11px] text-accent"
              >
                {featured.issuer}
              </a>
            </p>
            <p className="mt-2.5 text-[14.5px] text-muted">{featured.desc}</p>
            <a href={featured.link} target="_blank" rel="noopener noreferrer" className="text-link tap">
              {featured.linkText}
            </a>
          </div>
        </article>

        {certifications.map((cert) => (
          <article key={cert.title} className="card flex flex-[1_1_320px] flex-col gap-2 p-[26px]">
            <h3 className="text-[17px] leading-[1.3] font-bold tracking-[-0.015em]">{cert.title}</h3>
            <p className="text-[14.5px] font-semibold text-accent">{cert.issuer}</p>
            {cert.date && <p className="text-[14px] text-muted">{cert.date}</p>}
            <p className="text-[14.5px] text-muted">{cert.desc}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-link tap mt-auto self-start">
              {cert.linkText ?? "Verify Credential →"}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
