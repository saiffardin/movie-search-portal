import { useState } from "react";
import {
  MOVIE_NAME,
  RATINGS,
  RELEASE_YEAR,
  SortingOptionType,
} from "@constants/sorting-options";
import { UseFilterProps, UseFilterRetType } from "./types";
import { sorterDate, sorterMovieName, sorterRating } from "@utils/sorter";

const useFilter = (props: UseFilterProps): UseFilterRetType => {
  const { topMovies, setTopMovies } = props;

  const [filter, setFilter] = useState<SortingOptionType>(
    "Default" as SortingOptionType
  );

  const handleSelectFilter = (e: SortingOptionType) => {
    if (!topMovies) return;

    const temp = [...topMovies.movies];
    let sortedMovies = [...temp];

    setFilter(e);

    switch (e) {
      case MOVIE_NAME:
        sortedMovies = temp.sort(sorterMovieName);
        break;

      case RELEASE_YEAR:
        sortedMovies = temp.sort(sorterDate);
        break;

      case RATINGS:
        sortedMovies = temp.sort(sorterRating);
        break;

      default:
        break;
    }

    setTopMovies((prevState) => {
      if (!prevState) return prevState;

      return {
        ...prevState,
        movies: sortedMovies,
      };
    });
  };

  return { filter, handleSelectFilter };
};

export default useFilter;
