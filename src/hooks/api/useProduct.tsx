import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/types";
import { axiosPublic } from "@/lib/axios";

function useProduct(id: string) {
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      axiosPublic.get<unknown, { data: ProductType }>(`/product/${+id}`),
    staleTime: 10 * 60 * 1000,
  });

  return { product, isLoading };
}

export default useProduct;
