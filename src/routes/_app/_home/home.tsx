import { DashboardLayoutSkeleton } from "@/components/layout/dashboard/DashboardLayoutSkeleton";
import { EntityCard } from "@/components/ui/card/EntityCard";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_home/home")({
  pendingComponent: DashboardLayoutSkeleton,
  component: RouteComponent,
  loader: () => [
    {
      title: "Debin Pesos",
      pendientes: 104,
      diferencias: 32,
      ajustados: 5,
      percentage: 73,
      lastUpdate: "hace 3 minutos",
    },
    {
      title: "Interbanking",
      pendientes: 0,
      diferencias: 5,
      ajustados: 5,
      percentage: 95,
      lastUpdate: "hace 5 minutos",
    },
    {
      title: "Debin Dolares",
      pendientes: 104,
      diferencias: 32,
      ajustados: 5,
      percentage: 73,
      lastUpdate: "hace 5 minutos",
    },
    {
      title: "Prisma",
      pendientes: 0,
      diferencias: 10,
      ajustados: 0,
      percentage: 95,
      lastUpdate: "hace 5 minutos",
    },
  ],
});

export function RouteComponent() {
  const data = useLoaderData({ from: Route.id });
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((metric) => (
          <EntityCard key={metric.title} {...metric} />
        ))}
      </div>
    </div>
  );
}
