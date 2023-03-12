export interface Film{
  id: number,
  name: string,
  year: string,
  description: string,
  genre: number[],
}
export interface BestFilm {
  isChose: boolean,
  id: number,
  name: string,
  year: string,
  description: string,
  genre: number[],
}
