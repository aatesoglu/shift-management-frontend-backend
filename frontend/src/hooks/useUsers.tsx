import { useQuery } from "@tanstack/react-query";
import { getUsers, type User } from "@/lib/api";

export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 30,
  });
}