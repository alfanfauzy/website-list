import type { UseQueryOptions } from "react-query";
import type {
    GetMoviePopularResponse,
    GetMoviePopularResults,
    newDataMoviePopularType,
} from "../types/GetMoviePopularType";
import { useGetMoviewPopularListQuery } from "../GetMoviePopular";
import { mapToMoviePopular } from "../mapper/GetMoviePopularMapper";

export const useGetMoviePopularUsecase = (
    page: string,
    options?: UseQueryOptions<GetMoviePopularResponse>
): GetMoviePopularResults => {
    const { data, ...rest } = useGetMoviewPopularListQuery(page, options);

    if (data?.results) {
        const dataMovieMapper = mapToMoviePopular(data.results);

        const newDataMovie: newDataMoviePopularType = {
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
