import { AxiosError } from "axios";
import { useQuery, type UseQueryOptions } from "react-query";
import Get from "../../axios/get";
import type { GetMovieDetailResponse } from "./types/GetMovieDetailType";

const GetMovieDetailKey = "GetMovieDetailKey" as const;

export const GetMovieDetailList = async (
    movieId?: string
): Promise<GetMovieDetailResponse> => {
    try {
        const response = await Get({
            endpoint: `${
                import.meta.env.VITE_BASE_URL
            }/${movieId}?language=en-US`,
        });

        return response;
    } catch (error) {
        const err = error as AxiosError;
        throw err.response?.data;
    }
};

export const useGetMovieDetailListQuery = (
    movieId?: string,
    options?: UseQueryOptions<GetMovieDetailResponse>
) =>
    useQuery<GetMovieDetailResponse>(
        [GetMovieDetailKey, movieId],
        () => GetMovieDetailList(movieId),
        {
            ...options,
        }
    );
