import { IMovie } from "@api/types";
import { IGenre } from "@api/genre-list/types";
import { Dispatch, SetStateAction } from "react";
import { SortingOptionType } from "@constants/sorting-options";

type TopMoviesType = ITopMovieList | undefined;

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export interface ITopMovie extends IMovie {
  genres: IGenre[];
}

export interface ITopMovieList {
  genreId: number;
  genreName: string;
  movies: ITopMovie[];
}

export interface UseFilterProps {
  topMovies: TopMoviesType;
  setTopMovies: SetStateType<TopMoviesType>;
}

export interface UseFilterRetType {
  filter: SortingOptionType;
  handleSelectFilter: (e: SortingOptionType) => void;
}

export interface UseTopMoviesRetType {
  loading: boolean;
  topMovies: TopMoviesType;
  setTopMovies: SetStateType<TopMoviesType>;
}
