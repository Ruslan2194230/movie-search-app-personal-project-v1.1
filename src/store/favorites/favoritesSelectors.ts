// import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

export const useSelectFavoriteMovies = () =>
  useSelector((state: any) => state.favoritesStoreReducer.favoriteMoviesid);

export const useIsFavorite = (movieId: number) => {
  const favoriteMovies = useSelectFavoriteMovies();

  return favoriteMovies.includes(movieId);
};
