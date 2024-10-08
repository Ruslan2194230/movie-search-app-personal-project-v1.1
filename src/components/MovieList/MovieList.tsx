import { useLocation } from "react-router-dom";
import { MovieListUl } from "./MovieList.module";
import { MovieItem } from "./MovieItem/MovieItem";


interface MoviesInterface {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids?: number[]; // ID жанров
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type MovieListProps = {
  movies: MoviesInterface[];
};

export const MovieList = ({ movies }: MovieListProps) => {
  const location = useLocation();

  return (
    <MovieListUl>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          location={location}
          // onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </MovieListUl>
  );
};
