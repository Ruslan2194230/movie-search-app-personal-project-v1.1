// import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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

type CastProps = {
  id: number;
  profile_path: string;
  original_name: string;
  character: string;
};

export const Cast = () => {
  const Castlocation = useLocation();
  const { movieId } = useParams();
  const { handleSeriousError } = useError();
  const { data, error, isFetching } = useGetCastMovieQuery(movieId);

  const cast = data?.cast ?? [];
  // if (error) {
  //   console.log("error", error);

  //   handleSeriousError(error);
  // }
  if (error) {
    console.log("Error object:", error); // Логируем для отладки

    if ("status" in error) {
      // Обработка FetchBaseQueryError
      handleSeriousError({
        status: error.status as number | string, // Убедитесь, что приводите к правильному типу
        data: error.data || "No data", // Обработка данных ошибки
      });
    } else if ("message" in error) {
      // Обработка SerializedError (который может не иметь status, но имеет message)
      handleSeriousError({
        status: "SerializedError",
        data: error.message, // Передаем сообщение об ошибке
      });
    } else {
      handleSeriousError({
        status: "Unknown",
        data: "Unknown error format",
      });
    }
  }
  return (
    <StyledList>
      {isFetching && <Loader />}
      {cast &&
        cast.map(
          ({ id, profile_path, original_name, character }: CastProps) => (
            <ListItem key={id}>
              <Link state={{ from: Castlocation }} to={`/person/${id}`}>
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
              </Link>
            </ListItem>
          )
        )}
    </StyledList>
  );
};
