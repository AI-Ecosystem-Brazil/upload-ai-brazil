import { EVENT } from "@/data/event";
import { cn } from "@/lib/utils";

export function RsvpButton({
  className,
  label = "Confirmar RSVP",
  variant = "solid",
}: {
  className?: string;
  label?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={EVENT.rsvpUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0",
        variant === "solid"
          ? "bg-brand-gradient text-primary-foreground shadow-lime-glow"
          : "border border-primary/50 text-primary hover:bg-primary/10",
        className,
      )}
    >
      {label}
    </a>
  );
}
