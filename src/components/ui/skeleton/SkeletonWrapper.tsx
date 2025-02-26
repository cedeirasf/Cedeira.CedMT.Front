import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../skeleton";

interface Props {
  children: ReactNode;
  isLoading: boolean;
  fullWidth?: boolean;
}

const SkeletonWrapper = ({ children, isLoading, fullWidth }: Props) => {
  if (!isLoading) return children;

  return (
    <Skeleton className={cn(fullWidth && "w-full")}>
      <div className="opacity-0">{children}</div>
    </Skeleton>
  );
};

export default SkeletonWrapper;
