import { useGetMovieNowPlayingUsecase } from "../../api/fetch/movieNowPlaying/usecases/GetMovieNowPlayingUsecase";
import Loading from "../../components/loading";
import { usePagination } from "../../hooks/usePagination";
import MovieList from "../../layout/MovieList";

const MoviewHome = () => {
    const { page, handleNextPage, handlePrevPage } = usePagination();
    const { data, isLoading } = useGetMovieNowPlayingUsecase(page.toString(), {
        enabled: !!page,
    });

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <Loading />
            </div>
        );
    }

    return (
        <>
            <span className="font-semibold text-gray-700 text-base text-left">
                Now Playing
            </span>
            <MovieList
                movies={data?.movies}
                page={page}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
            />
        </>
    );
};

export default MoviewHome;
