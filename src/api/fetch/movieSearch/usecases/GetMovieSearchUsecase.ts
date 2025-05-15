import type { UseQueryOptions } from "react-query";
import type {
    GetMovieSearchResponse,
    GetMovieSearchResults,
    newDataMovieSearchType,
} from "../types/GetMovieSearchType";
import { useGetMovieSearchListQuery } from "../GetMovieSearch";
import { mapToMovieSearch } from "../mapper/GetMovieSearchMapper";

export const useGetMovieSearchUsecase = (
    query: string,
    page: string | number,
    options?: UseQueryOptions<GetMovieSearchResponse>
): GetMovieSearchResults => {
    const { data, ...rest } = useGetMovieSearchListQuery(query, page, options);

    if (data?.results) {
        const dataMovieMapper = mapToMovieSearch(data.results);

        const newDataMovie: newDataMovieSearchType = {
            movies: dataMovieMapper,
            ...data,
        };

        return {
            data: newDataMovie,
            ...rest,
        };
    }

    return {
        data: undefined,
        ...rest,
    };
};
