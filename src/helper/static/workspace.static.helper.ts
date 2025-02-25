import type { IWorkspaceForm } from "@/types/form/workspace.form.types";
import { WorkspaceLoadTypeEnum } from "@/types/enum/WorkspaceLoadTypeEnum";

export const worksapceFormValues: IWorkspaceForm = {
  id: 0,
  name: "",
  period: {
    from: undefined,
    to: undefined,
  },
  hash: "",
  loadType: WorkspaceLoadTypeEnum.CUSTOM,
};
