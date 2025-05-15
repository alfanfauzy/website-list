import { AxiosError } from "axios";
import { useQuery, type UseQueryOptions } from "react-query";
import Get from "../../axios/get";
import type { GetMoviePopularResponse } from "./types/GetMoviePopularType";

const GetMoviePopularKey = "GetMoviePopularKey" as const;

export const GetMoviewPopularList = async (
    page?: string
): Promise<GetMoviePopularResponse> => {
    try {
        const response = await Get({
            endpoint: `${
                import.meta.env.VITE_BASE_URL
            }/popular?language=en-US&page=${page}`,
        });

        return response;
    } catch (error) {
        const err = error as AxiosError;
        throw err.response?.data;
    }
};

export const useGetMoviewPopularListQuery = (
    page?: string,
    options?: UseQueryOptions<GetMoviePopularResponse>
) =>
    useQuery<GetMoviePopularResponse>(
        [GetMoviePopularKey, page],
        () => GetMoviewPopularList(page),
        {
            ...options,
        }
    );
