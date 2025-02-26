import { cn } from "@/lib/utils";
import { Grid, LayoutGrid } from "lucide-react";

interface Props {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export const WorkspaceExpandToggle = ({ expanded, setExpanded }: Props) => {
  return (
    <div className="absolute -top-8 lg:-top-4 right-4 flex gap-2 rounded-[10px] bg-card p-0.5 px-1.5">
      <button
        onClick={() => setExpanded(true)}
        className={cn(
          "p-1 rounded-[5px]",
          expanded
            ? "bg-accent text-accent-foreground"
            : "text-background-foreground"
        )}
      >
        <Grid className="size-4" />
        <span className="sr-only">Mostrar todas las secciones</span>
      </button>
      <button
        onClick={() => setExpanded(false)}
        className={cn(
          "p-1 rounded-[5px]",
          !expanded
            ? "bg-accent text-accent-foreground"
            : "text-background-foreground"
        )}
      >
        <LayoutGrid className="size-4" />
        <span className="sr-only">Mostrar menos secciones</span>
      </button>
    </div>
  );
};
