import type { ILoginRequest } from "@/types/request/auth.request.types";
import type { AuthContextType } from "@/types/context/user.context.types";
import type { ILoginResponse } from "@/types/response/auth.response.types";
import { useMutation } from "@tanstack/react-query";
import { router } from "@/lib/router";
import React, {
  type ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

const Context = createContext<AuthContextType | null>(null);

interface ProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
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
          username: "user@test",
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
    <Context.Provider
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
    </Context.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
