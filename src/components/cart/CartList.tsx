import useCart from "@/hooks/api/useCart";
import { Separator } from "../ui/separator";
import CartItem from "./CartItem";
import { ProductType } from "@/types";

function CartList() {
  const { cart, isLoading } = useCart();

  return (
    <>
      {!isLoading && cart?.data?.cart?.products?.length === 0 ? (
        <div className="h-full w-full flex justify-center items-center">
          <h3 className="text-center text-2xl font-semibold">
            Your Cart is Empty.
          </h3>
        </div>
      ) : (
        <>
          <Separator />
          <div className="py-8 px-4 flex flex-col gap-8">
            {cart?.data.cart.products.map(
              ({
                product,
                quantity,
              }: {
                product: ProductType;
                quantity: number;
              }) => (
                <CartItem
                  key={product.id}
                  product={product}
                  quantity={quantity}
                />
              )
            )}
          </div>
          <Separator />
        </>
      )}
    </>
  );
}

export default CartList;
