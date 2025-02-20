import { useWorkspaceGridSignal } from "@/hooks/signalR/useWorkspaceGridSignal";

export const WorkspaceGrid = () => {
  const { records } = useWorkspaceGridSignal();

  return (
    <div className="flex-grow flex-1  bg-blue-300">
      <h1>Registros de la Grilla</h1>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
};
