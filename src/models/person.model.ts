import { PersonCreditsCast, PersonCreditsCrew } from "./credits.model";

export interface PersonDetails {
  adult: boolean,
  also_known_as: string[],
  biography: string,
  birthday: string | null,
  deathday: string | null,
  gender: number,
  homepage: string | null,
  id: number,
  imdb_id: string,
  known_for_department: string,
  name: string,
  place_of_birth: string | null,
  popularity: number,
  profile_path: string | null,
}

export interface PeopleCredits {
  id: number,
  cast: PersonCreditsCast[],
  crew: PersonCreditsCrew[]
}

export interface PeopleBasicInformation {
  adult: boolean,
  gender: 2
  id: number,
  known_for: {
    adult: boolean,
    backdrop_path: string | null,
    genre_ids: number[],
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string | null,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    popularity: number
  }[],
  name: string
  popularity: number,
  profile_path: string,
}

export interface People {
  page: number,
  results: PeopleBasicInformation[],
  total_results: number,
  total_pages: number
}