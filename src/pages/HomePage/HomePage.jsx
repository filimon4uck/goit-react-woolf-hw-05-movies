import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const getTrendingMovies = async () => {
      const results = await fetchTrendingMovies();
      setMovies(results);
    };
    try {
      getTrendingMovies();
      setIsLoading(true);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {error && <h3>{'Problem with download'}</h3>}
    </div>
  );
};
export default HomePage;
