import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useProduct from "@/hooks/api/useProduct";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import useAddToCart from "@/hooks/api/useAddToCart";
import Review from "@/components/review/Review";
import { formatCurrency } from "@/lib/utils";

function Product() {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading } = useProduct(id!);
  const { mutate } = useAddToCart();
  const { auth } = useAuth();

  if (isLoading) {
    return (
      <main className="flex-grow grid place-items-center">
        <Loader2 size={64} className="animate-spin text-yellow-400" />
      </main>
    );
  }

  return (
    <main className="flex-grow">
      <div className="flex gap-20">
        <div className="flex-1 bg-stone-400/10 rounded-lg flex items-center justify-center">
          <img
            src={product?.data?.imgUrl}
            alt="photo"
            className="aspect-auto h-[500px]"
          />
        </div>
        <div className="flex-1 pt-10">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">{product?.data?.name}</h2>
            <p className="text-3xl">
              {formatCurrency(Number(product?.data?.price))}
            </p>
            {auth?.accessToken ? (
              <Button
                size="lg"
                className="flex gap-2 text-xl px-20 py-8"
                onClick={() =>
                  mutate({
                    productId: id as string,
                  })
                }
              >
                Add to Cart
              </Button>
            ) : (
              <p>Please login to add this product to Cart</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Tabs defaultValue="details">
          <TabsList className="bg-transparent mb-10">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            {product?.data?.description}
          </TabsContent>
          <TabsContent value="reviews" className="flex gap-20">
            <Review productId={id!} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default Product;
