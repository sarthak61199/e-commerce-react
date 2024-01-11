import useReview from "@/hooks/api/useReview";
import ReviewItem from "./ReviewItem";

function ReviewList({ productId }: { productId: string }) {
  const { review } = useReview(productId);

  return (
    <div className="mt-14 flex flex-col gap-10">
      {review?.data.reviews.map(
        (review: {
          id: number;
          rating: number;
          description: string;
          createdAt: string;
          user: { firstName: string; lastName: string; imgUrl: string };
        }) => (
          <ReviewItem
            key={review.id}
            rating={review.rating}
            description={review.description}
            createdAt={review.createdAt}
            user={review.user}
          />
        )
      )}
    </div>
  );
}

export default ReviewList;
