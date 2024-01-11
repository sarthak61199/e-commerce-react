import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

function useReview(productId: string) {
  const axiosPrivate = useAxiosPrivate();

  const { data: review, isLoading } = useQuery({
    queryKey: ["review", productId],
    queryFn: () => axiosPrivate.get(`/review/${productId}`),
    staleTime: 10 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return { review, isLoading };
}

export default useReview;
