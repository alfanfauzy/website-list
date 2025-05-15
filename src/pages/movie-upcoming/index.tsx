import { useGetMovieUpcomingUsecase } from "../../api/fetch/movieUpcoming/usecases/GetMovieUpcomingUsecase";
import Loading from "../../components/loading";
import { usePagination } from "../../hooks/usePagination";
import MovieList from "../../layout/MovieList";

const MoviewUpcoming = () => {
    const { page, handleNextPage, handlePrevPage } = usePagination();
    const { data, isLoading } = useGetMovieUpcomingUsecase(page.toString(), {
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
                Upcoming
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

export default MoviewUpcoming;
