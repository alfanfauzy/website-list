import type { UseQueryOptions } from "react-query";
import type { Response } from "../../../../types/BaseResponse";
import type { GetMovieNowPlayingListResponse } from "../types/GetMovieNowPlayingType";
import { useGetMoviewNewPlayingListQuery } from "../GetMovieNowPlaying";

export const useGetUsersListUsecase = (
  valueSearch: string,
  options?: UseQueryOptions<Response<Array<GetMovieNowPlayingListResponse>>>
): GetMovieNowPlayingResults => {
  const { data, ...rest } = useGetMoviewNewPlayingListQuery(
    valueSearch,
    options
  );

  if (data?.items) {
    const usersListMapper = mapToUsersModel(data.items);

    return {
      data: usersListMapper,
      ...rest,
    };
  }

  return {
    data: undefined,
    ...rest,
  };
};
