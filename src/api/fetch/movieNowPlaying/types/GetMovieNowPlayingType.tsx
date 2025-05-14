import type { ResultQuery } from "../../../../types/BaseResponse";

export interface GetMovieNowPlayingListResponse {
  dates: Dates;
  page: number;
  results: GetMovieNowPlayingListData[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface GetMovieNowPlayingListData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type MoviewNowPlayingData = {
  id_movie: string;
  title: string;
  release_date: string;
};

export type GetMovieNowPlayingResults = ResultQuery<
  GetMovieNowPlayingListResponse | undefined
>;
