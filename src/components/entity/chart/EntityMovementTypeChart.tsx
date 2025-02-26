import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TooltipMovementTypeChart } from "@/components/ui/chart/TooltipMovementTypeChart";
import { useFetchingMock } from "@/hooks/use-fetching-mock";
import { Badge } from "mtch-ui";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SkeletonWrapper from "@/components/ui/skeleton/SkeletonWrapper";

const data = [
  {
    name: "TRXIN",
    credit: 4000,
    debit: 2400,
    amt: 7600,
  },
  {
    name: "DEBINQR",
    credit: 3500,
    debit: 1800,
    amt: 6100,
  },
  {
    name: "TRXPL",
    credit: 5000,
    debit: 1200,
    amt: 7700,
  },
  {
    name: "PREAU",
    credit: 2800,
    debit: 3100,
    amt: 6800,
  },
  {
    name: "DEBIn",
    credit: 6000,
    debit: 1500,
    amt: 8100,
  },
  {
    name: "SEPDI",
    credit: 4200,
    debit: 2000,
    amt: 7200,
  },
];

export const EntityMovementTypeChart = () => {
  const { isFetching } = useFetchingMock();

  const dataAvailable = true;
  return (
    <Card className="col-span-12 mt-2 w-full">
      <CardHeader className="gap-2">
        <CardTitle className="grid grid-flow-row justify-between gap-2 md:grid-flow-col">
          <h2 className="text-2xl font-semibold text-card-foreground">
            Diferencias entre Tipos de Movimientos
          </h2>
          <div className="flex h-10 gap-2">
            <Badge variant="outline">
              <div className="h-4 w-4 rounded-full bg-emerald-500" />
              Débito
            </Badge>
            <Badge
              className="flex items-center gap-2 text-sm"
              variant="outline"
            >
              <div className="h-4 w-4 rounded-full bg-blue-500" />
              Crédito
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SkeletonWrapper isLoading={isFetching}>
          {dataAvailable ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                height={300}
                data={data}
                barGap={30}
                barCategoryGap={30}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient id="credit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#3B82F6" stopOpacity="1" />
                    <stop offset="1" stopColor="#3B82F6" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="debit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#10B981" stopOpacity="1" />
                    <stop offset="1" stopColor="#10B981" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="5 5"
                  strokeOpacity="0.2"
                  vertical={false}
                />
                <XAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={true}
                  padding={{ left: 5, right: 5 }}
                  dataKey="name"
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={true}
                />
                <Tooltip
                  cursor={{ opacity: 0.1 }}
                  content={(props) => <TooltipMovementTypeChart {...props} />}
                />
                <Bar
                  dataKey="debit"
                  fill="url(#debit)"
                  radius={50}
                  stackId="a"
                  className="cursor-pointer"
                  barSize={30}
                />
                <Bar
                  dataKey="credit"
                  fill="url(#credit)"
                  radius={50}
                  stackId="a"
                  className="cursor-pointer"
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <Card className="flex h-[300px] flex-col items-center justify-center bg-background">
              No data for the selected period
            </Card>
          )}
        </SkeletonWrapper>
      </CardContent>
    </Card>
  );
};
