import { HomeLayout } from "@/components/layout/home/HomeLayout";
import { HomeLayoutSkeleton } from "@/components/layout/home/HomeLayoutSkeleton";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_home")({
  component: HomeLayout,
  pendingComponent: HomeLayoutSkeleton,
});
