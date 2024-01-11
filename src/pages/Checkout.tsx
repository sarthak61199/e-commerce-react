/* eslint-disable react-hooks/exhaustive-deps */
import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingAddress from "@/components/checkout/ShippingAddress";
import useCart from "@/hooks/api/useCart";
import useOrderCreate from "@/hooks/api/useOrderCreate";
import useUser from "@/hooks/api/useUser";
import { checkoutSchema } from "@/schema";
import { CheckoutType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { mutate } = useOrderCreate();
  const { data } = useUser();
  const { cart } = useCart();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
      state: "",
      city: "",
      pinCode: "",
    },
    resolver: zodResolver(checkoutSchema),
  });

  useEffect(() => {
    form.setValue("firstName", data?.data?.firstName || "");
    form.setValue("lastName", data?.data?.lastName || "");
    form.setValue("phoneNumber", data?.data?.phoneNumber || "");
    form.setValue("email", data?.data?.email || "");
    form.setValue("address", data?.data?.address || "");
    form.setValue("state", data?.data?.state || "");
    form.setValue("city", data?.data?.city || "");
    form.setValue("pinCode", data?.data?.pinCode || "");
  }, [data]);

  useEffect(() => {
    if (cart?.data?.cart?.products?.length === 0) {
      navigate("/", { replace: true });
      return;
    }
  }, []);

  const onSubmit = (values: CheckoutType) => {
    mutate({
      address: values.address,
      state: values.state,
      city: values.city,
      pinCode: values.pinCode,
    });
  };

  return (
    <main className="flex flex-col flex-grow">
      <h2 className="text-7xl font-bold  text-center leading-[1.5]">
        Checkout
      </h2>
      <div className="flex gap-20">
        <div className="flex-1">
          <ShippingAddress form={form} onSubmit={onSubmit} />
        </div>
        <div className="flex-1">
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}

export default Checkout;
