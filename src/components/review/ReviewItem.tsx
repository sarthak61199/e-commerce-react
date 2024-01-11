import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "../Rating";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function ReviewItem({
  rating,
  description,
  user,
  createdAt,
}: {
  createdAt: string;
  rating: number;
  description: string;
  user: {
    firstName: string;
    lastName: string;
    imgUrl: string;
  };
}) {
  return (
    <>
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src={user?.imgUrl} />
          <AvatarFallback>
            {(user?.firstName[0] || "") + (user?.lastName[0] || "")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="space-x-3">
            <span>{`${user?.firstName} ${user?.lastName}`}</span>
            <span className="text-stone-400/80 text-sm">
              {dayjs(createdAt).fromNow()}
            </span>
          </div>
          <Rating
            value={rating}
            readOnly
            style={{ maxWidth: 100 }}
            className="mt-1 mb-4"
          />
          <p className="font-bold">{description}</p>
        </div>
      </div>
      <Separator />
    </>
  );
}

export default ReviewItem;
