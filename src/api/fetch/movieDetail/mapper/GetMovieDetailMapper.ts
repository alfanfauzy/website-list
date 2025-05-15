import type {
    GetMovieDetailResponse,
    MovieDetailData,
} from "../types/GetMovieDetailType";

export const mapToMovieDetail = (
    movie: GetMovieDetailResponse
): MovieDetailData => {
    let releaseDate: string | Date;

    if (movie.release_date && movie.release_date.length > 0) {
        releaseDate = movie.release_date;
    } else {
        // fallback ke tanggal saat ini jika release_date kosong/undefined
        releaseDate = new Date();
    }

    return {
        id_movie: movie.id.toString(),
        image_poster: movie.backdrop_path
            ? (movie.backdrop_path as string)
            : (movie.poster_path as string),
        release_date: releaseDate,
        title: movie.title ?? "",
        overview: movie.overview,
        genres: movie.genres.map((genre) => genre.name),
        countries: movie?.production_countries.map((c) => c.name).join(", "),
        runtime: `${movie?.runtime} min`,
        vote: movie?.vote_average,
    };
};
