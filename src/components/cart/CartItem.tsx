import { Link } from "react-router-dom";
import { PlusCircle, MinusCircle, XCircle } from "lucide-react";
import { ProductType } from "@/types";
import useAddToCart from "@/hooks/api/useAddToCart";
import useRemoveFromCart from "@/hooks/api/useRemoveFromCart";
import { formatCurrency } from "@/lib/utils";

function CartItem({
  product,
  quantity,
}: {
  product: ProductType;
  quantity: number;
}) {
  const { mutate: addToCart } = useAddToCart();
  const { mutate: removeFromCart } = useRemoveFromCart();

  return (
    <div className="flex items-center justify-between">
      <Link to={`/product/${product.id}`} className="flex items-center gap-8">
        <div className="bg-stone-400/10 p-4 rounded-lg">
          <img src={product.imgUrl} alt="photo" className="h-28 aspect-auto" />
        </div>
        <div>
          <p className="text-lg mb-1">{product.name}</p>
          <p className="text-2xl font-bold">{formatCurrency(+product.price)}</p>
        </div>
      </Link>

      <div className="flex gap-3 items-center">
        <PlusCircle
          className="cursor-pointer"
          onClick={() => addToCart({ productId: product.id.toString() })}
        />
        <span className="text-lg">{quantity}</span>
        <MinusCircle
          className="cursor-pointer"
          onClick={() => removeFromCart({ productId: product.id.toString() })}
        />
      </div>
      <XCircle className="text-red-600 cursor-pointer" />
    </div>
  );
}

export default CartItem;
