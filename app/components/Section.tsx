type Props = {
  id: string;
  /** Use the alternate background. */
  alt?: boolean;
  /** Narrow column, for the References and Contact sections. */
  narrow?: boolean;
  children: React.ReactNode;
};

export default function Section({ id, alt = false, narrow = false, children }: Props) {
  return (
    <section id={id} className={alt ? "bg-alt" : undefined}>
      <div className={narrow ? "wrap max-w-[840px]" : "wrap"}>{children}</div>
    </section>
  );
}
