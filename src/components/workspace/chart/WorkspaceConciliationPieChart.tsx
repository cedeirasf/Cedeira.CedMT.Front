import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFetchingMock } from "@/hooks/use-fetching-mock";
import { PieChart } from "@/components/ui/chart/PieChart";
import SkeletonWrapper from "@/components/ui/skeleton/SkeletonWrapper";

const data = [
  { name: "Diferencia de Importes", value: 19, color: "#80CAFF" },
  { name: "Estados distintos en P", value: 1, color: "#FF8080" },
  { name: "Solo colesa en S", value: 15, color: "#FFB366" },
  { name: "Solo coelsa en N", value: 50, color: "#66CC99" },
  { name: "Diplicados", value: 5, color: "#B366FF" },
];

export const WorkspaceConciliationPieChart = () => {
  const { isFetching } = useFetchingMock();

  return (
    <SkeletonWrapper isLoading={isFetching} fullWidth>
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle className="text-xl xl:text-2xl font-bold text-wrap">
            Por criterios de conciliación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart data={data} innerRadius={70} />
        </CardContent>
      </Card>
    </SkeletonWrapper>
  );
};
