import { Route, Routes } from "react-router-dom";
import MoviewHome from "../pages/movie-home";
import MoviewPopular from "../pages/movie-popular";
import MovieTopRated from "../pages/movie-toprated";
import MoviewUpcoming from "../pages/movie-upcoming";
import MovieDetail from "../pages/movie-detail";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MoviewHome />} />
            <Route path="/popular" element={<MoviewPopular />} />
            <Route path="/toprated" element={<MovieTopRated />} />
            <Route path="/upcoming" element={<MoviewUpcoming />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
    );
};

export default AppRoutes;
