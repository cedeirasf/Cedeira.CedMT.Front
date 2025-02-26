import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: number;
  bgColor: string;
  textColor: string;
}

export const TooltipRowChart = ({
  label,
  value,
  bgColor,
  textColor,
}: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className={cn("h-4 w-4 rounded-full", bgColor)} />
      <div className="flex w-full justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className={cn("text-sm font-bold", textColor)}>
          <label>{value}</label>
        </div>
      </div>
    </div>
  );
};
