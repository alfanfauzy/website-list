import type {
    GetMovieNowPlayingListData,
    MoviewNowPlayingData,
} from "../types/GetMovieNowPlayingType";

export const mapToMoviewNowPlaying = (
    movies: Array<GetMovieNowPlayingListData>
): Array<MoviewNowPlayingData> =>
    movies.map((movie) => ({
        id_movie: movie.id.toString(),
        title: movie.original_title,
        release_date: movie.release_date,
        image_poster: movie.backdrop_path
            ? (movie.backdrop_path as string)
            : (movie.poster_path as string),
    }));
