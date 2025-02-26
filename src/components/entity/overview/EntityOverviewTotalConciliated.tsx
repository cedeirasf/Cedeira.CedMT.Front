import { Card } from "@/components/ui/card";
import { PieChartTotalConciliated } from "@/components/ui/chart/PieChartTotalConciliated";
import { Badge } from "mtch-ui";

const data = [
  { name: "Conciliado", value: 1500, color: "#00C49F" },
  { name: "Sin Conciliar", value: 320, color: "#2662d9" },
];

export const EntityOverviewTotalConciliated = () => {
  return (
    <Card className="flex w-full items-center p-6 overflow-hidden">
      <div className="flex h-full w-full flex-col md:flex-row flex-wrap gap-4 md:gap-0 items-start justify-between">
        <div className="flex gap-4 flex-wrap">
          <p className="font-bold whitespace-nowrap">TOTAL CONCILIADAS</p>
          <div className="gap-2 flex sm:hidden xl:flex xl:flex-wrap">
            <Badge>
              <div className="size-4 rounded-full bg-emerald-500" />
              Conciliado
            </Badge>
            <Badge className="flex items-center gap-2 text-sm">
              <div className="size-4 rounded-full bg-blue-500" />
              Sin Conciliar
            </Badge>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-0">
          <PieChartTotalConciliated data={data} />
        </div>
      </div>
    </Card>
  );
};
