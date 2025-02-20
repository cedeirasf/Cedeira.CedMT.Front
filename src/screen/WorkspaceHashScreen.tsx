import { WorkspaceGrid } from "@/components/workspace/WorkspaceGrid";
import { WorkspaceSummary } from "@/components/workspace/WorkspaceSummary";

export const WorkspaceHashScreen = () => {
  return (
    <div className="flex flex-col h-[800px] ">
      <WorkspaceSummary />
      <WorkspaceGrid />
    </div>
  );
};
