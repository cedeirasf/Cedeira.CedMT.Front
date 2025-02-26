import type { ModalEnum } from "../enum/ModalEnum";

export interface Modal {
  name: ModalEnum;
  data: any;
}

export interface UiContextType {
  modal: Modal | null;
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeModal: () => void;
  openModal: (modal: Modal) => void;
  getModalData<T>(): T;
  toggleMobileSidebar: () => void;
  changeTheme: () => void;
}
