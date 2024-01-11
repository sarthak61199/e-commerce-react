import { useMutation } from "@tanstack/react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUser from "./useUser";
import useCompleteOrder from "./useCompleteOrder";

function useOrderCreate() {
  const axiosPrivate = useAxiosPrivate();
  const { data: user } = useUser();
  const { mutate: completeOrder } = useCompleteOrder();

  const { isPending, mutate } = useMutation({
    mutationKey: ["order"],
    mutationFn: ({
      address,
      state,
      city,
      pinCode,
    }: {
      address: string;
      state: string;
      city: string;
      pinCode: string;
    }) =>
      axiosPrivate.post("/order", {
        address,
        state,
        city,
        pinCode,
      }),
    onSuccess: ({ data }) => {
      const options = {
        key: "rzp_test_oRF4BzFbny5zds",
        amount: data.amount,
        currency: "INR",
        name: "Phone World",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data.id,
        // @ts-expect-error it does exist
        handler: function (response) {
          completeOrder({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          });
        },
        prefill: {
          name: user?.data.firstName + " " + user?.data.lastName,
          email: user?.data.email,
          contact: user?.data.phoneNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // @ts-expect-error it does exist
      const rzp1 = new window.Razorpay(options);
      // @ts-expect-error it does exist
      rzp1.on("payment.failed", function (response) {
        console.log(response);
      });
      rzp1.open();
    },
  });

  return { isPending, mutate };
}

export default useOrderCreate;
