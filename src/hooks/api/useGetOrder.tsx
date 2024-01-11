import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

function useGetOrder(id: string) {
  const axiosPrivate = useAxiosPrivate();
  const { data: order, isLoading } = useQuery({
    queryKey: ["order", id],
    queryFn: () => axiosPrivate.get(`/order/${+id}`),
    staleTime: 0,
    gcTime: 0,
    enabled: !!id,
  });

  return { order, isLoading };
}

export default useGetOrder;
