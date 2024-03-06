import { DEFAULT_IMG } from 'defaultsImage';
import { Link, useLocation } from 'react-router-dom';
import style from './MoviesList.module.css';
const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={style.movies_list}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link
              className={style.list_card}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : DEFAULT_IMG
                }
                alt={title}
                width={250}
                height={400}
              />
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MoviesList;
