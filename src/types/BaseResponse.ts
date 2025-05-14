import type { UseQueryResult } from "react-query";

export type Response<TData = unknown> = {
  total_count: number;
  incomplete_results: boolean;
  items: TData;
};

export type ResultQuery<TData = unknown, TError = unknown> = Omit<
  UseQueryResult<unknown, TError>,
  "data"
> & {
  data: TData;
};
