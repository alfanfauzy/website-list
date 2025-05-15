import { AxiosError } from "axios";
import { useQuery, type UseQueryOptions } from "react-query";
import Get from "../../axios/get";
import type { GetMovieTopRatedResponse } from "./types/GetMovieTopRatedType";

const GetMovieTopRatedKey = "GetMovieTopRatedKey" as const;

export const GetMoviewTopRatedList = async (
    page?: string
): Promise<GetMovieTopRatedResponse> => {
    try {
        const response = await Get({
            endpoint: `${
                import.meta.env.VITE_BASE_URL
            }/top_rated?language=en-US&page=${page}`,
        });

        return response;
    } catch (error) {
        const err = error as AxiosError;
        throw err.response?.data;
    }
};

export const useGetMoviewTopRatedListQuery = (
    page?: string,
    options?: UseQueryOptions<GetMovieTopRatedResponse>
) =>
    useQuery<GetMovieTopRatedResponse>(
        [GetMovieTopRatedKey, page],
        () => GetMoviewTopRatedList(page),
        {
            ...options,
        }
    );
