import { AxiosError } from "axios";
import { useQuery, type UseQueryOptions } from "react-query";
import Get from "../../axios/get";
import type { GetMovieNowPlayingListResponse } from "./types/GetMovieNowPlayingType";

const GetMovieNowPlayingKey = "GetMovieNowPlayingKey" as const;

export const GetMoviewNewPlayingList = async (
    page?: string
): Promise<GetMovieNowPlayingListResponse> => {
    try {
        const response = await Get({
            endpoint: `${
                import.meta.env.VITE_BASE_URL
            }/now_playing?language=en-US&page=${page}`,
        });

        return response;
    } catch (error) {
        const err = error as AxiosError;
        throw err.response?.data;
    }
};

export const useGetMoviewNewPlayingListQuery = (
    page?: string,
    options?: UseQueryOptions<GetMovieNowPlayingListResponse>
) =>
    useQuery<GetMovieNowPlayingListResponse>(
        [GetMovieNowPlayingKey, page],
        () => GetMoviewNewPlayingList(page),
        {
            ...options,
        }
    );
