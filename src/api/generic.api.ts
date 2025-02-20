// import type { IPaginatedResponse } from "@/types/response/grid.response.types";
// import type { SelectOptionResponse } from "@/types/response/index.response.types";
// import { adaptPaginatedResponseToGrid } from "@/helper/adapter/grid.adapter";
// import { adaptSelectOptionResponseToDto } from "@/helper/adapter/index.adapter";
// import { queryClient } from "@/lib/queryClient";
// import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios.lib";

// const getGrid = async <T>(
//   endpoint: string,
//   q: string
// ): Promise<IPaginatedResponse<T>> => {
//   const { data } = await api.get(`${endpoint}${q}`);
//   return data;
// };

// const getAll = async (endpoint: string): Promise<SelectOptionResponse[]> => {
//   const { data } = await api.get(endpoint);
//   return data.data;
// };

const getById = async <T>(endpoint: string, id: string): Promise<T> => {
  const { data } = await api.get(`${endpoint}/${id}`);
  return data;
};

const createApiClient = (endpoint: string) => {
  //   const queryClientGetGrid = async <T>(searchStr: string) => {
  //     const response = await queryClient.ensureQueryData({
  //       queryKey: [endpoint, searchStr],
  //       queryFn: () => getGrid<T>(endpoint, searchStr),
  //     });
  //     return adaptPaginatedResponseToGrid(response);
  //   };

  //   const queryClientGetById = async <T, R = T>(
  //     id: string,
  //     adapter?: (response: T) => R
  //   ): Promise<R> => {
  //     const response = await queryClient.ensureQueryData({
  //       queryKey: [`${endpoint}-id`, id],
  //       queryFn: () => getById<T>(endpoint, id),
  //     });

  //     if (adapter) return adapter(response);

  //     return response as unknown as R;
  //   };

  // const useQueryClientGetAll = () => {
  //   return useQuery({
  //     queryKey: [endpoint],
  //     queryFn: () => getAll(endpoint),
  //     select: (data) => adaptSelectOptionResponseToDto(data),
  //   });
  // };

  return {
    getById,
    // queryClient: {
    //   getGrid: queryClientGetGrid,
    //   getById: queryClientGetById,
    // },
    // useQuery: {
    //   getAll: useQueryClientGetAll,
    // },
  };
};

export const genericApi = {
  createApiClient,
};
