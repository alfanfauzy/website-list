import type { ResultQuery } from "../../../../types/BaseResponse";

export type GetMoviePopularResponse = {
    page: number;
    results: GetMoviePopularListData[];
    total_pages: number;
    total_results: number;
};

export type GetMoviePopularListData = {
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

export type MoviewPopularData = {
    id_movie: string;
    title: string;
    release_date: string | Date;
    image_poster: string;
};

export type newDataMoviePopularType = {
    page: number;
    movies: MoviewPopularData[];
    total_pages: number;
    total_results: number;
};

export type GetMoviePopularResults = ResultQuery<
    newDataMoviePopularType | undefined
>;
