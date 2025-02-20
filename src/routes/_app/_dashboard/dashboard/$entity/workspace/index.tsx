import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_app/_dashboard/dashboard/$entity/workspace/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_app/_dashboard/dashboard/$entity/workspace/"!</div>;
}
