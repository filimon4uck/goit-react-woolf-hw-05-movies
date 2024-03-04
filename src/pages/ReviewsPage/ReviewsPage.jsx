import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieRewiews } from 'services/api';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviesw] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      const reviews = await fetchMovieRewiews(movieId);
      setReviesw(reviews);
    };
    try {
      getReviews();
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  return (
    <>
      {reviews?.length > 0 ? (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
          {isLoading && <Loader />}
        </div>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};
export default ReviewsPage;
