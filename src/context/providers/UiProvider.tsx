import type { Modal } from "@/types/context/ui.context.types";
import { type ReactNode, useEffect, useState } from "react";
import { UiContext } from "../UiContext";

export const UiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(
    localStorage.getItem("sidebar_open") ? true : false
  );
  const [modal, setModal] = useState<Modal | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    localStorage.setItem("sidebar_open", String(!sidebarOpen));
  };

  const changeTheme = () => {
    const html = document.documentElement;
    const newTheme = isDarkMode ? "light" : "dark";

    html.classList.remove("light", "dark");
    html.classList.add(newTheme);

    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prev) => !prev);
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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const html = document.documentElement;

    if (savedTheme === "dark") {
      html.classList.add("dark");
      setIsDarkMode(true);
    } else {
      html.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <UiContext.Provider
      value={{
        modal,
        isMobileSidebarOpen,
        isSidebarOpen: sidebarOpen,
        toggleSidebar,
        openModal,
        closeModal,
        getModalData,
        toggleMobileSidebar,
        changeTheme,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
