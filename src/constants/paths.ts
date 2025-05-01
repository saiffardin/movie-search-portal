export const PATH_PARAMS = {
  MOVIE_ID_PARAMS: "movieId",
  GENRE_ID_PARAMS: "genreId",
} as const;

const { MOVIE_ID_PARAMS, GENRE_ID_PARAMS } = PATH_PARAMS;

export const PATHS = {
  HOME: "/",
  MOVIES: "/movies",
  WISHLIST: "/wishlist",

  MOVIE_ID: {
    SEGMENTS: `/movies/:${MOVIE_ID_PARAMS}`,
    NAVIGATE: (id: number) => `/movies/${id}`,
  },

  GENRE_ID: {
    SEGMENTS: `/genre/:${GENRE_ID_PARAMS}`,
    NAVIGATE: (id: number) => `/genre/${id}`,
  },
};
