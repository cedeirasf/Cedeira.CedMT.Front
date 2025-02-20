import { GridSignalRProvider } from "@/hooks/context/useGridSignalR";
import { WorkspaceHashScreen } from "@/screen/WorkspaceHashScreen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_app/_dashboard/dashboard/$entity/workspace/$hash"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { hash } = Route.useParams();

  return (
    <GridSignalRProvider hubName="grid-hub" hash={hash}>
      <WorkspaceHashScreen />
    </GridSignalRProvider>
  );
}
