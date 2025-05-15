import { useState } from "react";
import SideNav from "../components/sidenav";
import TopNav from "../components/topnav";
import Search from "../components/search";
import { useLocation } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import { SearchContext } from "../context/searchContext";

const MainLayout = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const location = useLocation();
    const isMovieDetailPage = /^\/movie\/[^/]+$/.test(location.pathname);

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            <div className="font-montserrat text-sm bg-white text-black ">
                <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
                    <SideNav />
                    <main className=" flex-1 py-10  px-5 sm:px-10 ">
                        {!isMovieDetailPage && (
                            <section>
                                <div className="flex flex-row justify-between gap-5">
                                    <TopNav />
                                    <Search />
                                </div>
                            </section>
                        )}
                        <section className="mt-9">
                            <AppRoutes />
                        </section>
                    </main>
                </div>
            </div>
        </SearchContext.Provider>
    );
};

export default MainLayout;
