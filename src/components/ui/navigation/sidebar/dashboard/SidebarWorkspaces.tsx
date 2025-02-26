import type {
  IWorkspaceDeleteForm,
  IWorkspaceForm,
} from "@/types/form/workspace.form.types";
import { useUiContext } from "@/hooks/context/useUi";
import { Link, useParams } from "@tanstack/react-router";
import {
  ChevronDown,
  Edit,
  MoreHorizontal,
  Plus,
  Tablet,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { WorkspaceLoadTypeEnum } from "@/types/enum/WorkspaceLoadTypeEnum";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModalEnum } from "@/types/enum/ModalEnum";

interface Props {
  classNameSidebarLabels?: string;
}

export const SidebarWorkspaces = ({ classNameSidebarLabels }: Props) => {
  const { openModal } = useUiContext();
  const { entity } = useParams({
    strict: false,
  });
  const [isOpen, setIsOpen] = useState(true);

  const onEdit = (id: number) => {
    const data: IWorkspaceForm = {
      id: id,
      name: "workspace 1",
      hash: "ASDFGXXFD",
      loadType: WorkspaceLoadTypeEnum.HASH,
      period: {
        from: undefined,
        to: undefined,
      },
    };

    openModal({
      data,
      name: ModalEnum.WorkspaceUpdate,
    });
  };

  const onDelete = (id: number) => {
    const data: IWorkspaceDeleteForm = {
      id: id,
      name: "workspace 1",
    };

    openModal({
      data,
      name: ModalEnum.WorkspaceDelete,
    });
  };

  const onCreateWorkspace = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  const workspaces = [
    { id: 1, name: "Workspace 1", hash: "1" },
    { id: 2, name: "Workspace 2", hash: "2" },
    { id: 3, name: "Workspace 3", hash: "3" },
  ];

  return (
    <li className="list-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm transition-colors"
      >
        <div className="flex items-end rounded-md text-sm transition-colors gap-3 font-bold">
          <Tablet className="size-5 shrink-0" />
          <span className={cn("text-[15px]", classNameSidebarLabels)}>
            Workspaces
          </span>
        </div>
        <div className={classNameSidebarLabels}>
          <div className="flex items-center justify-center gap-2">
            <Plus
              className="h-4 w-4 hover:text-accent-foreground"
              onClick={onCreateWorkspace}
            />
            <ChevronDown
              className={cn(
                "ml-auto h-4 w-4 transition-transform hover:text-accent-foreground",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </div>
      </button>
      {isOpen && (
        <ul
          className={cn(
            "ml-6 mt-1 space-y-1",
            "flex-col",
            classNameSidebarLabels
          )}
        >
          {workspaces.map((workspace) => (
            <li key={workspace.name}>
              <Link
                to="/dashboard/$entity/workspace/$hash"
                params={{ entity: entity!, hash: workspace.hash }}
                className="flex items-center justify-between px-4 py-2 text-sm group hover:text-accent-foreground font-bold"
                activeProps={{
                  className: "text-accent-foreground ",
                }}
              >
                <span> {workspace.name}</span>
                <WorkspaceOptions
                  onEdit={() => onEdit(workspace.id)}
                  onDelete={() => onDelete(workspace.id)}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const WorkspaceOptions = ({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreHorizontal className="h-4 w-4 text-foreground hover:text-accent-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-card"
        side="right"
        align="end"
        sideOffset={2}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={onEdit} className="cursor-pointer">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={onDelete}>
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
