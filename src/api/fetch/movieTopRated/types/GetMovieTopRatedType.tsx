import type { ResultQuery } from "../../../../types/BaseResponse";

export type GetMovieTopRatedResponse = {
    page: number;
    results: GetMovieTopRatedListData[];
    total_pages: number;
    total_results: number;
};

export type GetMovieTopRatedListData = {
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

export type MoviewTopRatedData = {
    id_movie: string;
    title: string;
    release_date: string | Date;
    image_poster: string;
};

export type newDataMovieTopRatedType = {
    page: number;
    movies: MoviewTopRatedData[];
    total_pages: number;
    total_results: number;
};

export type GetMovieTopRatedResults = ResultQuery<
    newDataMovieTopRatedType | undefined
>;
