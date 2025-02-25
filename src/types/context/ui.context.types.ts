import type { ModalEnum } from "../enum/ModalEnum";

export interface Modal {
  name: ModalEnum;
  data: any;
}

export interface UiContextType {
  modal: Modal | null;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeModal: () => void;
  openModal: (modal: Modal) => void;
  getModalData<T>(): T;
}
