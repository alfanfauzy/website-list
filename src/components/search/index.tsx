import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const { setSearchQuery } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleChangeSearchQuery = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = e.currentTarget.value;

        setSearchQuery(newValue);
        if (newValue.length > 3) {
            navigate("/search");
        } else if (newValue.length === 0) {
            console.log("emang nggak kesini");
            navigate("/");
        }
    };

    return (
        <div className="relative items-center content-center flex ml-2">
            <span className="text-gray-400 absolute left-4 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
            </span>
            <input
                onChange={handleChangeSearchQuery}
                type="text"
                className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1"
                placeholder="Search ..."
            />
        </div>
    );
};

export default Search;
