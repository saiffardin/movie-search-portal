export const MOVIE_NAME = "Movie Name" as const;
export const RELEASE_YEAR = "Release Year" as const;
export const RATINGS = "Ratings" as const;

export const SORTING_OPTIONS = [MOVIE_NAME, RELEASE_YEAR, RATINGS] as const;

export type SortingOptionType = (typeof SORTING_OPTIONS)[number];
