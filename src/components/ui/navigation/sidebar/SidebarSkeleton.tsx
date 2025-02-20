import { cn } from "@/lib/utils";

export const SidebarSkeleton = () => {
  return (
    <div className="relative flex">
      <div
        className={cn(
          "flex h-screen flex-col border-r bg-white transition-all duration-300",
          "w-64"
        )}
      >
        <div className="flex h-14 items-center justify-center border-b">
          <div className="h-6 w-20 animate-pulse rounded bg-gray-200"></div>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2"
            >
              <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200"></div>
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
            </div>
          ))}
        </nav>

        <div className="relative mt-auto border-t p-4">
          <div className="flex w-full items-center gap-3">
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
            <div className="overflow-hidden">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
              <div className="mt-1 h-3 w-32 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full border bg-white shadow-sm">
        <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
};
