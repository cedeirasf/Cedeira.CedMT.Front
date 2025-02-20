import type { ILoginResponse } from "@/types/response/auth.response.types";
import type { ILoginRequest } from "@/types/request/auth.request.types";
import api from "@/lib/axios.lib";

const login = async (req: ILoginRequest): Promise<ILoginResponse> => {
  const { data } = await api.post("auth/login", req);
  return data;
};

const getCurrentUser = async (): Promise<ILoginResponse> => {
  const { data } = await api.post("auth/refresh");
  return data;
};

export const authApi = {
  login,
  getCurrentUser,
};
