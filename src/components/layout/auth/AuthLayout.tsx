import { Outlet } from "@tanstack/react-router";

export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-[400px] flex-col bg-secondary p-8 ">
        <div className="mb-12 pl-2">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold">BIENVENIDOS A</h1>
            <h2 className="text-xl font-semibold">MATCING TOOL</h2>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
