import { cn } from "@/lib/utils";
import { Home, XIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SidebarToggleButton } from "./SidebarToggleButton";
import { useUiContext } from "@/hooks/context/useUi";
import { SidebarWorkspaces } from "./SidebarWorkspaces";
import { SidebarActiveEntity } from "./SidebarActiveEntity";
import { displaySidebarLabels } from "@/helper/dimension/navbar.dimension.helper";
import { useMemo } from "react";
import { NavAvatar } from "../NavAvatar";

export const DashboardSidebar = () => {
  const { isMobileSidebarOpen, isSidebarOpen, toggleMobileSidebar } =
    useUiContext();

  const classNameSidebarLabels = useMemo(
    () =>
      displaySidebarLabels({
        isMobileSidebarOpen,
        isSidebarOpen,
      }),
    [isMobileSidebarOpen, isSidebarOpen]
  );

  return (
    <div className="relative flex">
      <aside
        className={cn(
          "flex h-screen flex-col border-r bg-card transition-all duration-300 ",
          isMobileSidebarOpen && "w-64",
          !isSidebarOpen ? "lg:w-[68px]" : "lg:w-64",
          "lg:relative",
          isMobileSidebarOpen ? "absolute z-50" : "hidden lg:flex"
        )}
      >
        <SidebarHeader toggleMobileSidebar={toggleMobileSidebar} />
        <nav className="flex-1 space-y-1 p-2">
          <SidebarActiveEntity
            classNameSidebarLabels={classNameSidebarLabels}
          />
          <SidebarHomeOption classNameSidebarLabels={classNameSidebarLabels} />
          <SidebarWorkspaces classNameSidebarLabels={classNameSidebarLabels} />
        </nav>
        <div className="border-t p-4">
          <NavAvatar displayChangeTheme />
        </div>
        <SidebarToggleButton />
      </aside>
    </div>
  );
};

const SidebarHomeOption = ({
  classNameSidebarLabels,
}: {
  classNameSidebarLabels?: string;
}) => {
  return (
    <Link
      to="/home"
      className="flex items-end rounded-md px-4 py-2 text-sm transition-colors mb-6 gap-3 hover:text-accent-foreground font-bold"
      activeProps={{
        className: "text-accent-foreground ",
      }}
    >
      <Home className="size-5 shrink-0" />
      <span className={cn("text-[15px]", classNameSidebarLabels)}>Home</span>
    </Link>
  );
};

const SidebarHeader = ({
  toggleMobileSidebar,
}: {
  toggleMobileSidebar: () => void;
}) => {
  const onClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    toggleMobileSidebar();
  };
  return (
    <Link to="/home">
      <div className="flex h-14 items-center justify-between border-b px-4">
        <span className="font-semibold">CedMT</span>
        <XIcon
          className="h-5 w-5 cursor-pointer hover:text-accent-foreground lg:hidden"
          onClick={onClick}
        />
      </div>
    </Link>
  );
};
