import { formatCurrency } from "@/lib/utils";
import { Link } from "react-router-dom";

function ProductItem({
  id,
  name,
  price,
  imgUrl,
}: {
  id: number;
  name: string;
  price: string;
  imgUrl: string;
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="bg-stone-400/10 p-10 rounded-lg">
        <img src={imgUrl} alt="photo" className="h-60 aspect-auto mb-6" />
        <p className="text-lg mb-1">{name}</p>
        <p className="text-2xl font-bold">{formatCurrency(+price)}</p>
      </div>
    </Link>
  );
}

export default ProductItem;
