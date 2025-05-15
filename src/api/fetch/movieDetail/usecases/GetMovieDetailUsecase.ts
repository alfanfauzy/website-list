import type { UseQueryOptions } from "react-query";
import type {
    GetMovieDetailResponse,
    GetMovieDetailResults,
} from "../types/GetMovieDetailType";
import { useGetMovieDetailListQuery } from "../GetMovieDetail";
import { mapToMovieDetail } from "../mapper/GetMovieDetailMapper";

export const useGetMovieDetailUsecase = (
    movieId: string,
    options?: UseQueryOptions<GetMovieDetailResponse>
): GetMovieDetailResults => {
    const { data, ...rest } = useGetMovieDetailListQuery(movieId, options);

    if (data) {
        const dataMovieMapper = mapToMovieDetail(data);

        return {
            data: dataMovieMapper,
            ...rest,
        };
    }

    return {
        data: undefined,
        ...rest,
    };
};
