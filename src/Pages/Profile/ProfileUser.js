import React from "react";
import profile from "../../Asset/Dummy/profile";
import profilePicture from "../../Asset/person/profile.png";
import { LikeOutlined, SettingFilled, SettingOutlined } from "@ant-design/icons";
import { FavoriteOutlined, NearMe, People, Telegram } from "@material-ui/icons";
import { ContactPage, Diversity1, Diversity3, SettingsAccessibility } from "@mui/icons-material";

import styled from "styled-components";
import Community from "../../Components/Community/Community";
import Friends from "../../Components/Friends/Friends";
import Settings from "../../Components/Settings/Settings";

const Container = styled.div`

`

const ProfileUser = () => {
    return (
        <>
            {/* --------Profile Section------- */}
            <div className='bg-white shadow rounded-lg p-10'>
                <div className='flex flex-col gap-1 text-center items-center'>
                    <img
                        className='h-32 w-32 bg-white p-2 rounded-full shadow mb-4'
                        src={profilePicture}
                        alt=''
                    />
                    <p className='font-semibold'>{profile.name}</p>

                    <div className='text-lg leading-normal text-gray-400 flex justify-center items-center'>
                        <FavoriteOutlined />

                        <span>{profile.interestedIn}</span>
                    </div>
                    <div className='text-sm leading-normal text-gray-400 flex justify-center items-center'>
                        <NearMe fontSize='small' />
                        {profile.address}
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 my-3'>
                    <div className='font-semibold text-center mx-4'>
                        <p className='text-black'>{profile.postsCount}</p>
                        <span className='text-gray-400'>Posts</span>
                    </div>
                    <div className='font-semibold text-center mx-4'>
                        <p className='text-black'>{profile.friendsCount}</p>
                        <span className='text-gray-400'>Friends</span>
                    </div>
                    <div className='font-semibold text-center mx-4'>
                        <p className='text-black'>{profile.totalCommunityCount}</p>
                        <span className='text-gray-400'>Communtiy</span>
                    </div>
                </div>
            </div>
            {/* --------Tab Navigation (About, Community, Friends)------- */}
            <ul
                className='nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4'
                id='tabs-tabFill'
                role='tablist'
            >
                <li className='nav-item flex-auto text-center' role='presentation'>
                    <a
                        href='#tabs-homeFill'
                        className='
      nav-link
      w-full
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
      flex justify-center items-center
    '
                        id='tabs-home-tabFill'
                        data-bs-toggle='pill'
                        data-bs-target='#tabs-homeFill'
                        role='tab'
                        aria-controls='tabs-homeFill'
                        aria-selected='true'
                    >
                        <SettingFilled /> {/* <Icon /> */}
                        Settings
                    </a>
                </li>
                <li className='nav-item flex-auto text-center' role='presentation'>
                    <a
                        href='#tabs-profileFill'
                        className='
      nav-link
      w-full
  
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
      flex justify-center items-center
    '
                        id='tabs-profile-tabFill'
                        data-bs-toggle='pill'
                        data-bs-target='#tabs-profileFill'
                        role='tab'
                        aria-controls='tabs-profileFill'
                        aria-selected='false'
                    >
                        <People /> {/* <Icon /> */}
                        Community
                    </a>
                </li>
                <li className='nav-item flex-auto text-center' role='presentation'>
                    <a
                        href='#tabs-messagesFill'
                        className='
      nav-link
      w-full

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
      flex justify-center items-center
    '
                        id='tabs-messages-tabFill'
                        data-bs-toggle='pill'
                        data-bs-target='#tabs-messagesFill'
                        role='tab'
                        aria-controls='tabs-messagesFill'
                        aria-selected='false'
                    >
                        <Diversity3 /> {/* <Icon /> */}
                        Friends
                    </a>
                </li>
            </ul>
            <div className='tab-content' id='tabs-tabContentFill'>
                <div
                    className='tab-pane fade show active'
                    id='tabs-homeFill'
                    role='tabpanel'
                    aria-labelledby='tabs-home-tabFill'
                >
                    {/* --------About Compoenent------- */}
                    <Settings />
                </div>
                <div
                    className='tab-pane fade'
                    id='tabs-profileFill'
                    role='tabpanel'
                    aria-labelledby='tabs-profile-tabFill'
                >
                    {/* --------Community Compoenent------- */}
                    <Community />
                </div>
                <div
                    className='tab-pane fade'
                    id='tabs-messagesFill'
                    role='tabpanel'
                    aria-labelledby='tabs-profile-tabFill'
                >
                    {/* --------Friend Compoenent------- */}
                    <Friends />
                </div>
            </div>
        </>
    );
};

export default ProfileUser;
