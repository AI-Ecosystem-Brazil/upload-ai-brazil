import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id={id} className={cn("scroll-mt-28 py-16 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div ref={reveal.ref} className={reveal.className}>
          {eyebrow ? (
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="mt-9 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <div
      ref={reveal.ref}
      className={cn(reveal.className, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
