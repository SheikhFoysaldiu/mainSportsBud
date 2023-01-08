
import { SettingFilled, UserAddOutlined } from '@ant-design/icons';
import { CalendarMonth, PinDrop, Place, Recommend, SearchRounded } from '@mui/icons-material';

import React from 'react'
import { Link } from 'react-router-dom';

import ListFriends from '../../Asset/Dummy/Friends'

import profile from '../../Asset/person/profile.png';

const FriendItem = ({ item }) => {

    return (<Link to='/main/profileUser/1'>
        <div className="flex flex-row shadow-lg rounded-lg border border-gray-200/80 bg-white mx-2 my-4">
            <div className="relative">
                <img className="w-40 h-40 rounded-md object-cover" src={profile}
                    alt="User" />
                {/* Active Icon */}
            </div>

            <div className="flex flex-col px-6 mt-5 ">
                <div className="flex h-8 flex-row">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>

                <div className="my-2 flex flex-row space-x-8">

                    <div className="flex flex-row">
                        <Recommend fontSize='small' />

                        <div className="text-xs text-gray-400/80 hover:text-gray-400">{item.interestedIn}</div>
                    </div>


                    <div className="flex flex-row">
                        <CalendarMonth fontSize='small' />

                        <div className="text-xs text-gray-400/80 hover:text-gray-400">{item.age} Years</div>
                    </div>
                </div>



            </div>
        </div>

    </Link>
    )
}

function Friends() {
    const [menu, setmenu] = React.useState(false);
    return (
        <>


            <div className='h-full bg-white rounded-lg shadow-xl pb-10 '>

                <div className='flex justify-center items-center px-6'>
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                            <SearchRounded />
                        </button>
                    </div>

                </div>
                <div className="mt-4 h-0.5 w-full bg-gray-200"></div>
                <div>
                    <h1 className='mt-4 p-2 m-2'>Friends </h1>
                </div>
                <div class="text-center text-2xl">
                    {
                        ListFriends.length === 0 &&
                        <h1>Empty Friend List</h1>
                    }
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-scroll h-[650px]">
                    {
                        ListFriends.length > 0 &&
                        ListFriends.map((item, index) => (
                            <FriendItem item={item} key={index} />
                        )
                        )

                    }

                </div>


            </div>
        </>
    )
}

export default Friends