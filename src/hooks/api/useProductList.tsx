import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/types";
import { axiosPublic } from "@/lib/axios";

function useProductList() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axiosPublic.get<unknown, { data: ProductType[] }>(`/product`),
    staleTime: 10 * 60 * 1000,
  });

  return { products, isLoading };
}

export default useProductList;
