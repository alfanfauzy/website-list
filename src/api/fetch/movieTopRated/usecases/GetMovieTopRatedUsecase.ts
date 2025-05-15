import type { UseQueryOptions } from "react-query";
import type {
    GetMovieTopRatedResponse,
    GetMovieTopRatedResults,
    newDataMovieTopRatedType,
} from "../types/GetMovieTopRatedType";
import { useGetMoviewTopRatedListQuery } from "../GetMovieTopRated";
import { mapToMovieTopRated } from "../mapper/GetMoviePopularMapper";

export const useGetMovieTopRatedUsecase = (
    page: string,
    options?: UseQueryOptions<GetMovieTopRatedResponse>
): GetMovieTopRatedResults => {
    const { data, ...rest } = useGetMoviewTopRatedListQuery(page, options);

    if (data?.results) {
        const dataMovieMapper = mapToMovieTopRated(data.results);

        const newDataMovie: newDataMovieTopRatedType = {
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
