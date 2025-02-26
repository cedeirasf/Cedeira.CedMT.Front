import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import { Building2 } from "lucide-react";

interface Props {
  classNameSidebarLabels?: string;
}

export const SidebarActiveEntity = ({ classNameSidebarLabels }: Props) => {
  const { entity } = useParams({
    strict: false,
  });

  return (
    <Link
      to="/dashboard/$entity"
      params={{ entity: entity as string }}
      className="flex items-end rounded-md px-4 py-2 text-sm transition-colors mb-6 gap-3 hover:text-accent-foreground font-bold"
      activeOptions={{ exact: true }}
      activeProps={{
        className: "text-accent-foreground ",
      }}
    >
      <Building2 className="size-5 shrink-0" />
      <span className={cn("text-[15px]", classNameSidebarLabels)}>
        {entity}
      </span>
    </Link>
  );
};
