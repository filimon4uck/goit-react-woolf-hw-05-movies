import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'debf88dce832779bb7355a403cec0327';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?&api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchSeachMovie = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchDetailsMovie = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieCast = async movie_id => {
  const response = await axios.get(
    `/movie/${movie_id}/credits?language=en-US'&api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const fetchMovieRewiews = async movie_id => {
  const response = await axios.get(
    `/movie/${movie_id}/reviews?language=en-US'&api_key=${API_KEY}`
  );
  return response.data.results;
};
