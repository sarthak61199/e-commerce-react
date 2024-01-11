import useProductList from "@/hooks/api/useProductList";
import ProductItem from "./ProductItem";
import { ChevronRightCircle, ChevronLeftCircle, Loader2 } from "lucide-react";

function ProductList() {
  const { products, isLoading } = useProductList();

  if (isLoading) {
    return (
      <div className="mt-20 flex-grow grid place-items-center">
        <Loader2 size={64} className="animate-spin text-yellow-400" />
      </div>
    );
  }

  return (
    <>
      <div className="mt-20 grid grid-cols-4 gap-8">
        {products?.data.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      <div className="mt-10 flex justify-between px-4">
        <ChevronLeftCircle size={30} className="cursor-pointer" />
        <ChevronRightCircle size={30} className="cursor-pointer" />
      </div>
    </>
  );
}

export default ProductList;
