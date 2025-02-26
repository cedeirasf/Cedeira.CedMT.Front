import { useAuthContext } from "@/hooks/context/useAuth";
import { useUiContext } from "@/hooks/context/useUi";
import { cn } from "@/lib/utils";
import { ChevronDown, LogOut, Moon, Settings, Sun } from "lucide-react";
import { useState } from "react";

interface Props {
  isSidebarOpen?: boolean;
  classNameSidebarLabels?: string;
  positionY?: string;
}

export const NavigationAvatar = ({
  isSidebarOpen = true,
  classNameSidebarLabels,
  positionY = "bottom-full",
}: Props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { user, logout } = useAuthContext();
  const { changeTheme } = useUiContext();

  const onSettings = () => {};

  return (
    <div className="relative">
      <button
        className="flex items-center w-full"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <img
          src="https://github.com/shadcn.png"
          alt="User"
          className="h-8 w-8 rounded-full"
        />
        <div
          className={cn(
            "flex w-full flex-row items-center justify-between",
            classNameSidebarLabels
          )}
        >
          <div className="ml-3 flex flex-col items-start">
            <span className="text-sm font-semibold">{user!.username}</span>
            <span className="text-xs text-gray-500">{user!.username}</span>
          </div>
          <ChevronDown
            className={`ml-auto h-4 w-4 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {isProfileOpen && isSidebarOpen && (
        <div
          className={`absolute ${positionY} left-0 mb-2 w-full bg-card border rounded-md border-background shadow-lg z-40`}
        >
          <ul className="py-1">
            <li>
              <button
                className="flex items-center w-full px-4 py-2 text-sm hover:bg-primary"
                onClick={onSettings}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
            </li>
            <li>
              <button
                className="flex items-center w-full px-4 py-2 text-sm hover:bg-primary"
                onClick={changeTheme}
              >
                <Moon className="h-4 w-4 mr-2 dark:hidden" />
                <Sun className="h-4 w-4 mr-2 hidden dark:block" />
                {document.documentElement.classList.contains("dark")
                  ? "Light Mode"
                  : "Dark Mode"}
              </button>
            </li>
            <li>
              <button
                onClick={logout}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-primary"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
