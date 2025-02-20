import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  beforeLoad: async ({ context, location }) => {
    if (!context.auth.isAuthenticated && localStorage.getItem("token")) {
      if (context.auth.refreshing) {
        await context.auth.revalidateUser();
      }
    } else if (!context.auth.isAuthenticated)
      throw redirect({
        to: "/",
        search: { redirect: location.href },
      });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
