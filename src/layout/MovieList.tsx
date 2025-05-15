import type { MoviewNowPlayingData } from "../api/fetch/movieNowPlaying/types/GetMovieNowPlayingType";
import MovieCard from "../components/card";
import Pagination from "../components/pagination";

type MovieListProps = {
    movies: Array<MoviewNowPlayingData> | undefined;
    page: number;
    handleNextPage: () => void;
    handlePrevPage: () => void;
};

const MovieList = (props: MovieListProps) => {
    const { movies, page, handleNextPage, handlePrevPage } = props;

    return (
        <div className="flex gap-3 flex-col">
            
            <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
                {movies?.map((movie) => (
                    <MovieCard movies={movie} key={movie.id_movie} />
                ))}
            </div>
            <Pagination
                page={page}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
            />
        </div>
    );
};

export default MovieList;
