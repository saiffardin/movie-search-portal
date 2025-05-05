import axios from "axios";

export const movieDbApi = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_DB_URL,
});
