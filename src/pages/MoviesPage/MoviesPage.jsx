import SearchForm from 'components/SeachForm/SearchForm';
import './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSeachMovie } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEmptylist, setIsEmptyList] = useState(movies.length > 0);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const searchMovie = async () => {
      const movies = await fetchSeachMovie(searchQuery);
      setMovies(movies);
    };

    try {
      searchMovie();
      setIsLoading(true);
      setError('');
      setIsEmptyList(true);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery]);

  const handleFormSubmit = newQuery => {
    if (newQuery === searchQuery) {
      return;
    }
    setSearchParams({ query: newQuery });
    setSearchQuery(newQuery);
  };
  return (
    <main>
      {isLoading && <Loader />}
      <SearchForm onSubmit={handleFormSubmit} />
      {!isEmptylist && (
        <div>There are no movies with this request. Please, try again... </div>
      )}
      {movies && <MoviesList movies={movies} />}
      {error && <div>{error}</div>}
    </main>
  );
};
export default MoviesPage;
