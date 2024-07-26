import React, { useEffect, useState } from "react";
import { MovieList } from "components/MovieList/MovieList";
import { getMovieById } from "services/getMovies";

import { removeFromFavorites } from "store/favorites/favoritesSlice";
import { useSelectFavoriteMovies } from "store/favorites/favoritesSelectors";

const Favorites = () => {
  const favoriteMovieIds = useSelectFavoriteMovies();

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const moviePromises = favoriteMovieIds.map((id) => getMovieById(id));
      const movies = await Promise.all(moviePromises);
      setFavoriteMovies(movies);
    };

    fetchFavoriteMovies();
  }, [favoriteMovieIds]);

  const handleRemoveFavorite = (movieId) => {
    removeFromFavorites(movieId);
    setFavoriteMovies((prevFavoriteMovies) =>
      prevFavoriteMovies.filter(
        (prevFavoriteMovieId) => prevFavoriteMovieId !== movieId
      )
    );
  };

  return (
    <MovieList
      movies={favoriteMovies}
      onRemoveFavorite={handleRemoveFavorite}
    />
  );
};

export default Favorites;
