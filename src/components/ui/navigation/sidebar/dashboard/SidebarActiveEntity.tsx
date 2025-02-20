import { useUiContext } from "@/hooks/context/useUi";
import { Link, useParams } from "@tanstack/react-router";
import { Building2 } from "lucide-react";

export const SidebarActiveEntity = () => {
  const { isSidebarOpen } = useUiContext();
  const { entity } = useParams({
    strict: false,
  });

  return (
    <Link
      to="/dashboard/$entity"
      params={{ entity: entity as string }}
      className={
        "flex w-full items-center rounded-md px-4 py-2 text-sm transition-colors mb-6 gap-3 "
      }
      activeOptions={{ exact: true }}
      activeProps={{
        className: "bg-gray-100 text-blue-600 hover:bg-gray-200",
      }}
    >
      <Building2 className="h-5 w-5 shrink-0" />
      {isSidebarOpen && <span>{entity}</span>}
    </Link>
  );
};
