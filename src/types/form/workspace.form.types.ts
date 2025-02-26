import type { WorkspaceLoadTypeEnum } from "../enum/WorkspaceLoadTypeEnum";

export interface IWorkspaceDeleteForm {
  id: number;
  name: string;
}

interface IWorkspacePeriod {
  from?: Date | undefined;
  to?: Date | undefined;
}

export interface IWorkspaceForm {
  id: number;
  name: string;
  period: IWorkspacePeriod;
  hash: string;
  loadType: WorkspaceLoadTypeEnum;
}
