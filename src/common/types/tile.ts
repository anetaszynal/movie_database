export interface VoteType {
  averageVotes?: number,
  votes?: number,
}

export interface Tile extends VoteType {
  image : string | null,
  imagePlaceholder: string,
  title: string,
  genres?: string[],
  caption?: string | string[],
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

export interface CommonDetailsSection {
  tilesNumber: number, 
  title: string, 
}