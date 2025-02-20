import Navbar from "@/components/ui/navigation/navbar/Navbar";
import { Outlet } from "@tanstack/react-router";

export const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="px-8 flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};
