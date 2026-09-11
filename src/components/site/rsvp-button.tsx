import { useEdition } from "@/data/edition-context";
import { cn } from "@/lib/utils";

export function RsvpButton({
  className,
  label = "Confirmar RSVP",
  variant = "solid",
  href,
}: {
  className?: string;
  label?: string;
  variant?: "solid" | "outline";
  href?: string | undefined;
}) {
  const edition = useEdition();
  const target = href ?? edition.rsvpUrl;
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none",
    variant === "solid"
      ? "bg-brand-gradient text-primary-foreground shadow-lime-glow"
      : "border border-primary/50 text-primary hover:bg-primary/10",
    className,
  );
  if (!target) {
    return (
      <span className={classes} aria-disabled="true">
        {label}
      </span>
    );
  }
  return (
    <a
      href={target}
      target="_blank"
      rel="noreferrer noopener"
      className={classes}
    >
      {label}
    </a>
  );
}
