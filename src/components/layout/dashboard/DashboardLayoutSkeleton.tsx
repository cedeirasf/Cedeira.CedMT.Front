import { SidebarSkeleton } from "@/components/ui/navigation/sidebar/SidebarSkeleton";
import { Outlet } from "@tanstack/react-router";

export const DashboardLayoutSkeleton = () => {
  return (
    <div className="flex h-screen bg-background">
      <SidebarSkeleton />
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};
