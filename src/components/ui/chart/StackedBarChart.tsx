import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TooltipMovementTypeChart } from "./TooltipMovementTypeChart";

const data = [
  {
    name: "Enero",
    conciliados: 4000,
    rechazados: 2400,
    pendientes: 1200,
    amt: 7600,
  },
  {
    name: "Febrero",
    conciliados: 3500,
    rechazados: 1800,
    pendientes: 800,
    amt: 6100,
  },
  {
    name: "Marzo",
    conciliados: 5000,
    rechazados: 1200,
    pendientes: 1500,
    amt: 7700,
  },
  {
    name: "Abril",
    conciliados: 2800,
    rechazados: 3100,
    pendientes: 900,
    amt: 6800,
  },
  {
    name: "Mayo",
    conciliados: 6000,
    rechazados: 1500,
    pendientes: 600,
    amt: 8100,
  },
  {
    name: "Junio",
    conciliados: 4200,
    rechazados: 2000,
    pendientes: 1000,
    amt: 7200,
  },
  {
    name: "Julio",
    conciliados: 3800,
    rechazados: 2200,
    pendientes: 1100,
    amt: 7100,
  },
  {
    name: "Agosto",
    conciliados: 4500,
    rechazados: 1900,
    pendientes: 800,
    amt: 7200,
  },
  {
    name: "Septiembre",
    conciliados: 5200,
    rechazados: 1600,
    pendientes: 900,
    amt: 7700,
  },
  {
    name: "Octubre",
    conciliados: 4800,
    rechazados: 2100,
    pendientes: 1000,
    amt: 7900,
  },
  {
    name: "Noviembre",
    conciliados: 4100,
    rechazados: 1700,
    pendientes: 1200,
    amt: 7000,
  },
  {
    name: "Diciembre",
    conciliados: 5500,
    rechazados: 1400,
    pendientes: 700,
    amt: 7600,
  },
];

interface Props {
  containerHeight?: string | number;
  barHeight?: number;
}

export const StackedBarChart = ({
  barHeight = 300,
  containerHeight = 300,
}: Props) => {
  return (
    <ResponsiveContainer width="100%" height={containerHeight}>
      <BarChart
        height={barHeight}
        data={data}
        barCategoryGap={5}
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
            <stop offset="0" stopColor="#10B981" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="rechazados" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E7000B" stopOpacity="1" />
            <stop offset="1" stopColor="#E7000B" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="pendientes" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFB900" stopOpacity="1" />
            <stop offset="1" stopColor="#FFB900" stopOpacity="0.5" />
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
          axisLine={false}
          padding={{ left: 5, right: 5 }}
          dataKey="name"
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Tooltip
          cursor={{ opacity: 0.1 }}
          content={(props) => <TooltipMovementTypeChart {...props} />}
        />
        <Bar
          dataKey="conciliados"
          fill="url(#conciliados)"
          radius={[40, 40, 40, 40]}
          stackId="a"
          className="cursor-pointer"
          barSize={30}
        />
        <Bar
          dataKey="rechazados"
          fill="url(#rechazados)"
          radius={[40, 40, 40, 40]}
          stackId="a"
          className="cursor-pointer"
          barSize={30}
        />
        <Bar
          dataKey="pendientes"
          fill="url(#pendientes)"
          radius={[40, 40, 40, 40]}
          stackId="a"
          className="cursor-pointer"
          barSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
