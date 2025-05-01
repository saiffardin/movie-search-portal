import { useEffect, useState } from "react";
import useCtxOutlet from "@hooks/useCtxOutlet";
import usePathParams from "@hooks/usePathParams";
import { getGenreArray } from "@utils/getGenreArray";
import { ITopMovieList, UseTopMoviesRetType } from "./types";
import useMoviesByGenre from "@api/movies-by-genre/useMoviesByGenre";

const useTopMovies = (): UseTopMoviesRetType => {
  const [topMovies, setTopMovies] = useState<ITopMovieList>();

  const { genreId } = usePathParams();
  const { genres } = useCtxOutlet();

  const {
    moviesByGenre,
    getMoviesByGenre,
    loading: loadingMoviesByGenre,
    success: successMoviesByGenre,
  } = useMoviesByGenre();

  const moviesArr = moviesByGenre.map((movie) => ({
    ...movie,
    genres: getGenreArray({ genres, genreIds: movie.genre_ids }),
  }));

  useEffect(() => {
    if (genreId) {
      getMoviesByGenre(Number(genreId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genreId]);

  useEffect(() => {
    if (successMoviesByGenre && genreId) {
      const currentGenre = genres?.find((item) => item?.id === Number(genreId));

      setTopMovies({
        genreId: Number(genreId),
        genreName: currentGenre?.name || "",
        movies: moviesArr,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successMoviesByGenre, genreId, genres, moviesByGenre]);

  return { topMovies, setTopMovies, loading: loadingMoviesByGenre };
};

export default useTopMovies;
