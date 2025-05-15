import { createContext } from "react";

type SearchContextType = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

const defaultContext = {
    searchQuery: "",
    setSearchQuery: () => {},
};

export const SearchContext = createContext<SearchContextType>(defaultContext);
