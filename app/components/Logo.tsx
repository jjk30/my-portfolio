// Solid dark marks: inverted in the dark theme.
const MONO = new Set(["github", "anthropic", "openai", "mcp"]);
// Marks with dark parts: given a small light backing in the dark theme.
const BACKED = new Set(["bash", "pandas", "mqtt"]);
// Marks whose owner supplies a separate dark-background file, saved as <name>-dark.svg.
const THEMED = new Set(["langchain"]);

type Props = {
  /** File name (without extension) in public/logos. */
  name: string;
  /** Tailwind size class. Skill badges use the 20px default. */
  size?: string;
};

function Mark({ file, className }: { file: string; className: string }) {
  return (
    // Small local SVGs: next/image would pass them through without optimizing.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/logos/${file}.svg`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`flex-none object-contain ${className}`}
    />
  );
}

/** Decorative logo. It always sits next to its name or inside a labelled link. */
export default function Logo({ name, size = "size-5" }: Props) {
  if (THEMED.has(name)) {
    return (
      <>
        <Mark file={name} className={`${size} dark:hidden`} />
        <Mark file={`${name}-dark`} className={`${size} hidden dark:block`} />
      </>
    );
  }

  const theme = MONO.has(name) ? "dark:invert" : BACKED.has(name) ? "dark:rounded-[5px] dark:bg-[#E9E9EE]" : "";

  return <Mark file={name} className={`${size} ${theme}`} />;
}
