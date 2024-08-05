import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { useGetTrendingMoviesQuery } from "store/movies/getMoviesRTK";

const Home = () => {
  const { data, isFetching } = useGetTrendingMoviesQuery();

  return (
    <>
      <h1>Trending today</h1>
      {isFetching && <Loader />}
      {data && <MovieList movies={data.results} />}
    </>
  );
};

export default Home;
