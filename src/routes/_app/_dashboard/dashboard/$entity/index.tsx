import { EntityAnnualDifferenceChart } from "@/components/entity/overview/EntityAnnualDifferenceChart";
import { EntityOverviewMovementType } from "@/components/entity/overview/EntityOverviewMovementType";
import { EntityOverviewStatCards } from "@/components/entity/overview/EntityOverviewStatCards";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_dashboard/dashboard/$entity/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-4 p-4">
      <div className="overflow-x-auto min-w-0">
        <EntityOverviewStatCards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-w-0">
        <div className="w-full min-w-0">
          <EntityAnnualDifferenceChart />
        </div>
        <div className="w-full min-w-0">
          <EntityAnnualDifferenceChart />
        </div>
      </div>
      <div className="overflow-x-auto min-w-0">
        <EntityOverviewMovementType />
      </div>
    </div>
  );
}
