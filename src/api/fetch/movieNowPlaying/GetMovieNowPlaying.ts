import { AxiosError } from "axios";
import { useQuery, type UseQueryOptions } from "react-query";
import type { Response } from "../../../types/BaseResponse";
import Get from "../../axios/get";
import type { GetMovieNowPlayingListResponse } from "./types/GetMovieNowPlayingType";

const GetMovieNowPlayingKey = "GetMovieNowPlayingKey" as const;

export const GetMoviewNewPlayingList = async (
  page?: string
): Promise<Response<Array<GetMovieNowPlayingListResponse>>> => {
  try {
    const response = await Get({
      endpoint: `${import.meta.env.VITE_BASE_URL}?language=en-US&page=${page}'`,
    });

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
};

export const useGetMoviewNewPlayingListQuery = (
  page?: string,
  options?: UseQueryOptions<Response<Array<GetMovieNowPlayingListResponse>>>
) =>
  useQuery<Response<Array<GetMovieNowPlayingListResponse>>>(
    [GetMovieNowPlayingKey],
    () => GetMoviewNewPlayingList(page),
    {
      ...options,
    }
  );
