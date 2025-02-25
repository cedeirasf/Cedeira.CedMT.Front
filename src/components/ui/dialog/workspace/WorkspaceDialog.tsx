import type { IWorkspaceForm } from "@/types/form/workspace.form.types";
import { useUiContext } from "@/hooks/context/useUi";
import { Dialog } from "mtch-ui";
import { WorkspaceForm } from "../../form/screen/workspace/WorkspaceForm";

export const WorkspaceDialog = () => {
  const { getModalData, closeModal } = useUiContext();

  const modalData = getModalData<IWorkspaceForm>();

  return (
    <Dialog
      isOpen={true}
      onClose={closeModal}
      title={`${modalData.id === 0 ? "Crear" : "Actualizar"} Workspace`}
      closeOnClickOutside={false}
      children={<WorkspaceForm form={modalData} closeModal={closeModal} />}
    />
  );
};
