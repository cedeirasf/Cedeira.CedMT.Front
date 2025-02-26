import type { TooltipProps } from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { TooltipRowChart } from "./TooltipRowChart";

export const TooltipMovementTypeChart = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;
  const { debit, credit } = data;

  return (
    <div className="min-w-[300px] rounded border bg-background p-4 gap-4">
      <TooltipRowChart
        label="Débito"
        value={debit}
        bgColor="bg-emerald-500"
        textColor="text-emerald-500"
      />
      <TooltipRowChart
        label="Crédito"
        value={credit}
        bgColor="bg-blue-500"
        textColor="text-blue-500"
      />
    </div>
  );
};
