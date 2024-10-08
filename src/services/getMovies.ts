import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "3373af60a4ee1fe7510a1a61c11380e1";

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMovieById = async (movieId: number):Promise<Movie> => {
  try {
    const { data } = await axios.get<Movie>(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.error("Error fetching movie by id:", error);
    return Promise.reject(error)
  }
};

export default Movie
// export const getTrendingMovies = async () => {
//   try {
//     const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

//     return data.results;
//   } catch (error) {
//     console.error("Error fetching trending movies:", error);
//   }
// };

// export const getMovieByQuery = async (query, page) => {
//   try {
//     const { data } = await axios.get(
//       `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
//     );

//     return data;
//   } catch (error) {
//     console.error("Error fetching movie by query:", error);
//   }
// };

// export const getCastMovie = async (movieId) => {
//   try {
//     const { data } = await axios.get(
//       `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
//     );

//     return data.cast;
//   } catch (error) {
//     console.error("Error fetching cast movies:", error);
//   }
// };
// export const getReviewsMovie = async (movieId) => {
//   try {
//     const { data } = await axios.get(
//       `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
//     );

//     return data.results;
//   } catch (error) {
//     console.error("Error fetching reviews movie:", error);
//   }
// };
