type PaginationProps = {
    page: number;
    handleNextPage: () => void;
    handlePrevPage: () => void;
};

const Pagination = (props: PaginationProps) => {
    const { page, handleNextPage, handlePrevPage } = props;

    const isFirstPage = page === 1;

    return (
        <div className="flex justify-center gap-5">
            <button
                onClick={handlePrevPage}
                disabled={isFirstPage}
                className={`flex flex-row gap-3 items-center border p-2 hover:border-3 ${
                    isFirstPage && "cursor-not-allowed"
                }`}
            >
                <svg
                    className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>
                </svg>
                <span>Prev</span>
            </button>
            <button
                onClick={handleNextPage}
                className="flex flex-row gap-3 items-center border p-2 hover:border-3"
            >
                <span>Next</span>
                <svg
                    className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
