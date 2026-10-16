"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Project } from "@/lib/data";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import CaseOverlay from "./CaseOverlay";

type ProjectContextValue = {
  openProject: (project: Project) => void;
  closeProject: () => void;
};

const ProjectContext = createContext<ProjectContextValue | null>(null);

export function useProject() {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProject doit être utilisé dans <ProjectProvider>");
  return ctx;
}

/** Partage l'état « projet ouvert » entre le Hero et la section Work, et affiche la modale. */
export default function ProjectProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Project | null>(null);

  const openProject = useCallback((project: Project) => setSelected(project), []);
  const closeProject = useCallback(() => setSelected(null), []);

  useBodyScrollLock(selected !== null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && closeProject();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, closeProject]);

  const value = useMemo(() => ({ openProject, closeProject }), [openProject, closeProject]);

  return (
    <ProjectContext.Provider value={value}>
      {children}
      {selected && <CaseOverlay project={selected} onClose={closeProject} />}
    </ProjectContext.Provider>
  );
}
