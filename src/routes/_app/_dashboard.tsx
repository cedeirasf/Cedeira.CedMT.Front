import { DashboardLayout } from "@/components/layout/dashboard/DashboardLayout";
import { DashboardLayoutSkeleton } from "@/components/layout/dashboard/DashboardLayoutSkeleton";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_dashboard")({
  pendingComponent: DashboardLayoutSkeleton,
  component: DashboardLayout,
});
