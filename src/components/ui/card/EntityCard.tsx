import { Link } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { useFetchingMock } from "@/hooks/use-fetching-mock";
import { PieChart } from "../chart/PieChart";
import SkeletonWrapper from "../skeleton/SkeletonWrapper";

interface Props {
  title: string;
  pendientes: number;
  diferencias: number;
  ajustados: number;
  lastUpdate?: string;
}

export const EntityCard = ({
  title,
  pendientes,
  diferencias,
  ajustados,
  lastUpdate,
}: Props) => {
  const { isFetching } = useFetchingMock();
  return (
    <SkeletonWrapper isLoading={isFetching} fullWidth>
      <Card>
        <Link to="/dashboard/$entity" params={{ entity: title }}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-card-foreground">Pendientes</p>
                <p className="text-2xl font-bold text-amber-500">
                  {pendientes}
                </p>
              </div>
              <div>
                <p className="text-sm text-card-foreground">Diferencias</p>
                <p className="text-2xl font-bold text-red-500">{diferencias}</p>
              </div>
              <div>
                <p className="text-sm text-card-foreground">Ajustados</p>
                <p className="text-2xl font-bold text-emerald-500">
                  {ajustados}
                </p>
              </div>
            </div>
            <PieChart
              innerRadius={70}
              data={[
                {
                  name: "Ajustados",
                  value: ajustados,
                  color: "rgb(16 185 129)",
                },
                {
                  name: "Pendientes",
                  value: pendientes,
                  color: "rgb(234 179 8)",
                },
                {
                  name: "Diferencias",
                  value: diferencias,
                  color: "rgb(239 68 68)",
                },
              ]}
            />
            {lastUpdate && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <span>{lastUpdate}</span>
              </div>
            )}
          </CardContent>
        </Link>
      </Card>
    </SkeletonWrapper>
  );
};
