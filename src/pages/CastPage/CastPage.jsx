import { DEFAULT_IMG } from 'defaultsImage';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import style from './CastPage.module.css';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useState(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      const cast = await fetchMovieCast(movieId);
      setCast(cast);
    };
    try {
      fetchCast();
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <ul className={style.cast_list}>
          {cast.map(actor => (
            <li className={style.cast_list_item} key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : DEFAULT_IMG
                }
                alt={actor.name}
                width={100}
                height={150}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any casts for this movie</div>
      )}
    </div>
  );
};
export default Cast;
