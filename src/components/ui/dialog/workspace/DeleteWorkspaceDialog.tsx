import type { IWorkspaceDeleteForm } from "@/types/form/workspace.form.types";
import { useUiContext } from "@/hooks/context/useUi";
import { Trash } from "lucide-react";
import { Button, Dialog } from "mtch-ui";

export const DeleteWorkspaceDialog = () => {
  const { getModalData, closeModal } = useUiContext();

  const modalData = getModalData<IWorkspaceDeleteForm>();

  return (
    <Dialog
      isOpen={true}
      onClose={closeModal}
      title="Eliminar Workspace"
      description={`¿Estás seguro de que quieres eliminar el workspace "${modalData.name}"? Esta acción no se puede deshacer.`}
      footer={
        <div className="flex w-full align-center justify-between">
          <Button variant="ghost" onClick={closeModal}>
            Cancelar
          </Button>
          <Button variant="destructive" className="gap-2">
            <Trash className="h-4 w-4" />
            Eliminar Workspace
          </Button>
        </div>
      }
    />
  );
};
