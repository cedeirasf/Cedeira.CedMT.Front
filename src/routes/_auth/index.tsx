import { useAuthContext } from "@/hooks/context/useAuth";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "mtch-ui";

export const Route = createFileRoute("/_auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { login } = useAuthContext();
  return (
    <div className="h-screen flex items-center justify-center">
      <Button
        onClick={() =>
          login({
            username: "user@test",
          })
        }
      >
        Hola
      </Button>
    </div>
  );
}
