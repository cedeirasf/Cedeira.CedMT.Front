import { useAuthContext } from "@/hooks/context/useAuth";
import { ChevronDown, LogOut, Settings } from "lucide-react";
import { useState } from "react";

interface Props {
  isSidebarOpen?: boolean;
  positionY?: string;
}

export const NavigationAvatar = ({
  isSidebarOpen = true,
  positionY = "bottom-full",
}: Props) => {
  const user = useAuthContext().user!;
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { logout } = useAuthContext();

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
        {isSidebarOpen && (
          <div className="ml-3 flex flex-col items-start">
            <span className="text-sm font-semibold">{user.username}</span>
            <span className="text-xs text-gray-500">{user.username}</span>
          </div>
        )}
        {isSidebarOpen && (
          <ChevronDown
            className={`ml-auto h-4 w-4 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>
      {isProfileOpen && isSidebarOpen && (
        <div
          className={`absolute ${positionY} left-0 mb-2 w-full bg-white rounded-md shadow-lg z-40`}
        >
          <ul className="py-1">
            <li>
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={onSettings}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
            </li>
            <li>
              <button
                onClick={logout}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
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
