import type { AuthContextType } from "@/types/context/user.context.types";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
