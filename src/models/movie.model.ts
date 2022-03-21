import { MovieCreditsCast, MovieCreditsCrew } from "./credits.model";
import { Genre } from "./genre.model";
import { Pagination } from "./pagination.model";

export interface MovieDetails {
  adult: boolean,
  backdrop_path: string | null,
  belongs_to_collection: null,
  budget: number,
  genres: Genre[],
  homepage: string | null,
  id: number,
  imdb_id: string | null,
  original_language: string,
  original_title: string,
  overview: string | null,
  popularity: number,
  poster_path: string | null,
  production_companies: {name: string, id: number, logo_path: string | null, origin_country: string}[],
  production_countries: {iso_3166_1: string, name: string}[],
  release_date: string,
  revenue: number,
  runtime: number | null,
  spoken_languages: {iso_639_1: string, name: string}[],
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface MovieCredits {
  id: number,
  cast: MovieCreditsCast[],
  crew: MovieCreditsCrew[]
}

export interface MoviesBasicInformation {
  poster_path: string | null,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: number[],
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string | null,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number
}
export interface Movies extends Pagination{
  results: MoviesBasicInformation[],
}