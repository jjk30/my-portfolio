// Solid dark marks: inverted in the dark theme.
const MONO = new Set(["github", "anthropic", "openai", "mcp", "langchain", "langgraph"]);
// Marks with dark parts: given a small light backing in the dark theme.
const BACKED = new Set(["bash", "pandas", "mqtt"]);

type Props = {
  /** File name (without extension) in public/logos. */
  name: string;
  /** Tailwind size class. Skill badges use the 20px default. */
  size?: string;
};

/** Decorative logo. It always sits next to its name or inside a labelled link. */
export default function Logo({ name, size = "size-5" }: Props) {
  const theme = MONO.has(name) ? "dark:invert" : BACKED.has(name) ? "dark:rounded-[5px] dark:bg-[#E9E9EE]" : "";

  return (
    // Small local SVGs: next/image would pass them through without optimizing.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/logos/${name}.svg`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`${size} flex-none object-contain ${theme}`}
    />
  );
}
