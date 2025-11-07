import { useQuery } from "@tanstack/react-query";
import { getUsers, type User } from "@/lib/api";

export function useEmployees() {
  return useQuery<User[], Error>({
    queryKey: ["employees"],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 30,
  });
}
