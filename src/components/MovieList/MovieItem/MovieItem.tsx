import React from "react";
import { Link } from "react-router-dom";
import {
  MovieItemLi,
  MovieListimg,
  MovieTitle,
  MovieImgContainer,
} from "./MovieItem.styled";
import { BASE_POSTER_URL, PLACEHOLDER } from "utils/constants";
import { ButtonAddToFavorite } from "components/Buttons/ButtonAddToFavorite/ButtonAddToFavorite";

type MovieItemProps = {
  movie: any;
  location: any;
};
export const MovieItem = ({ movie, location }: MovieItemProps) => {
  const { id, original_title, poster_path } = movie;

  return (
    // console.log("Консоль активна in movie item"),
    // console.log("movie", movie),
    <MovieItemLi key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <MovieImgContainer>
          <MovieListimg
            src={
              poster_path
                ? BASE_POSTER_URL + poster_path
                : PLACEHOLDER + "?text=" + original_title
            }
            alt={original_title}
          />
          <ButtonAddToFavorite id={id} />
        </MovieImgContainer>
      </Link>
      <MovieTitle>{original_title}</MovieTitle>
    </MovieItemLi>
  );
};
