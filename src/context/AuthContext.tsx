import type { AuthContextType } from "@/types/context/user.context.types";
import { createContext } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);
