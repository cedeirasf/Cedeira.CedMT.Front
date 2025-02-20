import type { UiContextType } from "@/types/context/ui.context.types";
import type { AuthContextType } from "@/types/context/user.context.types";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface RouteContext {
  auth: AuthContextType;
  ui: UiContextType;
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootPage,
});

function RootPage() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  );
}
