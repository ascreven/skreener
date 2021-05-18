import { IGenre } from "src/app/models/genres.model";

export type Movie = {
  poster_path?: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  genres?: IGenre[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  videos?: any;
  vote_average: number;
};
