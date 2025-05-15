import type { MoviewNowPlayingData } from "../../api/fetch/movieNowPlaying/types/GetMovieNowPlayingType";
import { useNavigate } from "react-router-dom";
import { dateFormatter } from "../../utils/dateFormat";

type MovieCardProps = {
    movies: MoviewNowPlayingData;
};

const MovieCard = (props: MovieCardProps) => {
    const { movies } = props;

    const navigate = useNavigate();

    const handleGoToDetailMovie = () => {
        navigate(`/movie/${movies.id_movie}`);
    };

    return (
        <div
            className="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600 cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
            onClick={handleGoToDetailMovie}
        >
            <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                    movies.image_poster
                }`}
                className=" h-4/5 object-cover w-full  "
                alt=""
            />
            <div className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
                <span className="capitalize  font-medium truncate">
                    {movies.title}
                </span>
                <div className="flex space-x-2 items-center text-xs">
                    <span>
                        {dateFormatter(new Date(movies.release_date), "yyyy") ??
                            "-"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
