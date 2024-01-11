import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUser from "./useUser";

function useRemoveFromCart() {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { data } = useUser();

  const { isPending, mutate } = useMutation({
    mutationKey: ["cart"],
    mutationFn: ({ productId }: { productId: string }) =>
      axiosPrivate.delete("/cart", {
        data: {
          cartId: Number(data?.data?.cartId),
          productId: +productId,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return { isPending, mutate };
}

export default useRemoveFromCart;
