// import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { MovieDetailsCard } from "./MovieDetailsCard/MovieDetailsCard";
import { AdditionalInfo } from "./MovieDetailsAdditionalInfo/MovieDetailsAdditionalInfo";
import { GoBackLink } from "./MovieDetailsGoBackLink/MovieDetailsGoBackLink";
import { useGetMovieByIdQuery } from "store/movies/getMoviesRTK";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/movies";
  const { data } = useGetMovieByIdQuery(movieId);

  return (
    <>
      <GoBackLink backLinkHref={backLinkHref} />
      {data && <MovieDetailsCard movie={data}></MovieDetailsCard>}

      <AdditionalInfo></AdditionalInfo>
    </>
  );
};

export default MovieDetails;
