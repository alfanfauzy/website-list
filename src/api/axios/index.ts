/* eslint-disable no-param-reassign */
import axios from "axios";
// eslint-disable-next-line import/no-cycle

const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODU3Y2ZiMDljODMzY2VlNjY2MzdiMGIyYWMwMWY0MSIsIm5iZiI6MTc0NzIxNDMxMC42NjYsInN1YiI6IjY4MjQ1ZmU2MzcxYWFkNGMzZjJkMjRjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lF-tbF7j6MicXn4Fmz2smPfJCR319dr5qN_YWSWUpk8";

const axiosApiInstance = axios.create({
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosApiInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        return Promise.reject(err);
    }
);

export default axiosApiInstance;
