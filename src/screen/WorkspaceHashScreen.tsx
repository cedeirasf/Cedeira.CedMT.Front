import { WorkspaceExpandToggle } from "@/components/workspace/overview/WorkspaceExpandToggle";
import { WorkspaceOverview } from "@/components/workspace/overview/WorkspaceOverview";
import { WorkspaceGrid } from "@/components/workspace/WorkspaceGrid";
import { useState } from "react";

export const WorkspaceHashScreen = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="relative grid grid-rows-[auto_1fr] gap-4 p-4">
      <WorkspaceExpandToggle expanded={expanded} setExpanded={setExpanded} />
      <div className="overflow-x-auto min-w-0">
        <WorkspaceOverview expanded={expanded} />
      </div>
      <div className="overflow-x-auto min-w-0">
        <WorkspaceGrid />
      </div>
    </div>
  );
};
