import React, { useContext, useState } from "react";
import profile from "../../Asset/Dummy/profile";
import profilePicture from "../../Asset/person/profile.png";
import { FileImageOutlined, LikeOutlined, PictureOutlined, SettingFilled, SettingOutlined } from "@ant-design/icons";
import { FavoriteOutlined, NearMe, People, SearchRounded, Telegram } from "@material-ui/icons";
import { ContactPage, Diversity1, Diversity3, SettingsAccessibility } from "@mui/icons-material";
import Toast, { toast } from 'react-hot-toast';
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
import { AiFillCamera } from "react-icons/ai";

const ProfileUser = () => {
    const [settings, setSettings] = React.useState(false);
    const { setCommunitySearch, communitySearch, friendsSearch, setFriendsSearch } = useContext(SearchContext)
    const { user } = useContext(AuthContext)
    console.log(user)
    const [uploadImage, setUploadImage] = useState(user.coverPicture)
    const [imgFile, setImageFile] = useState(null)
    const [profileuploadImage, setProfileUploadImage] = useState(user.profilePicture)
    const [profileimgFile, setProfileImageFile] = useState(null)


    if (!user) {
        return <Loading></Loading>;
    }
    const previewImage = (event) => {
        const imageFiles = event.target.files;
        const fileSize = event.target.files[0].size / 1024 / 1024;
        const fileType = event.target.files[0].type
        console.log(fileType)
        if (fileSize > 2) {
            setUploadImage(null)
            toast.success('File size greater than 2mb', {
                style: {
                    border: '1px solid blue',
                    padding: '16px',
                    color: 'black',
                },
                iconTheme: {
                    primary: 'blue',
                    secondary: 'yellow',
                },
            });
            return;
        }

        if (fileType !== 'image/jpeg' && fileType !== 'image/jpg' && fileType !== 'image/png') {
            setUploadImage(null)
            toast.success('File type must be jpg, jpeg or png', {
                style: {
                    border: '1px solid blue',
                    padding: '16px',
                    color: 'black',
                },
                iconTheme: {
                    primary: 'blue',
                    secondary: 'yellow',
                },
            });
            return;
        }
        setImageFile(imageFiles[0])
        const imageFilesLength = imageFiles.length;
        if (imageFilesLength > 0) {
            const imageSrc = URL.createObjectURL(imageFiles[0]);
            setUploadImage(imageSrc)

        }
    }



    return (
        <>
            {/* --------Profile Section------- */}

            <div className="h-full bg-white mt-16 lg:px-20">
                <div className="bg-white">
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
                        <div className='flex justify-center items-center px-6'>
                            <div className="pt-2 relative mx-auto text-gray-600">
                                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search"
                                    value={friendsSearch}
                                    onChange={(e) => setFriendsSearch(e.target.value)}

                                />

                            </div>

                        </div>
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
