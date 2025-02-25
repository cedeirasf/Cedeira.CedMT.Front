import { StackedBarChart } from "@/components/ui/chart/StackedBarChart";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_dashboard/dashboard/$entity/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex w-full  flex-col gap-4">
      <div className="flex w-[800px]">
        <StackedBarChart barHeight={300} />
      </div>
    </div>
  );
}
