import { createContext, useState } from "react";

export const SearchContext = createContext();

const SerachProvider = ({ children }) => {

    const [search, setSearch] = useState("");
    const [communitySearch, setCommunitySearch] = useState("");

    return (
        <SearchContext.Provider value={{ search, setSearch, communitySearch, setCommunitySearch }}>
            {children}
        </SearchContext.Provider>
    );
}
export default SerachProvider;
