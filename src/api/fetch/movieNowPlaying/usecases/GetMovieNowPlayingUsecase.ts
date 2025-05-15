import type { UseQueryOptions } from "react-query";
import type {
    GetMovieNowPlayingListResponse,
    GetMovieNowPlayingResults,
    newDataMovieNowPlayingType,
} from "../types/GetMovieNowPlayingType";
import { useGetMoviewNewPlayingListQuery } from "../GetMovieNowPlaying";
import { mapToMoviewNowPlaying } from "../mapper/GetMovieNowPlayingMapper";

export const useGetMovieNowPlayingUsecase = (
    page: string,
    options?: UseQueryOptions<GetMovieNowPlayingListResponse>
): GetMovieNowPlayingResults => {
    const { data, ...rest } = useGetMoviewNewPlayingListQuery(page, options);

    if (data?.results) {
        const dataMovieMapper = mapToMoviewNowPlaying(data.results);

        const newDataMovie: newDataMovieNowPlayingType = {
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
