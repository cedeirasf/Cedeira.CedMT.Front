import { Outlet } from "@tanstack/react-router";

export const HomeLayoutSkeleton = () => {
  return (
    <div className="flex h-screen bg-background">
      <div className="flex justify-end">
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
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};
