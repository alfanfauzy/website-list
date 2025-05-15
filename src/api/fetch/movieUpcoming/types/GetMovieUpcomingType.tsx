import type { ResultQuery } from "../../../../types/BaseResponse";

export type GetMovieUpcomingResponse = {
    page: number;
    results: GetMovieUpcomingListData[];
    total_pages: number;
    total_results: number;
};

export type GetMovieUpcomingListData = {
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

export type MovieUpcomingData = {
    id_movie: string;
    title: string;
    release_date: string | Date;
    image_poster: string;
};

export type newDataMovieUpcomingType = {
    page: number;
    movies: MovieUpcomingData[];
    total_pages: number;
    total_results: number;
};

export type GetMovieUpcomingResults = ResultQuery<
    newDataMovieUpcomingType | undefined
>;
