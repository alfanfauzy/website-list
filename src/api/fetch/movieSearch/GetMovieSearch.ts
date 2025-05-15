import { AxiosError } from "axios";
import { useQuery, type UseQueryOptions } from "react-query";
import Get from "../../axios/get";
import type { GetMovieSearchResponse } from "./types/GetMovieSearchType";

const GetMovieSearchKey = "GetMovieSearchKey" as const;

export const GetMovieSearchList = async (
    query?: string,
    page?: string | number
): Promise<GetMovieSearchResponse> => {
    try {
        const response = await Get({
            endpoint: `${
                import.meta.env.VITE_BASE_SEARCH_URL
            }?query=${query}&language=en-US&page=${page}`,
        });

        return response;
    } catch (error) {
        const err = error as AxiosError;
        throw err.response?.data;
    }
};

export const useGetMovieSearchListQuery = (
    query?: string,
    page?: string | number,
    options?: UseQueryOptions<GetMovieSearchResponse>
) =>
    useQuery<GetMovieSearchResponse>(
        [GetMovieSearchKey, query, page],
        () => GetMovieSearchList(query, page),
        {
            ...options,
        }
    );
