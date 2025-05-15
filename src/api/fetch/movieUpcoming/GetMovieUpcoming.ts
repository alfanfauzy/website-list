import { AxiosError } from "axios";
import { useQuery, type UseQueryOptions } from "react-query";
import Get from "../../axios/get";
import type { GetMovieUpcomingResponse } from "./types/GetMovieUpcomingType";

const GetMovieUpcomingKey = "GetMovieUpcomingKey" as const;

export const GetMovieUpcomingList = async (
    page?: string
): Promise<GetMovieUpcomingResponse> => {
    try {
        const response = await Get({
            endpoint: `${
                import.meta.env.VITE_BASE_URL
            }/upcoming?language=en-US&page=${page}`,
        });

        return response;
    } catch (error) {
        const err = error as AxiosError;
        throw err.response?.data;
    }
};

export const useGetMovieUpcomingListQuery = (
    page?: string,
    options?: UseQueryOptions<GetMovieUpcomingResponse>
) =>
    useQuery<GetMovieUpcomingResponse>(
        [GetMovieUpcomingKey, page],
        () => GetMovieUpcomingList(page),
        {
            ...options,
        }
    );
