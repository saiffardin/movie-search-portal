import { IMovie } from "@api/types";

export interface IMovieByGenre extends IMovie {
  genre_ids: number[];
}

export interface IMoviesByGenreRes {
  page: number;
  results: IMovieByGenre[];
  total_pages: number;
  total_results: number;
}
