import { routeTree } from "@/routeTree.gen";
import { createRouter } from "@tanstack/react-router";

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultPendingMinMs: 0,
  context: {
    auth: undefined!,
  },
});
