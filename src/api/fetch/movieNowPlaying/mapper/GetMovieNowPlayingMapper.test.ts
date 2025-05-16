import { mapToMoviewNowPlaying } from "./GetMovieNowPlayingMapper";

describe("mapToMoviewNowPlaying", () => {
  it("should map the movie data correctly", () => {
    // Arrange: input data in the shape of GetMovieNowPlayingListData[]
    const input = [
      {
        adult: false,
        backdrop_path: "/qdKGpTHVaaKaFTnRynQDg4qHdEv.jpg",
        genre_ids: [10751, 35, 12, 14],
        id: 950387,
        original_language: "en",
        original_title: "A Minecraft Movie",
        overview:
          "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
        popularity: 705.6832,
        poster_path: "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        release_date: "2025-03-31",
        title: "A Minecraft Movie",
        video: false,
        vote_average: 6.412,
        vote_count: 1060,
      },
      {
        adult: false,
        backdrop_path: "/cJvUJEEQ86LSjl4gFLkYpdCJC96.jpg",
        genre_ids: [10752, 28],
        id: 1241436,
        original_language: "en",
        original_title: "Warfare",
        overview:
          "A platoon of Navy SEALs embarks on a dangerous mission in Ramadi, Iraq, with the chaos and brotherhood of war retold through their memories of the event.",
        popularity: 414.098,
        poster_path: "/srj9rYrjefyWqkLc6l2xjTGeBGO.jpg",
        release_date: "2025-04-09",
        title: "Warfare",
        video: false,
        vote_average: 7.14,
        vote_count: 296,
      },
    ];

    // Act: call the mapper
    const result = mapToMoviewNowPlaying(input);

    // Assert: check the output
    expect(result).toEqual([
      {
        id_movie: "950387",
        title: "A Minecraft Movie",
        release_date: "2025-03-31",
        image_poster: "/qdKGpTHVaaKaFTnRynQDg4qHdEv.jpg",
      },
      {
        id_movie: "1241436",
        title: "Warfare",
        release_date: "2025-04-09",
        image_poster: "/cJvUJEEQ86LSjl4gFLkYpdCJC96.jpg", // fallback to poster_path because backdrop_path is null
      },
    ]);
  });

  it("should handle empty input array", () => {
    expect(mapToMoviewNowPlaying([])).toEqual([]);
  });
});
