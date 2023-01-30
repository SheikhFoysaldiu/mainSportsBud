import React, { useContext } from "react";
import profile from "../../Asset/Dummy/profile";
import profilePicture from "../../Asset/person/profile.png";
import { FileImageOutlined, LikeOutlined, PictureOutlined, SettingFilled, SettingOutlined } from "@ant-design/icons";
import { FavoriteOutlined, NearMe, People, SearchRounded, Telegram } from "@material-ui/icons";
import { ContactPage, Diversity1, Diversity3, SettingsAccessibility } from "@mui/icons-material";

import styled from "styled-components";
import Community from "../../Components/Community/Community";
import Friends from "../../Components/Friends/Friends";
import Settings from "../../Components/About/About";
import About from "../../Components/About/About";

import { AuthContext } from "../../Context/AuthProvider";
import { API_URL } from "../../API/config";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import { SearchContext } from "../../Context/SearchContext";

const ProfileUser = () => {
    const [settings, setSettings] = React.useState(false);
    const { setCommunitySearch, communitySearch } = useContext(SearchContext)
    const { user } = useContext(AuthContext)
    console.log(user)


    if (!user) {
        return <Loading></Loading>;
    }



    return (
        <>
            {/* --------Profile Section------- */}

            <div className="h-full bg-white mt-16 lg:px-20">
                <div className="bg-white">
                    {/* Settings Menu  */}
                    <div className="absolute right-10 lg:right-24 mt-4 rounded">
                        <button onClick={() => setSettings(prev => !prev)} className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                            </svg>
                        </button>
                        {/* Settings Menu */}
                        {
                            settings && <div className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl" >
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs px-6 uppercase mb-1">Change</p>
                                    <button className="w-full flex items-center px-6 py-1.5  space-x-2 hover:bg-gray-200">
                                        <PictureOutlined />
                                        <span className="text-sm text-gray-700">Profile </span>
                                    </button>
                                    <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                                        <FileImageOutlined />
                                        <span className="text-sm text-gray-700">Cover</span>
                                    </button>

                                </div>

                            </div>

                        }
                    </div>
                    {/* Profile Section */}
                    <div className="w-full h-[250px]">
                        <img src={user.coverPicture} alt="background" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
                    </div>

                    <div className="flex flex-col items-center -mt-20 ">
                        <div className="w-40 h-40 border-4 border-white rounded-full">
                            <img src={user.profilePicture} alt="profile" className="w-38 h-38 border-4 border-white rounded-full object-contain" /></div>
                        <div className="flex items-center space-x-2">
                            <p className="text-2xl">{user.firstName}{" "}{user.lastName}</p>
                        </div>

                        {/* <p className="text-sm text-gray-500">Interested in {user.sportsInterest}</p> */}
                    </div>

                </div>
                <ul className="bg-white py-4 nav nav-tabs flex justify-center items-center  md:flex-row flex-wrap list-none border-b-0  pl-0 mb-4 text-xl" id="tabs-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                        <a href="#tabs-home" className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                            aria-selected="true">About</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a href="#tabs-home" className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                            aria-controls="tabs-profile" aria-selected="false">Friends</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a href="#tabs-messages" className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                            aria-controls="tabs-messages" aria-selected="false">Community</a>
                    </li>

                </ul>
                < div className="tab-content" id="tabs-tabContent">
                    <div className="tab-pane fade show active " id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                        <About user={user} />
                    </div>
                    <div className="tab-pane fade  " id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                        <Friends userId={user.id} />
                    </div>
                    <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-messages-tab">
                        <div className='bg-white  flex justify-center items-center px-6'>
                            <div className="p-2 relative mx-auto text-gray-600">
                                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="text" name="search" placeholder="Search"
                                    value={communitySearch}
                                    onChange={(e) => {
                                        setCommunitySearch(e.target.value);
                                    }}
                                />
                                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                                    <SearchRounded />
                                </button>
                            </div>

                        </div>
                        <Community userId={user.id} />

                    </div>


                </div>
            </div>

            {/* --------Tab Navigation (About, Community, Friends)------- */}

        </>
    );
};

export default ProfileUser;
