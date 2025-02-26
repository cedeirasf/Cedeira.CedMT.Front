import { DashboardSidebar } from "@/components/ui/navigation/sidebar/dashboard/DashboardSidebar";
import { useUiContext } from "@/hooks/context/useUi";
import { Outlet } from "@tanstack/react-router";
import { AlignJustify } from "lucide-react";

export const DashboardLayout = () => {
  const { toggleMobileSidebar } = useUiContext();
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6 bg-background">
        <button className="lg:hidden p-2" onClick={toggleMobileSidebar}>
          <AlignJustify className="h-6 w-6 hover:text-accent-foreground" />
        </button>
        <Outlet />
      </main>
    </div>
  );
};
