import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

enum Period {
  DAY,
  WEEK,
  MONTH,
  SIX_MONTHS,
}

export const EntityOverviewPeriod = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>(Period.DAY);

  const periods = [
    { label: "1 Día", value: Period.DAY },
    { label: "7 Días", value: Period.WEEK },
    { label: "1 Mes", value: Period.MONTH },
    { label: "6 Meses", value: Period.SIX_MONTHS },
  ];

  const handlePeriodChange = (period: Period) => {
    setSelectedPeriod(period);
  };

  const getPeriodLabel = (period: Period) => {
    const today = new Date();
    const from = new Date();

    switch (period) {
      case Period.DAY:
        from.setDate(today.getDate() - 1);
        break;
      case Period.WEEK:
        from.setDate(today.getDate() - 7);
        break;
      case Period.MONTH:
        from.setMonth(today.getMonth() - 1);
        break;
      case Period.SIX_MONTHS:
        from.setMonth(today.getMonth() - 6);
        break;
    }

    return `${from.toLocaleDateString("es-ES")} - ${today.toLocaleDateString("es-ES")}`;
  };

  return (
    <Card className="flex w-full items-start p-6 flex-col justify-between overflow-hidden">
      <div className="w-full flex flex-row items-center justify-between gap-4 mb-4">
        <p className="font-bold truncate text-card-foreground hidden lg:block">
          PERIODO
        </p>
        <div className="flex items-center space-x-2 text-lg font-semibold  text-foreground-foreground">
          <CalendarDays className="size-6 " />
          <label className="font-bold truncate text-wrap">
            {getPeriodLabel(selectedPeriod)}
          </label>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-between gap-2">
        {periods.map((period) => (
          <Button
            key={period.value}
            variant={selectedPeriod === period.value ? "default" : "outline"}
            onClick={() => handlePeriodChange(period.value)}
            className={cn(
              "hover:bg-accent hover:text-accent-foreground",
              selectedPeriod === period.value &&
                "bg-accent text-accent-foreground"
            )}
          >
            {period.label}
          </Button>
        ))}
      </div>
    </Card>
  );
};
