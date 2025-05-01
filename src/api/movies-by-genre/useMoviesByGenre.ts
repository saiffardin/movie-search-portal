import { useState } from "react";
import { movieDbApi } from "@utils/axios";
import { ENDPOINTS } from "@constants/endpoints";
import { IMovieByGenre, IMoviesByGenreRes } from "./types";

interface HookRetType {
  loading: boolean;
  success: boolean;
  getMoviesByGenre: (genreId: number) => Promise<void>;
  moviesByGenre: IMovieByGenre[];
}

const useMoviesByGenre = (): HookRetType => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [moviesByGenre, setMoviesByGenre] = useState<IMovieByGenre[]>([]);

  const getMoviesByGenre = async (genreId: number) => {
    try {
      setLoading(true);
      setSuccess(false);

      const response = await movieDbApi.get<IMoviesByGenreRes>(
        ENDPOINTS.MOVIES_BY_GENRE(genreId)
      );

      if (response.status === 200) {
        setSuccess(true);
        setMoviesByGenre(response?.data?.results?.slice(0, 10) || []);
      }
    } catch (error: unknown) {
      console.error("Error fetching data:", error);
      setSuccess(false);
      setMoviesByGenre([]);
    } finally {
      setLoading(false);
    }
  };

  return { moviesByGenre, getMoviesByGenre, loading, success };
};

export default useMoviesByGenre;
