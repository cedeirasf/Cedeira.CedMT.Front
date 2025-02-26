import { Card } from "@/components/ui/card";

export const EntityOverviewBalance = () => {
  const balance = "$9,23B";
  return (
    <Card className="flex w-full items-center p-6 overflow-hidden flex-wrap flex-col">
      <div className="flex w-full flex-row">
        <div className="flex  flex-col h-full flex-wrap  items-start justify-start">
          <p className="font-bold whitespace-nowrap">BALANCE TOTAL</p>
          <p className="text-3xl font-bold text-muted-foreground truncate">
            {balance}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-0 flex-wrap">
        <div className="flex items-center justify-center aspect-square w-full max-w-[10rem] lg:max-w-[12rem] bg-amber-400 rounded-full border">
          <label className="text-3xl font-bold text-background">30%</label>
        </div>
      </div>
    </Card>
  );
};
