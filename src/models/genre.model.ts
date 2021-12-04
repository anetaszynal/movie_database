export interface Genre {
  id: number,
  name: string
}

export interface GenreAfterConvertingIntoObject {
  [id: number] : string
}
export interface GenresResponse {
  genres: Genre[]
}