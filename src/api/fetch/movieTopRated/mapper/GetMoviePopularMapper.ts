import type {
    GetMovieTopRatedListData,
    MoviewTopRatedData,
} from "../types/GetMovieTopRatedType";

export const mapToMovieTopRated = (
    movies: Array<GetMovieTopRatedListData>
): Array<MoviewTopRatedData> =>
    movies.map((movie) => ({
        id_movie: movie.id.toString(),
        image_poster: movie.backdrop_path
            ? (movie.backdrop_path as string)
            : (movie.poster_path as string),
        release_date: movie.release_date ?? "",
        title: movie.title ?? "",
    }));
