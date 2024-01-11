import useCart from "@/hooks/api/useCart";
import { formatCurrency } from "@/lib/utils";
import { ProductType } from "@/types";

function OrderSummary() {
  const { cart } = useCart();

  const totalAmount = cart?.data.cart.products.reduce(
    (acc: number, item: { product: ProductType; quantity: number }) => {
      return +item.product.price * item.quantity + acc;
    },
    0
  );

  return (
    <div>
      <p className="mt-4 text-xl font-semibold mb-10">Order Summary</p>
      {cart?.data.cart.products.map(
        ({ product, quantity }: { product: ProductType; quantity: number }) => (
          <div className="flex items-center gap-8" key={product.id}>
            <div className="bg-stone-400/10 p-4 rounded-lg">
              <img
                src={product.imgUrl}
                alt="photo"
                className="h-28 aspect-auto"
              />
            </div>
            <div>
              <p className="text-lg mb-1">{product.name}</p>
              <p className="text-2xl font-bold">
                {formatCurrency(+product.price)}
              </p>
            </div>

            <span className="text-lg">x{quantity}</span>
          </div>
        )
      )}
      <div className="mt-10">
        <span className="text-xl">
          Total:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </span>
      </div>
    </div>
  );
}

export default OrderSummary;
