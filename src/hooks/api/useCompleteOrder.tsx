import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

function useCompleteOrder() {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["complete-order"],
    mutationFn: ({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    }: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }) =>
      axiosPrivate.post("/order/complete-order", {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      }),
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      navigate("/success", {
        state: {
          order: data,
        },
      });
    },
  });

  return { isPending, mutate };
}

export default useCompleteOrder;
