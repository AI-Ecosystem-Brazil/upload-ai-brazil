import { createContext, useContext, type ReactNode } from "react";
import type { Edition } from "@/data/types";
import { ARARAS_EDITION } from "@/data/edition-araras";

const EditionContext = createContext<Edition>(ARARAS_EDITION);

export function EditionProvider({
  edition,
  children,
}: {
  edition: Edition;
  children: ReactNode;
}) {
  return <EditionContext.Provider value={edition}>{children}</EditionContext.Provider>;
}

export function useEdition(): Edition {
  return useContext(EditionContext);
}
