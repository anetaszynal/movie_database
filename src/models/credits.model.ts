interface CommonCreditData {
  adult: boolean,
  credit_id: string,
  id: number,
  popularity: number,
}

interface CommonMovieCreditsData extends CommonCreditData {
  gender: number | null,
  known_for_department: string,
  name: string,
  original_name: string,
  profile_path: string|null
}

interface CrewCreditsCommonData {
  department: string,
  job: string,
}

interface CastCreditsCommonData {
  character: string,
  order: number
}

export interface MovieCreditsCrew extends CommonMovieCreditsData, CrewCreditsCommonData {
}

export interface MovieCreditsCast extends CommonMovieCreditsData, CastCreditsCommonData {
  cast_id: number
}

interface CommonPersonCreditsData extends CommonCreditData {
  backdrop_path: string | null,
  genre_ids: number[],
  original_language: string,
  original_title: string,
  overview: string,
  poster_path: string | null,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

export interface PersonCreditsCrew extends CommonPersonCreditsData, CrewCreditsCommonData {
}

export interface PersonCreditsCast extends CommonPersonCreditsData, CastCreditsCommonData {
}