import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { UserType } from "@/types";

function useUser() {
  const axiosPrivate = useAxiosPrivate();

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => axiosPrivate.get<unknown, { data: UserType }>("/user"),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return { data, isLoading };
}

export default useUser;
