import { useFetchingMock } from "@/hooks/use-fetching-mock";
import { EntityMovementTypeChart } from "../chart/EntityMovementTypeChart";
import { Card } from "@/components/ui/card";
import { PieChartMovementType } from "@/components/ui/chart/PieChartMovementType.tsx";
import SkeletonWrapper from "@/components/ui/skeleton/SkeletonWrapper";

const data = [
  { name: "Crédito", value: 1500, color: "#00C49F" },
  { name: "Débito", value: 320, color: "#2662d9" },
];

export const EntityOverviewMovementType = () => {
  const { isFetching } = useFetchingMock();
  return (
    <div className="grid grid-cols-1">
      <SkeletonWrapper isLoading={isFetching} fullWidth>
        <Card className="col-span-12 mt-2 w-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7">
              <EntityMovementTypeChart />
            </div>
            <div className="col-span-12 md:col-span-5">
              <PieChartMovementType data={data} />
            </div>
          </div>
        </Card>
      </SkeletonWrapper>
    </div>
  );
};
