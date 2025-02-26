import { useUiContext } from "@/hooks/context/useUi";
import { ModalEnum } from "@/types/enum/ModalEnum";
import { DeleteWorkspaceDialog } from "./DeleteWorkspaceDialog";
import { WorkspaceDialog } from "./WorkspaceDialog";

export const HandlerWorkspaceDialog = () => {
  const { modal } = useUiContext();

  return (
    <>
      {modal?.name === ModalEnum.WorkspaceDelete && <DeleteWorkspaceDialog />}
      {(modal?.name === ModalEnum.WorkspaceCreate ||
        modal?.name === ModalEnum.WorkspaceUpdate) && <WorkspaceDialog />}
    </>
  );
};
