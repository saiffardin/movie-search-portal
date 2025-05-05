import { IGenre } from "@api/genre-list/types";

interface Props {
  genreIds: number[];
  genres: IGenre[];
}

export const getGenreArray = (props: Props): IGenre[] => {
  const { genres, genreIds } = props;
  return genres.filter((item) => genreIds.includes(item.id));
};
