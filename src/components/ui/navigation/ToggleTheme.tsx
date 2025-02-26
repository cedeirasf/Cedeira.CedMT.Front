import { useUiContext } from "@/hooks/context/useUi";
import { Moon, Sun } from "lucide-react";
import { Button } from "mtch-ui";

interface Props {
  displayText?: boolean;
}

export const ToggleTheme = ({ displayText = false }: Props) => {
  const { changeTheme } = useUiContext();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-full flex justify-start bg-transparent m-0 h-50 gap-2 text-background-foreground hover:text-accent-foreground"
      onClick={changeTheme}
    >
      <Moon className="size-4  dark:hidden" />
      <Sun className="size-4 hidden dark:block" />
      {displayText && (
        <>
          {document.documentElement.classList.contains("dark")
            ? "Light Mode"
            : "Dark Mode"}
        </>
      )}
    </Button>
  );
};
