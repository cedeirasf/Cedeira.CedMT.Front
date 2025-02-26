import type { TooltipProps } from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { TooltipRowChart } from "./TooltipRowChart";

export const TooltipAnnualDifferentChart = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;
  const { conciliados, rechazados, pendientes } = data;

  return (
    <div className="min-w-[300px] rounded border bg-background p-4 gap-4">
      <TooltipRowChart
        label="Conciliados"
        value={conciliados}
        bgColor="bg-emerald-500"
        textColor="text-emerald-500"
      />
      <TooltipRowChart
        label="Rechazados"
        value={rechazados}
        bgColor="bg-red-500"
        textColor="text-red-500"
      />
      <TooltipRowChart
        label="Pendientes"
        value={pendientes}
        bgColor="bg-amber-300"
        textColor="text-amber-300"
      />
    </div>
  );
};
