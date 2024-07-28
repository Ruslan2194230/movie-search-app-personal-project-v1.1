// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getCastMovie } from "services/getMovies";
import { BASE_POSTER_URL, PLACEHOLDER } from "utils/constants";
import {
  CastImg,
  CastSpan,
  ListItem,
  StyledList,
} from "./MovieDetailsCast.module";
import { useGetCastMovieQuery } from "store/movies/getMoviesRTK";
import { useError } from "contexts/ErrorContext";
import { Loader } from "components/Loader/Loader";

export const Cast = () => {
  const { movieId } = useParams();
  const { handleWarning } = useError();
  const { data, error, isFetching } = useGetCastMovieQuery(movieId);

  const cast = data?.cast ?? [];
  if (error) {
    handleWarning(error);
  }
  return (
    <StyledList>
      {isFetching && <Loader />}
      {cast &&
        cast.map(({ id, profile_path, original_name, character }) => (
          <ListItem key={id}>
            <CastImg
              src={`${
                profile_path
                  ? BASE_POSTER_URL + profile_path
                  : PLACEHOLDER + "?text=" + original_name
              }`}
              alt={original_name}
            />
            <p>
              <CastSpan> Actor:</CastSpan> {original_name}
            </p>
            <p>
              <CastSpan>Character:</CastSpan> {character}
            </p>
          </ListItem>
        ))}
    </StyledList>
  );
};
