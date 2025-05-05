import { useState } from "react";
import { IGenre, IGenreList } from "./types";
import { movieDbApi } from "@utils/axios";
import { ENDPOINTS } from "@constants/endpoints";

interface HookRetType {
  loading: boolean;
  success: boolean;
  getGenreList: () => Promise<void>;
  genres: IGenre[];
}

const useGenres = (): HookRetType => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [genres, setGenres] = useState<IGenre[]>([]);

  const getGenreList = async () => {
    try {
      setLoading(true);
      setSuccess(false);

      const response = await movieDbApi.get<IGenreList>(ENDPOINTS.GENRE_LIST);

      if (response.status === 200) {
        setSuccess(true);
        setGenres(response?.data?.genres || []);
      }
    } catch (error: unknown) {
      console.error("Error fetching data:", error);
      setSuccess(false);
      setGenres([]);
    } finally {
      setLoading(false);
    }
  };

  return { genres, getGenreList, loading, success };
};

export default useGenres;
