import useCart from "@/hooks/api/useCart";
import { Button } from "../ui/button";
import { ProductType } from "@/types";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "@/lib/utils";

function CartSummary() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const totalAmount = cart?.data.cart.products.reduce(
    (acc: number, item: { product: ProductType; quantity: number }) => {
      return +item.product.price * item.quantity + acc;
    },
    0
  );

  return (
    <div className="bg-stone-400/10 p-4 flex flex-col gap-8">
      <p className="text-xl text-center">Cart Summary</p>
      <div className="flex justify-between">
        <span>Total</span>
        <span className="font-bold">{formatCurrency(totalAmount)}</span>
      </div>
      <Button
        className="flex self-center"
        onClick={() => navigate("/checkout")}
        disabled={cart?.data?.cart?.products?.length === 0}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
}

export default CartSummary;
