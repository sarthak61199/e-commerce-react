import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { UserType } from "@/types";
import useAuth from "../useAuth";

function useUser() {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => axiosPrivate.get<unknown, { data: UserType }>("/user"),
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!auth?.accessToken,
  });

  return { data, isLoading };
}

export default useUser;
