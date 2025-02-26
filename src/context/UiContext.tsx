import type { UiContextType } from "@/types/context/ui.context.types";
import { createContext } from "react";

export const UiContext = createContext<UiContextType | null>(null);
