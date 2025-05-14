import type { GetMovieNowPlayingListData } from "../types/GetMovieNowPlayingType";

export const mapToMoviewNowPlaying = (
  datas: Array<GetMovieNowPlayingListData>
): UserLists =>
  datas.map((user) => ({
    name: user.login,
    avatar_url: user.avatar_url,
    gravatar_id: user.gravatar_id,
    id: user.id,
    url: user.url,
  }));
