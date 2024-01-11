import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
import useCart from "@/hooks/api/useCart";
import { Loader2 } from "lucide-react";

function Cart() {
  const { isLoading } = useCart();

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-320px)] grid place-items-center">
        <Loader2 size={64} className="animate-spin text-yellow-400" />
      </div>
    );
  }

  return (
    <main className="flex-grow flex flex-col">
      <h2 className="text-7xl font-bold  text-center leading-[1.5]">Cart</h2>
      <div className="flex mt-20 gap-20">
        <div className="flex-[3]">
          <CartList />
        </div>
        <div className="flex-[1]">
          <CartSummary />
        </div>
      </div>
    </main>
  );
}

export default Cart;
