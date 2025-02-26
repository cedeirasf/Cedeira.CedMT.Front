import type { UiContextType } from "@/types/context/ui.context.types";
import { UiContext } from "@/context/UiContext";
import { useContext } from "react";

export const useUiContext = (): UiContextType => {
  const context = useContext(UiContext);
  if (!context) {
    throw new Error("useUiContext must be used within an UiProvider");
  }
  return context;
};
