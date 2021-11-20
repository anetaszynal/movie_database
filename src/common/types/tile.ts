export interface Tile {
  image? : string,
  imagePlaceholder: string,
  title: string,
  genres?: string[],
  caption?: string | string[],
  averageVotes?: number,
  votes?: number,
  people?: boolean,
}

export interface DetailedTile extends Tile {
  firstInfoName: string,
  secondInfoName: string,
  firstInfo?: string,
  secondInfo?: string,
  description: string,
  detail?: boolean,
}