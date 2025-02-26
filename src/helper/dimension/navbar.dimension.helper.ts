import { cn } from "@/lib/utils";

export const displaySidebarLabels = ({
  isMobileSidebarOpen,
  isSidebarOpen,
}: {
  isMobileSidebarOpen: boolean;
  isSidebarOpen: boolean;
}) => {
  return isMobileSidebarOpen
    ? cn("flex lg:hidden", isSidebarOpen && "lg:flex")
    : isSidebarOpen
      ? "hidden lg:flex"
      : "hidden";
};
