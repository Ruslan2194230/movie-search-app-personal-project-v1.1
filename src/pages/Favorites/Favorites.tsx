import React, { useEffect, useState } from "react";
import { MovieList } from "components/MovieList/MovieList";
import Movie, { getMovieById } from "services/getMovies";

// import { removeFromFavorites } from "store/favorites/favoritesSlice";
import { useSelectFavoriteMovies } from "store/favorites/favoritesSelectors";

const Favorites = () => {
  const favoriteMovieIds = useSelectFavoriteMovies();

  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const moviePromises: Promise<Movie>[] = favoriteMovieIds.map(
        (id: number) => getMovieById(id)
      );
      const movies: Movie[] = await Promise.all(moviePromises);
      setFavoriteMovies(movies);
    };

    fetchFavoriteMovies();
  }, [favoriteMovieIds]);

  return (
    <MovieList
      movies={favoriteMovies}
      // onRemoveFavorite={handleRemoveFavorite}
    />
  );
};

export default Favorites;
