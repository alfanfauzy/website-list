import type { ResultQuery } from "../../../../types/BaseResponse";

export type GetMovieSearchResponse = {
    page: number;
    results: GetMovieSearchListData[];
    total_pages: number;
    total_results: number;
};

export type GetMovieSearchListData = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
};

export type MovieSearchData = {
    id_movie: string;
    title: string;
    release_date: string | Date;
    image_poster: string;
};

export type newDataMovieSearchType = {
    page: number;
    movies: MovieSearchData[];
    total_pages: number;
    total_results: number;
};

export type GetMovieSearchResults = ResultQuery<
    newDataMovieSearchType | undefined
>;
