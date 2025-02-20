import type { ILoginRequest } from "../request/auth.request.types";
import type { ILoginResponse } from "../response/auth.response.types";

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoggingIn: boolean;
  loginError: Error | null;
  refreshing: boolean;
  user: ILoginResponse | null;
  login: (req: ILoginRequest) => void;
  logout: () => void;
  revalidateUser: () => Promise<void>;
}

export interface UserContext {
  username: string;
}
