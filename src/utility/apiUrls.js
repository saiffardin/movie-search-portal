const apiKey = process.env.REACT_APP_API;

export const getGenresUrl = () => `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

export const getMoviesByGenreUrl = (genreId) => `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

export const getMovieDetailsUrl = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

export const getMoviePosterUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`