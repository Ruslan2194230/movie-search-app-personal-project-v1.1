import React, { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useError } from "../../contexts/ErrorContext";
import { MovieList } from "components/MovieList/MovieList";
import { PageNavButtonsWrapper } from "components/Buttons/PageNavButtons/PageNavButtonsWrapper";
import { Form } from "./MoviesForm/MoviesForm";
import { useGetMovieByQueryQuery } from "store/movies/getMoviesRTK";
import { Loader } from "components/Loader/Loader";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleMinorError, handleWarning } = useError();
  const currentPage = searchParams.get("page") || "1";
  const currentQuery = searchParams.get("query");

  const { data, error, isFetching } = useGetMovieByQueryQuery(
    { query: currentQuery, page: currentPage },
    { skip: !currentQuery }
  );

  const results = data?.results ?? [];
  const total_pages = data?.total_pages ?? 0;
  const total_results = data?.total_results ?? 0;

  useEffect(() => {
    if (error) {
      handleMinorError("Failed to fetch movies. Please try again.");
    } else if (currentQuery && total_results === 0) {
      handleWarning("Фильм не найден, пожалуйста введите другое название");
    }
  }, [error, currentQuery, total_results, handleMinorError, handleWarning]);

  const handlePageChange = useCallback(
    (newPage) => {
      setSearchParams((prevParams) => ({
        ...Object.fromEntries(prevParams),
        page: newPage.toString(),
      }));
    },
    [setSearchParams]
  );

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      {isFetching && <Loader />}
      {results.length > 0 && <MovieList movies={results} />}
      {results.length > 0 && (
        <PageNavButtonsWrapper
          movies={results}
          page={Number(currentPage) || 1}
          totalPages={total_pages}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Movies;
