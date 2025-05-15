import { useGetMoviePopularUsecase } from "../../api/fetch/moviePopular/usecases/GetMoviePopularUsecase";
import MovieList from "../../layout/MovieList";
import { usePagination } from "../../hooks/usePagination";
import Loading from "../../components/loading";

const MoviewPopular = () => {
    const { page, handleNextPage, handlePrevPage } = usePagination();
    const { data, isLoading } = useGetMoviePopularUsecase(page.toString(), {
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
                Popular
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

export default MoviewPopular;
