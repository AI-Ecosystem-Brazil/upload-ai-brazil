import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo-aibrasil.png.asset.json";
import { Button } from "@/components/ui/button";
import { RsvpButton } from "@/components/site/rsvp-button";
import { useEdition } from "@/data/edition-context";
import { cn } from "@/lib/utils";

type CrossLink = { to: string; label: string };

export function SiteNavigation({ crossLink }: { crossLink?: CrossLink }) {
  const edition = useEdition();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const isPast = edition.status === "past";
  const items = [
    { id: "palestrantes", label: "Palestrantes" },
    { id: "programacao", label: "Programação" },
    { id: "local", label: "Local" },
    ...(isPast ? [] : [{ id: "call-for-papers", label: "Quero palestrar" }]),
    { id: "patrocinadores", label: "Marcas" },
  ];

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isPast]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="min-w-0" aria-label="AI Brasil — início">
          <img
            src={logoAsset.url}
            alt="AIBrasil.AI"
            width={1120}
            height={210}
            className="h-7 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "location" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-xs font-semibold transition-colors",
                activeId === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
          {crossLink ? (
            <Link
              to={crossLink.to}
              className="rounded-md px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {crossLink.label}
            </Link>
          ) : null}
          <RsvpButton
            className="ml-2 px-5 py-2.5 text-xs"
            label={isPast ? "Fotos e vídeos" : undefined}
            href={isPast ? edition.downloadUrl : undefined}
          />
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-11 w-11 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </Button>
      </div>

      {open ? (
        <div id="mobile-navigation" className="border-t border-border bg-background px-5 pb-5 pt-3 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
            {crossLink ? (
              <Link
                to={crossLink.to}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {crossLink.label}
              </Link>
            ) : null}
            <RsvpButton
              className="mt-3 w-full"
              label={isPast ? "Fotos e vídeos" : undefined}
              href={isPast ? edition.downloadUrl : undefined}
            />
          </div>
        </div>
      ) : null}
    </nav>
  );
}