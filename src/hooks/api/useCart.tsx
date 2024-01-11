import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

function useCart() {
  const axiosPrivate = useAxiosPrivate();

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => axiosPrivate.get(`/cart`),
    staleTime: 10 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return { cart, isLoading };
}

export default useCart;
