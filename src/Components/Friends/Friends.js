
import { SettingFilled, UserAddOutlined } from '@ant-design/icons';
import { CalendarMonth, PinDrop, Place, Recommend, SearchRounded } from '@mui/icons-material';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import React, { useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../API/config';


import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { getAge } from '../../Shared/Utitily/Utility';

const FriendItem = ({ item }) => {
    const params = useParams();
    const { user } = useContext(AuthContext)
    const { id, firstName, lastName, location, coverPicture, profilePicture, sports, dob } = item.friend
    console.log(item.friend)


    return (
        <Link to={`/main/profileUser/${id !== user.id ? id : ""} `}>
            <div className="flex flex-row shadow-lg rounded-lg border border-gray-200/80 bg-white mx-2 my-4">
                <div className="relative">
                    <img className="w-40 h-40 rounded-md object-contain" src={profilePicture}
                        alt="User" />
                    {/* Active Icon */}
                </div>

                <div className="flex flex-col px-6 mt-5 ">
                    <div className="flex h-8 flex-row">
                        <h2 className="text-lg font-semibold">{firstName} {lastName}</h2>
                    </div>

                    <div className="my-2 flex flex-row space-x-8">

                        <div className="flex flex-row">
                            <Recommend fontSize='small' />

                            <div className="text-xs text-gray-400/80 hover:text-gray-400">{sports.length === 0 ? "Empty Sport Choice" : sports[0].sport.name}</div>

                        </div>


                        <div className="flex flex-row">
                            <CalendarMonth fontSize='small' />

                            <div className="text-xs text-gray-400/80 hover:text-gray-400"> {getAge(dob)} Years</div>
                        </div>
                    </div>



                </div>
            </div>

        </Link>
    )
}

function Friends({ userId }) {
    // console.log("Friends:", userId)
    const fetchFriends = async ({ pageParam = 1 }) => {
        // const queryParam = "?page=" + page + "&limit=" + limit;
        // const url = apiPath + queryParam

        const url = `${API_URL}/api/v1/user/friendslist?page=${pageParam}&limit=${10}&userId=${userId}`
        console.log("url:", url)
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await res.json();
        return {
            data: data.friends
        }

    }


    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['myfriendList', userId],
        queryFn: fetchFriends,
        getNextPageParam: (lastPage, pages) => {
            console.log("lastPage:", lastPage)
            console.log("pages:", pages)
            if (lastPage.data.length < 1) {
                return undefined
            }
            return pages.length + 1

        }
    })

    if (status === 'loading') {
        return <Loading></Loading>
    }
    if (status === 'error') {
        return <div>Something went wrong</div>
    }




    return (


        <>
            <div className='bg-white rounded-lg shadow-xl pb-10 '>

                <div className='flex justify-center items-center px-6'>
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                            <SearchRounded />
                        </button>
                    </div>

                </div>
                <div>
                    <h1 className='mt-4 p-2 m-2'>Friends </h1>
                </div>

                {

                    data.pages[0].data.length === 0 && data.pages.length === 1
                    &&
                    <div className='flex justify-center items-center'>
                        <h1 className='text-gray-400'>No Friends</h1>
                    </div>


                }

                <div className='overflow-y-scroll h-[450px]' id='scrollableDiv1'>

                    <InfiniteScroll
                        dataLength={data?.pages.length}
                        next={() => fetchNextPage()}
                        hasMore={hasNextPage}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv1"

                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                            {
                                data &&
                                data.pages.map((page, id) => {
                                    return page.data.map((item, id) => {
                                        return <FriendItem item={item} key={id} />
                                    })
                                }
                                )

                            }

                        </div>
                    </InfiniteScroll>
                </div>

            </div>
        </>
    )
}

export default Friends