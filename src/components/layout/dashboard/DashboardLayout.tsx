import { HandlerWorkspaceDialog } from "@/components/ui/dialog/workspace/HandlerWorkspaceDialog";
import { DashboardSidebar } from "@/components/ui/navigation/sidebar/dashboard/DashboardSidebar";
import { Outlet } from "@tanstack/react-router";

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
      <HandlerWorkspaceDialog />
    </div>
  );
};
