import { useWorkspaceSummarySignal } from "@/hooks/signalR/useWorkspaceSummarySignal";

export const WorkspaceSummary = () => {
  const { summary } = useWorkspaceSummarySignal();
  return (
    <div className="h-[400px] bg-red-300">
      <h1>Resumen de la Grilla</h1>
      {summary && (
        <div>
          <p>Total de registros: {summary.totalRecords}</p>
          <p>Última actualización: {summary.lastUpdated}</p>
          <p>Longitud promedio: {summary.averageLength}</p>
        </div>
      )}
    </div>
  );
};
