import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { queryClient } from "./lib/queryClient";
import { AuthProvider, useAuthContext } from "./hooks/context/useAuth";
import { router } from "./lib/router";
import { UiProvider, useUiContext } from "./hooks/context/useUi";

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
