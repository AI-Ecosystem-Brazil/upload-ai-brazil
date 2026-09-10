import { useEffect, useState } from "react";
import { useEdition } from "@/data/edition-context";

type Parts = { dias: number; horas: number; min: number };

function diff(target: number): Parts | null {
  const ms = target - Date.now();
  if (ms <= 0) return null;
  const totalMin = Math.floor(ms / 60000);
  return {
    dias: Math.floor(totalMin / 1440),
    horas: Math.floor((totalMin % 1440) / 60),
    min: totalMin % 60,
  };
}

export function Countdown() {
  const edition = useEdition();
  const target = new Date(edition.dateISO).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 30000);
    return () => clearInterval(id);
  }, [target]);

  const items: Array<[string, number | null]> = [
    ["dias", parts?.dias ?? null],
    ["horas", parts?.horas ?? null],
    ["min", parts?.min ?? null],
  ];

  return (
    <div
      className="grid w-full grid-cols-3 gap-2 sm:flex sm:w-auto sm:gap-3"
      role="timer"
      aria-label="Contagem regressiva para o evento"
    >
      {items.map(([label, value]) => (
        <div
          key={label}
          className="min-w-0 rounded-lg border border-border bg-surface/70 px-2 py-3 text-center backdrop-blur sm:min-w-[86px] sm:rounded-xl sm:px-4"
        >
          <div className="font-display text-2xl font-bold tabular-nums text-primary sm:text-3xl">
            {value === null ? "--" : String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
