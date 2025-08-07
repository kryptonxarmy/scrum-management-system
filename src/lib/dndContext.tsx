import { createContext, useContext } from "react";

export const DndContext = createContext({});
export const useDndContext = () => useContext(DndContext);
