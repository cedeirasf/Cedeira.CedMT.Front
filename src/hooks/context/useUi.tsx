import type { Modal, UiContextType } from "@/types/context/ui.context.types";
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
  const [modal, setModal] = useState<Modal | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    localStorage.setItem("sidebar_open", String(!sidebarOpen));
  };

  const openModal = (modal: Modal) => {
    setModal(modal);
  };
  const closeModal = () => {
    setModal(null);
  };

  function getModalData<T>(): T {
    return modal!.data as T;
  }

  return (
    <Context.Provider
      value={{
        modal,
        isSidebarOpen: sidebarOpen,
        toggleSidebar,
        openModal,
        closeModal,
        getModalData,
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
