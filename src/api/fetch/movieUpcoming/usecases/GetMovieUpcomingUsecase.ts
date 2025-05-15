import type { UseQueryOptions } from "react-query";
import type {
    GetMovieUpcomingResponse,
    GetMovieUpcomingResults,
    newDataMovieUpcomingType,
} from "../types/GetMovieUpcomingType";
import { useGetMovieUpcomingListQuery } from "../GetMovieUpcoming";
import { mapToMovieUpcoming } from "../mapper/GetMovieUpcomingMapper";

export const useGetMovieUpcomingUsecase = (
    page: string,
    options?: UseQueryOptions<GetMovieUpcomingResponse>
): GetMovieUpcomingResults => {
    const { data, ...rest } = useGetMovieUpcomingListQuery(page, options);

    if (data?.results) {
        const dataMovieMapper = mapToMovieUpcoming(data.results);

        const newDataMovie: newDataMovieUpcomingType = {
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
