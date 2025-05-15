import type {
    GetMovieUpcomingListData,
    MovieUpcomingData,
} from "../types/GetMovieUpcomingType";

export const mapToMovieUpcoming = (
    movies: Array<GetMovieUpcomingListData>
): Array<MovieUpcomingData> =>
    movies.map((movie) => ({
        id_movie: movie.id.toString(),
        image_poster: movie.backdrop_path
            ? (movie.backdrop_path as string)
            : (movie.poster_path as string),
        release_date: movie.release_date ?? "",
        title: movie.title ?? "",
    }));
