import { useParams } from "react-router-dom";
import {
  ReviewsListItem,
  ReviewsStyledList,
  ReviewsDescription,
  ReviewsListText,
  ReviewsListSpan,
} from "./MovieDetailsReviews.styled";
import { useGetReviewsMovieQuery } from "store/movies/getMoviesRTK";
import { useError } from "contexts/ErrorContext";

type ReviewsListItemProps = { id: number; author: string; content: string };

export const Reviews = () => {
  const { handleSeriousError } = useError();

  const { movieId } = useParams();
  const { data, error } = useGetReviewsMovieQuery(movieId);
  const reviews = data?.reviews ?? [];
  console.log("reviews", reviews);

  if (error) {
    // console.log("Error object:", error);

    if ("status" in error) {
      handleSeriousError({
        status: error.status as number | string,
        data: error.data || "No data",
      });
    } else if ("message" in error) {
      // Обработка SerializedError (который может не иметь status, но имеет message)
      handleSeriousError({
        status: "SerializedError",
        data: error.message,
      });
    } else {
      handleSeriousError({
        status: "Unknown",
        data: "Unknown error format",
      });
    }
  }
  return reviews.length === 0 ? (
    <h3>There are no reviews yet!</h3>
  ) : (
    <ReviewsStyledList>
      {/* {console.log(reviews)} */}
      {reviews.map(({ id, author, content }: ReviewsListItemProps) => (
        <ReviewsListItem key={id}>
          <ReviewsListText>
            <ReviewsListSpan>Author:</ReviewsListSpan> {author}
          </ReviewsListText>
          <ReviewsDescription>{content}</ReviewsDescription>
        </ReviewsListItem>
      ))}
    </ReviewsStyledList>
  );
};
