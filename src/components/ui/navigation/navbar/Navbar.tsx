import { NavAvatar } from "../sidebar/NavAvatar";
import { ToggleTheme } from "../ToggleTheme";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex h-14 items-center px-4 md:px-4">
        <div className="mr-4 flex items-center">
          <span className="font-semibold">CedMT</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <ToggleTheme />
          <div className="flex items-center gap-2 min-w-[180px]">
            <NavAvatar />
          </div>
        </div>
      </div>
    </header>
  );
}
