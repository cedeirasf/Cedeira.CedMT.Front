import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_dashboard/dashboard/$entity/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <p>Entity</p>;
}
