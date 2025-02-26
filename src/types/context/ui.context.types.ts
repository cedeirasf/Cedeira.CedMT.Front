import type { ModalEnum } from "../enum/ModalEnum";

export interface Modal {
  name: ModalEnum;
  data: any;
}

export interface UiContextType {
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  modal: Modal | null;
  toggleSidebar: () => void;
  closeModal: () => void;
  openModal: (modal: Modal) => void;
  getModalData<T>(): T;
  toggleMobileSidebar: () => void;
  changeTheme: () => void;
}
