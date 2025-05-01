import { IGenre } from "@api/genre-list/types";
import { IMovie } from "@api/types";

interface ProdCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProdCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLang {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovieDetails extends IMovie {
  belongs_to_collection: unknown | null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  production_companies: ProdCompany[];
  production_countries: ProdCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLang[];
  status: string;
  tagline: string;
}
