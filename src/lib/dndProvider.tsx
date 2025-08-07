"use client";
import { DndContext } from "./dndContext";
import { ReactNode } from "react";

export function DndProvider({ children }: { children: ReactNode }) {
  // Placeholder for future drag-and-drop logic
  return <DndContext.Provider value={{}}>{children}</DndContext.Provider>;
}
