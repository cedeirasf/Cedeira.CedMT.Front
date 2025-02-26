import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { TooltipAnnualDifferentChart } from "@/components/ui/chart/TooltipAnnualDifferentChart";

const data = [
  {
    name: "Ene",
    conciliados: 4000,
    rechazados: 2400,
    pendientes: 1200,
    amt: 7600,
    year: 2025,
  },
  {
    name: "Feb",
    conciliados: 3500,
    rechazados: 1800,
    pendientes: 800,
    amt: 6100,
    year: 2025,
  },
  {
    name: "Mar",
    conciliados: 5000,
    rechazados: 1200,
    pendientes: 1500,
    amt: 7700,
    year: 2025,
  },
  {
    name: "Abr",
    conciliados: 2800,
    rechazados: 3100,
    pendientes: 900,
    amt: 6800,
    year: 2025,
  },
  {
    name: "May",
    conciliados: 6000,
    rechazados: 1500,
    pendientes: 600,
    amt: 8100,
    year: 2025,
  },
  {
    name: "Jun",
    conciliados: 4200,
    rechazados: 2000,
    pendientes: 1000,
    amt: 7200,
    year: 2025,
  },
  {
    name: "Jul",
    conciliados: 3800,
    rechazados: 2200,
    pendientes: 1100,
    amt: 7100,
    year: 2025,
  },
  {
    name: "Ago",
    conciliados: 4500,
    rechazados: 1900,
    pendientes: 10,
    amt: 7200,
    year: 2025,
  },
  {
    name: "Sep",
    conciliados: 5200,
    rechazados: 1600,
    pendientes: 0,
    amt: 7700,
    year: 2025,
  },
  {
    name: "Oct",
    conciliados: 4800,
    rechazados: 2100,
    pendientes: 1000,
    amt: 7900,
    year: 2025,
  },
  {
    name: "Nov",
    conciliados: 4100,
    rechazados: 1700,
    pendientes: 0,
    amt: 7000,
    year: 2025,
  },
  {
    name: "Dic",
    conciliados: 5500,
    rechazados: 1400,
    pendientes: 700,
    amt: 7600,
    year: 2025,
  },
];

export const EntityAnnualDifferenceChart = () => {
  const { isFetching } = useFetchingMock();

  const dataAvailable = true;
  return (
    <Card className="col-span-12 mt-2 w-full">
      <CardHeader className="gap-2">
        <CardTitle className="grid grid-flow-row justify-between gap-2 md:grid-flow-col">
          <h2 className="text-2xl font-semibold text-card-foreground">
            Taza de diferencias anuales
          </h2>
          <div className="flex h-10 gap-2 flex-wrap">
            <Badge variant="outline">
              <div className="h-4 w-4 rounded-full bg-emerald-500" />
              Conciliado
            </Badge>
            <Badge
              className="flex items-center gap-2 text-sm"
              variant="outline"
            >
              <div className="h-4 w-4 rounded-full bg-amber-500" />
              Pendiente
            </Badge>
            <Badge
              className="flex items-center gap-2 text-sm"
              variant="outline"
            >
              <div className="h-4 w-4 rounded-full bg-red-500" />
              Rechazado
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
                  <linearGradient id="conciliados" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#10B981" stopOpacity="1" />
                    <stop offset="1" stopColor="#10B981" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="rechazados" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#E7000B" stopOpacity="1" />
                    <stop offset="1" stopColor="#E7000B" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="pendientes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#FFB900" stopOpacity="1" />
                    <stop offset="1" stopColor="#FFB900" stopOpacity="1" />
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
                  content={(props) => (
                    <TooltipAnnualDifferentChart {...props} />
                  )}
                />
                <Bar
                  dataKey="conciliados"
                  fill="url(#conciliados)"
                  radius={50}
                  stackId="a"
                  className="cursor-pointer"
                  barSize={30}
                />
                <Bar
                  dataKey="rechazados"
                  fill="url(#rechazados)"
                  radius={50}
                  stackId="a"
                  className="cursor-pointer"
                  barSize={30}
                />
                <Bar
                  dataKey="pendientes"
                  fill="url(#pendientes)"
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
