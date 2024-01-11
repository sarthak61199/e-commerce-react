import {
  Rating as RatingComponent,
  Star,
  type RatingProps,
} from "@smastrom/react-rating";

function Rating(props: RatingProps) {
  return (
    <RatingComponent
      itemStyles={{
        itemShapes: Star,
        activeFillColor: "#facc15",
        inactiveFillColor: "rgb(168 ,162 ,158 ,0.2)",
      }}
      {...props}
    />
  );
}

export default Rating;
