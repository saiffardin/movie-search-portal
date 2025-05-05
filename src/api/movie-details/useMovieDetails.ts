import { useState } from "react";
import { IMovieDetails } from "./types";
import { movieDbApi } from "@utils/axios";
import { ENDPOINTS } from "@constants/endpoints";

interface HookRetType {
  loading: boolean;
  success: boolean;
  movieDetails: IMovieDetails | null;
  getMovieDetails: (movieId: number) => Promise<void>;
}

const useMovieDetails = (): HookRetType => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null);

  const getMovieDetails = async (movieId: number) => {
    try {
      setLoading(true);
      setSuccess(false);

      const response = await movieDbApi.get<IMovieDetails>(
        ENDPOINTS.MOVIE_DETAILS(movieId)
      );

      if (response.status === 200) {
        setSuccess(true);
        setMovieDetails(response.data);
      }
    } catch (error: unknown) {
      console.error("Error fetching data:", error);
      setSuccess(false);
      setMovieDetails(null);
    } finally {
      setLoading(false);
    }
  };

  return { loading, success, movieDetails, getMovieDetails };
};

export default useMovieDetails;
