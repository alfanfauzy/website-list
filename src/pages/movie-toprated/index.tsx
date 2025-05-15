import { useGetMovieTopRatedUsecase } from "../../api/fetch/movieTopRated/usecases/GetMovieTopRatedUsecase";
import Loading from "../../components/loading";
import { usePagination } from "../../hooks/usePagination";
import MovieList from "../../layout/MovieList";

const MovieTopRated = () => {
    const { page, handleNextPage, handlePrevPage } = usePagination();
    const { data, isLoading } = useGetMovieTopRatedUsecase(page.toString(), {
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
                Top Rated
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

export default MovieTopRated;
