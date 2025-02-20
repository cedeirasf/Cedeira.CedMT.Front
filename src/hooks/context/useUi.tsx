import type { UiContextType } from "@/types/context/ui.context.types";
import React, {
  type ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

const Context = createContext<UiContextType | null>(null);

interface ProviderProps {
  children: ReactNode;
}

export const UiProvider: React.FC<ProviderProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(
    localStorage.getItem("sidebar_open") ? true : false
  );

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    localStorage.setItem("sidebar_open", String(!sidebarOpen));
  };

  return (
    <Context.Provider
      value={{
        isSidebarOpen: sidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUiContext = (): UiContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useUiContext must be used within an UiProvider");
  }
  return context;
};
