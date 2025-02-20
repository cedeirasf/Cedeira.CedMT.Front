import { AuthLayout } from "@/components/layout/auth/AuthLayout";
import { DashboardLayout } from "@/components/layout/dashboard/DashboardLayout";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/_auth")({
  validateSearch: z.object({
    redirect: z.string().optional().catch(""),
  }),
  beforeLoad: async ({ context, search }) => {
    if (context.auth.refreshing) await context.auth.revalidateUser();
    else if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || "/home" });
    }
  },
  component: AuthLayout,
  pendingComponent: localStorage.getItem("token")
    ? AuthLayout
    : DashboardLayout,
});
