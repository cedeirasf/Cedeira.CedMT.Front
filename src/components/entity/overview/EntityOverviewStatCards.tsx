import { EntityOverviewBalance } from "./EntityOverviewBalance";
import { useFetchingMock } from "@/hooks/use-fetching-mock";
import { EntityOverviewPeriod } from "./EntityOverviewPeriod";
import { EntityOverviewTotalConciliated } from "./EntityOverviewTotalConciliated";
import SkeletonWrapper from "@/components/ui/skeleton/SkeletonWrapper";

export const EntityOverviewStatCards = () => {
  const { isFetching } = useFetchingMock();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-w-0">
      <SkeletonWrapper isLoading={isFetching} fullWidth>
        <EntityOverviewPeriod />
      </SkeletonWrapper>
      <SkeletonWrapper isLoading={isFetching} fullWidth>
        <EntityOverviewBalance />
      </SkeletonWrapper>
      <SkeletonWrapper isLoading={isFetching} fullWidth>
        <EntityOverviewTotalConciliated />
      </SkeletonWrapper>
    </div>
  );
};
