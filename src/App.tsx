import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { queryClient } from "./lib/queryClient";
import { useAuthContext } from "./hooks/context/useAuth";
import { router } from "./lib/router";
import { useUiContext } from "./hooks/context/useUi";
import { UiProvider } from "./context/providers/UiProvider";
import { AuthProvider } from "./context/providers/AuthProvider";
import { Toaster } from "sonner";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UiProvider>
        <AuthProvider>
          <Toaster richColors position="bottom-right" />
          <InnerApp />
        </AuthProvider>
      </UiProvider>
    </QueryClientProvider>
  );
}

function InnerApp() {
  const auth = useAuthContext();
  const ui = useUiContext();

  return (
    <RouterProvider
      router={router}
      scrollRestoration
      context={{
        auth,
        ui,
      }}
    />
  );
}

export default App;
