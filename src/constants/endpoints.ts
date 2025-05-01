const apiKey = import.meta.env.VITE_API_KEY;

export const ENDPOINTS = {
  GENRE_LIST: `/genre/movie/list?api_key=${apiKey}&language=en-US`,

  MOVIES_BY_GENRE: (genreId: number) =>
    `/discover/movie?api_key=${apiKey}&with_genres=${genreId}`,

  MOVIE_DETAILS: (movieId: number) => `/movie/${movieId}?api_key=${apiKey}`,

  MOVIE_POSTER: (path: string) => `/w500${path}`,
};
