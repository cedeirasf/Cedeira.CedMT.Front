import { Cell, Pie, PieChart } from "recharts";

interface Props {
  data: { name: string; value: number; color: string }[];
  startAngle?: number;
}

export const PieChartTotalConciliated = ({ data }: Props) => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div>
      <PieChart width={200} height={120}>
        <Pie
          data={data}
          cx="50%"
          cy={90}
          startAngle={180}
          endAngle={0}
          paddingAngle={3}
          dataKey="value"
          cornerRadius={2}
          innerRadius={65}
          outerRadius={90}
          stroke="none"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <foreignObject x={0} y={40} width={200} height={150}>
          <div className="flex gap-1 flex-col items-center">
            <p className="text-sm mr-1 font-bold">{total.toLocaleString()}</p>
            <p className="text-md font-bold text-foreground-foreground">
              Transacciones
            </p>
            <div className="gap-2 mt-3 flex flex-row items-center text-xs">
              {data.map((entry) => (
                <p key={entry.name} style={{ color: entry.color }}>
                  {entry.name}: {entry.value.toLocaleString()}
                </p>
              ))}
            </div>
          </div>
        </foreignObject>
      </PieChart>
    </div>
  );
};
