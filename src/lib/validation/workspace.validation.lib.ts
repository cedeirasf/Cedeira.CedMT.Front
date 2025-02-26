import type { IWorkspaceForm } from "@/types/form/workspace.form.types";
import { type ZodType, z } from "zod";
import { WorkspaceLoadTypeEnum } from "@/types/enum/WorkspaceLoadTypeEnum";

export const SchemaWorkspaceForm: ZodType<IWorkspaceForm> = z
  .object({
    id: z.number(),
    name: z.string(),
    period: z.object({
      from: z.date().optional(),
      to: z.date().optional(),
    }),
    hash: z.string(),
    loadType: z.enum([
      WorkspaceLoadTypeEnum.CUSTOM,
      WorkspaceLoadTypeEnum.HASH,
    ]),
  })
  .refine((data) => data.name.length > 0, {
    message: "El campo nombre es requerido.",
    path: ["name"],
  })
  .refine(
    (data) => {
      if (data.loadType === WorkspaceLoadTypeEnum.CUSTOM)
        return data.period.from !== null && data.period.to !== undefined;

      return true;
    },
    {
      message: "Debes seleccionar una fecha de inicio y fin.",
      path: ["period"],
    }
  )
  .refine(
    (data) => {
      if (data.loadType === WorkspaceLoadTypeEnum.HASH)
        return data.hash.trim() !== "";

      return true;
    },
    {
      message: "El campo hash es requerido.",
      path: ["hash"],
    }
  );
