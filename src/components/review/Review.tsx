import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import ReviewList from "@/components/review/ReviewList";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import Rating from "@/components/Rating";
import useReview from "@/hooks/api/useReview";
import { Loader2 } from "lucide-react";

function Review({ productId }: { productId: string }) {
  const { auth } = useAuth();
  const { review, isLoading } = useReview(productId);

  if (isLoading) {
    return (
      <div className="h-52 grid place-items-center w-full">
        <Loader2 size={64} className="animate-spin text-yellow-400" />
      </div>
    );
  }

  return (
    <>
      <div className="flex-[5]">
        {auth?.accessToken && review?.data?.hasUserBoughtProduct && (
          <>
            <Textarea
              className="w-[600px] resize-none"
              placeholder="Enter your review"
            />
            <Button className="mt-4">Submit</Button>
          </>
        )}
        <ReviewList productId={productId} />
      </div>
      <div className="flex-[2]">
        <div className="flex justify-between items-center pb-10">
          <Rating
            value={review?.data?.productRating}
            style={{ maxWidth: 250 }}
            readOnly
          />
          <span className="text-3xl font-bold">
            {review?.data?.productRating}
          </span>
        </div>
        <Separator />
        <div className="pt-10 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="text-stone-400">5</span>
            <Progress value={50} />
            <span className="font-bold">20</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">5</span>
            <Progress value={50} />
            <span className="font-bold">20</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">5</span>
            <Progress value={50} />
            <span className="font-bold">20</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">5</span>
            <Progress value={50} />
            <span className="font-bold">20</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">5</span>
            <Progress value={50} />
            <span className="font-bold">20</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
