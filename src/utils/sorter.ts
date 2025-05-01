import { ITopMovie } from "@pages/TopMoviesList/types";

export const sorterMovieName = (a: ITopMovie, b: ITopMovie) =>
  a.title > b.title ? 1 : -1;

export const sorterDate = (a: ITopMovie, b: ITopMovie) =>
  new Date(b.release_date).getTime() - new Date(a.release_date).getTime();

export const sorterRating = (a: ITopMovie, b: ITopMovie) =>
  b.vote_average - a.vote_average;
