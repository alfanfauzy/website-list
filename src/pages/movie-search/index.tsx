import { useContext } from "react";
import { useGetMovieSearchUsecase } from "../../api/fetch/movieSearch/usecases/GetMovieSearchUsecase";
import Loading from "../../components/loading";
import { usePagination } from "../../hooks/usePagination";
import MovieList from "../../layout/MovieList";
import { SearchContext } from "../../context/searchContext";

const MoviewSearch = () => {
    const { page, handleNextPage, handlePrevPage } = usePagination();
    const { searchQuery } = useContext(SearchContext);
    const { data, isLoading } = useGetMovieSearchUsecase(searchQuery, page, {
        enabled: searchQuery.length > 3 && !!page,
    });

    console.log("movieSearch", searchQuery);

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
                Movie Search
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

export default MoviewSearch;
