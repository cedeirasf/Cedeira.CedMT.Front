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

export const SidebarWorkspaces = () => {
  const { isSidebarOpen } = useUiContext();
  const { entity } = useParams({
    strict: false,
  });
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const onEdit = () => {
    setActiveMenu(null);
  };

  const onDelete = () => {
    setActiveMenu(null);
  };

  const onCreateWorkspace = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("create...");
  };

  const workspaces = [
    { name: "Workspace 1", hash: "1" },
    { name: "Workspace 2", hash: "2" },
    { name: "Workspace 3", hash: "3" },
  ];

  return (
    <li className="list-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm transition-colors"
      >
        <div className="flex items-center  gap-3">
          <Tablet className="h-5 w-5 shrink-0" />
          {isSidebarOpen && <span>Workspaces</span>}
        </div>
        {isSidebarOpen && (
          <div className="flex items-center justify-center gap-2">
            <button onClick={onCreateWorkspace}>
              <Plus className="h-4 w-4" />
            </button>
            <ChevronDown
              className={`ml-auto h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        )}
      </button>
      {isSidebarOpen && (
        <ul className={`ml-6 mt-1 space-y-1 ${isOpen ? "" : "hidden"}`}>
          {workspaces.map((workspace) => (
            <li key={workspace.name}>
              <Link
                to="/dashboard/$entity/workspace/$hash"
                params={{ entity: entity!, hash: workspace.hash }}
                className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md group"
                activeProps={{
                  className: "bg-gray-100 text-blue-600 hover:bg-gray-200",
                }}
              >
                <span> {workspace.name}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu(workspace.name);
                  }}
                  className="opacity-0 group-hover:opacity-100 focus:opacity-100"
                >
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </button>
              </Link>
              {activeMenu === workspace.name && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={onEdit}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        onClick={onDelete}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
