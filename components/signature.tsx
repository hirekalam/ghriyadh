export function GradientText({
  children,
  gold = false,
  className = "",
}: {
  children: React.ReactNode;
  gold?: boolean;
  className?: string;
}) {
  return (
    <span
      className={
        gold
          ? `bg-gradient-to-l from-gold via-gold-light to-gold-soft bg-clip-text text-transparent ${className}`
          : `bg-gradient-to-l from-brand via-lime to-lime-leaf bg-clip-text text-transparent ${className}`
      }
    >
      {children}
    </span>
  );
}

export function DiamondMark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-block h-2 w-2 rotate-45 rounded-[2px] bg-gold-gradient ${className}`}
      aria-hidden="true"
    />
  );
}
