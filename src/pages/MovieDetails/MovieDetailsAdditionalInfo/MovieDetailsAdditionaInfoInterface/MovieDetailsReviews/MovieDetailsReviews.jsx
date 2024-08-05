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

export const Reviews = () => {
  const { handleWarning } = useError();

  const { movieId } = useParams();
  const { data, error } = useGetReviewsMovieQuery(movieId);
  const reviews = data?.reviews ?? [];
  if (error) {
    handleWarning(error);
  }
  return reviews.length === 0 ? (
    <h3>There are no reviews yet!</h3>
  ) : (
    <ReviewsStyledList>
      {reviews.map(({ id, author, content }) => (
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
