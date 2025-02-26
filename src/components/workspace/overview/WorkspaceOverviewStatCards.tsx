import {
  type LucideProps,
  ArrowDown,
  CircleEllipsis,
  ClockArrowDown,
  FileDiff,
  Wallet,
} from "lucide-react";
import { useFetchingMock } from "@/hooks/use-fetching-mock";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SkeletonWrapper from "@/components/ui/skeleton/SkeletonWrapper";

export const WorkspaceOverviewStatCards = () => {
  const { isFetching } = useFetchingMock();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-w-0">
      <SkeletonWrapper isLoading={isFetching} fullWidth>
        <SimpleCard
          title="Diferencia Importe"
          IconLeft={Wallet}
          value="$2.13M"
          IconRight={FileDiff}
          color="emerald-500"
        />
      </SkeletonWrapper>
      <SkeletonWrapper isLoading={isFetching} fullWidth>
        <SimpleCard
          title="Diferencias sin ajustar"
          IconLeft={FileDiff}
          value="1/500"
          IconRight={ArrowDown}
          color="red-500"
        />
      </SkeletonWrapper>
      <SkeletonWrapper isLoading={isFetching} fullWidth>
        <SimpleCard
          title="Pendientes"
          IconLeft={ClockArrowDown}
          value="1/500"
          IconRight={CircleEllipsis}
          color="amber-400"
        />
      </SkeletonWrapper>
    </div>
  );
};

interface SimpleCardProps {
  title: string;
  IconLeft: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  IconRight: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  value: string;
  color: string;
}

const SimpleCard = ({
  title,
  IconLeft,
  value,
  IconRight,
  color,
}: SimpleCardProps) => {
  return (
    <Card className="flex w-full items-center justify-between p-6 bg-card flex-wrap">
      <div className="flex w-ful flex-row items-center justify-start gap-2">
        {<IconLeft className={"size-5 xl:size-7 shrink-0"} />}
        <p className="text-xl xl:text-2xl font-bold text-wrap">{title}</p>
      </div>
      <div
        className={cn(
          "flex w-ful flex-row items-center justify-end gap-2 rounded-[6px] shrink-0 p-1.5",
          `text-${color}`,
          `bg-${color}/20`
        )}
      >
        <p className="font-bold  whitespace-nowrap">{value}</p>
        {<IconRight className="size-4 shrink-0" />}
      </div>
    </Card>
  );
};
