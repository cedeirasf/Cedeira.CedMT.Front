import { WorkspaceOverviewStatCards } from "./WorkspaceOverviewStatCards";
import { WorkspaceConciliationPieChart } from "../chart/WorkspaceConciliationPieChart";

interface Props {
  expanded: boolean;
}

export const WorkspaceOverview = ({ expanded }: Props) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <WorkspaceOverviewStatCards />
      {expanded && (
        <div className="grid w-full grid-cols-12 gap-8 mt-6">
          <div className="col-span-12 xl:col-span-4 bg-background rounded-xl">
            <WorkspaceConciliationPieChart />
          </div>
          <div className="col-span-12 xl:col-span-8 bg-background rounded-xl p-4">
            <h3 className="text-lg font-semibold">Columna 9</h3>
            <p className="text-muted-foreground">
              Contenido de ejemplo más extenso
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
