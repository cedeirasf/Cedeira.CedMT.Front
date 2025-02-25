import type { IWorkspaceForm } from "@/types/form/workspace.form.types";
import { WorkspaceLoadTypeEnum } from "@/types/enum/WorkspaceLoadTypeEnum";
import { Badge } from "mtch-ui";
import { useFormContext } from "react-hook-form";

export const WorkspaceStepTwoForm = () => {
  const { watch } = useFormContext<IWorkspaceForm>();

  const formData = watch();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Resumen de la selección</h3>
      <div className="grid grid-cols-[auto,1fr] gap-y-2 gap-x-4 items-center">
        <p>Tipo de carga:</p>
        <Badge color="blue" className="justify-start">
          {formData.loadType === WorkspaceLoadTypeEnum.HASH
            ? "Hash"
            : "Workspace Personalizado"}
        </Badge>

        <p>Nombre:</p>
        <Badge color="blue" className="justify-start">
          {formData.name}
        </Badge>

        {formData.loadType === WorkspaceLoadTypeEnum.HASH && formData.hash && (
          <>
            <p>Hash:</p>
            <Badge color="blue" className="justify-start">
              {formData.hash}
            </Badge>
          </>
        )}

        {formData.loadType === WorkspaceLoadTypeEnum.CUSTOM &&
          formData.period && (
            <>
              <p>Rango de fecha:</p>
              <Badge color="blue" className="justify-start">
                {formData.period.from?.toLocaleDateString()}
                {formData.period.to
                  ? ` hasta ${formData.period.to.toLocaleDateString()}`
                  : ""}
              </Badge>
            </>
          )}
      </div>
    </div>
  );
};
