import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFetchingMock } from "@/hooks/use-fetching-mock";
import { cn } from "@/lib/utils";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
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

  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <SkeletonWrapper isLoading={isFetching} fullWidth>
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle className="text-xl xl:text-2xl font-bold text-wrap">
            Por criterios de conciliación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                cursor={{ opacity: 0.1 }}
                content={(props) => <CustomTooltip {...props} total={total} />}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </SkeletonWrapper>
  );
};

function CustomTooltip({
  active,
  payload,
  total,
}: {
  active: any;
  payload: any;
  total: number;
}) {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;
  const { name, value, color } = data;

  return (
    <div className="min-w-[300px] rounded border bg-card p-4 gap-4">
      <div className="flex items-center gap-2">
        <div
          className={cn("size-4 rounded-full")}
          style={{ backgroundColor: color }}
        />
        <div className="flex w-full justify-between">
          <p className="text-sm text-muted-foreground">{name}</p>
          <div className={cn("text-sm font-bold")}>
            <p>{`${value} (${((value / total) * 100).toFixed(1)}%)`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  if (percent < 0.1) return null;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan x={x} dy="-0.5em">{`${(percent * 100).toFixed(0)}%`}</tspan>
    </text>
  );
};
