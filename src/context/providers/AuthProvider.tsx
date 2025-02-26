import type { ILoginRequest } from "@/types/request/auth.request.types";
import type { ILoginResponse } from "@/types/response/auth.response.types";
import { type ReactNode, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { router } from "@/lib/router";
import { AuthContext } from "../AuthContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [refreshing, setRefreshing] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [user, setUser] = useState<ILoginResponse | null>(null);

  const revalidateUser = async () => {
    try {
      if (localStorage.getItem("token")) {
        // const data = await authApi.getCurrentUser();
        const data = {
          access_token: "X",
          username: "Usuario",
          email: "text@mail.com",
          avatar: "https://github.com/shadcn.png",
        };
        setUser(data);
        setRefreshing(false);
        router.invalidate();
      }
    } catch (_) {
      setUser(null);
    } finally {
      setRefreshing(false);
    }
  };

  const login = async (req: ILoginRequest): Promise<ILoginResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data: ILoginResponse = {
          access_token: "X",
          username: req.username,
          email: "text@mail.com",
          avatar: "https://github.com/shadcn.png",
        };
        setUser(data);
        resolve(data);
        router.invalidate();
      }, 500);
    });
  };

  const loginMutation = useMutation({
    // mutationFn: authApi.login,
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.access_token);
    },
  });

  const onLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    router.invalidate();
  };

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        refreshing,
        isAuthenticated: !!user,
        isLoggingIn: loginMutation.isPending,
        loginError: loginMutation.error,
        login: (req: ILoginRequest) => loginMutation.mutateAsync(req),
        logout: onLogout,
        revalidateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
