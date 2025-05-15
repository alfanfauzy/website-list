import { useState } from "react";

export const usePagination = () => {
    const [page, setPage] = useState(1);

    const handlePrevPage = () => {
        if (page !== 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    return { page, handlePrevPage, handleNextPage };
};
