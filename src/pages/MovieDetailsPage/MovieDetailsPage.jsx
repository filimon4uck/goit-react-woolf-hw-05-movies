import { DEFAULT_IMG } from 'defaultsImage';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchDetailsMovie } from 'services/api';
import style from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovie = async () => {
      const movie = await fetchDetailsMovie(movieId);
      setMovie(movie);
    };
    try {
      fetchMovie();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  return (
    <div>
      <NavLink className={style.back_link} to={location.state?.from || '/'}>
        {`←Go back`}
      </NavLink>
      {movie && (
        <section className={style.section}>
          <img
            src={
              movie.poster_path
                ? 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' +
                  movie.poster_path
                : DEFAULT_IMG
            }
            alt={movie.title}
            width={200}
            height={300}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>User score: {Math.round((movie.vote_average / 10) * 100)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres:</h2>
            <p>{movie.genres.map(it => it.name).join(', ')}</p>
          </div>
        </section>
      )}
      <div className={style.add_info}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
