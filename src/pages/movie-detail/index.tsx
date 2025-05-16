import { useParams } from "react-router-dom";
import { useGetMovieDetailUsecase } from "../../api/fetch/movieDetail/usecases/GetMovieDetailUsecase";
import BackButton from "../../components/backButton";
import Loading from "../../components/loading";
import { dateFormatter } from "../../utils/dateFormat";

const MovieDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetMovieDetailUsecase(id as string, {
    enabled: !!id,
  });

  const moviePoster = `
        ${import.meta.env.VITE_IMAGE_BASE_URL}${data?.image_poster}`;

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <BackButton />
      <div
        className="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white"
        style={{
          backgroundImage: `url(${moviePoster})`,
        }}
      >
        <div className="flex -space-x-1 items-center "></div>

        <div className="bg-gradient-to-r from-black/50 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2 text-left flex flex-col justify-end">
          <h1 className="uppercase text-3xl font-semibold drop-shadow-lg">
            {data?.title}
          </h1>
          <p className="text-sm text-gray-200 mt-1">
            {data?.genres.join(", ")}
          </p>
          <div className="text-xs text-gray-300 mt-2 space-x-2">
            <span>
              {dateFormatter(new Date(data?.release_date as Date), "yyyy")}
            </span>
            <span>•</span>
            <span>{data?.runtime}</span>
            <span>•</span>
            <span>{data?.countries}</span>
            <span>•</span>
            <span>⭐ {data?.vote.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="border mt-5 p-5 text-gray-500 font-thin">
        <p className="text-2xl text-left underline font-medium">Synopsis: </p>
        <p className="text-lg text-justify text-black">{data?.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
