import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SidebarToggleButton } from "./SidebarToggleButton";
import { useUiContext } from "@/hooks/context/useUi";
import { SidebarWorkspaces } from "./SidebarWorkspaces";
import { SidebarActiveEntity } from "./SidebarActiveEntity";
import { NavigationAvatar } from "../../NavigationAvatar";

export const DashboardSidebar = () => {
  const { isSidebarOpen } = useUiContext();

  return (
    <div className="relative flex">
      <aside
        className={cn(
          "flex h-screen flex-col border-r bg-background transition-all duration-300",
          !isSidebarOpen ? "w-[68px]" : "w-64"
        )}
      >
        <Link to="/home">
          <div className="flex h-14 items-center justify-center border-b">
            <span className="font-semibold">LOGO</span>
          </div>
        </Link>
        <nav className="flex-1 space-y-1 p-2">
          <SidebarActiveEntity />
          <Link
            to="/home"
            className="flex w-full items-center rounded-md gap-3 px-4 py-2 text-sm transition-colors hover:bg-gray-100"
          >
            <Home className="h-5 w-5 shrink-0" />
            {isSidebarOpen && <span>Home</span>}
          </Link>
          <SidebarWorkspaces />
        </nav>
        <div className="border-t p-4">
          <NavigationAvatar isSidebarOpen={isSidebarOpen} />
        </div>
        <SidebarToggleButton />
      </aside>
    </div>
  );
};
