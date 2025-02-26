import { useUiContext } from "@/hooks/context/useUi";
import { cn } from "@/lib/utils";
import { PanelLeftClose } from "lucide-react";

export const SidebarToggleButton = () => {
  const { toggleSidebar, isSidebarOpen } = useUiContext();
  return (
    <button
      onClick={toggleSidebar}
      className="absolute -right-3 top-20 h-6 w-6 items-center justify-center rounded-full border hidden lg:block"
    >
      <PanelLeftClose
        className={cn(
          "h-4 w-4 hover:text-accent-foreground",
          !isSidebarOpen && "rotate-180"
        )}
      />
    </button>
  );
};
