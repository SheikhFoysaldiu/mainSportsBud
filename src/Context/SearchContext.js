import { createContext, useState } from "react";

export const SearchContext = createContext();

const SerachProvider = ({ children }) => {

    const [search, setSearch] = useState("");
    const [communitySearch, setCommunitySearch] = useState("");
    const [sportUserSearch, setSportUserSearch] = useState("")
    const [gender, setGender] = useState("")
    const [location, setLocation] = useState("")
    const [ageGt, setAgeGt] = useState(0)
    const [ageLt, setAgeLt] = useState(200)
    const [friendsSearch, setFriendsSearch] = useState("")
    const [suggestCommunitySearch, setSuggestCommunitySearch] = useState("")
    return (
        <SearchContext.Provider value={{ search, setSearch, communitySearch, setCommunitySearch, sportUserSearch, setSportUserSearch, gender, setGender, location, setLocation, ageGt, setAgeGt, ageLt, setAgeLt, friendsSearch, setFriendsSearch, suggestCommunitySearch, setSuggestCommunitySearch }}>
            {children}
        </SearchContext.Provider>
    );
}
export default SerachProvider;
