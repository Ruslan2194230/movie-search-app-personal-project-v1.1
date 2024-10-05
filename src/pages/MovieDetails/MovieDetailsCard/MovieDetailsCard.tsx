import { DetailsCardImage } from "components/DetailsCardImage/DetailsCardImage";
// import { FilmImage } from "../MovieDetailsImage/MovieDetailsImage";
import {
  FilmWrapper,
  FilmTitle,
  FilmDescr,
  FilmSubTitle,
  StyledListDescr,
} from "./MovieDetailsCard.module";

interface MovieDetailsCardProps {
  movie: {
    id: number;
    original_title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    genres: {
      id: number;
      name: string;
    }[];
    release_date: string;
    runtime: number;
    tagline: string;
  };
}

export const MovieDetailsCard = ({ movie }: MovieDetailsCardProps) => {
  return (
    <FilmWrapper>
      {/* <FilmImage movie={movie} /> */}
      <DetailsCardImage
        imageDataKey={movie.poster_path}
        imagePlaceholderkey={movie.original_title}
      />

      <div>
        <FilmTitle>{movie.original_title}</FilmTitle>
        <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
        <FilmSubTitle>Overview</FilmSubTitle>
        <FilmDescr>{movie.overview}</FilmDescr>
        <FilmSubTitle>Genres</FilmSubTitle>
        <StyledListDescr>
          {movie.genres?.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </StyledListDescr>
      </div>
    </FilmWrapper>
  );
};
