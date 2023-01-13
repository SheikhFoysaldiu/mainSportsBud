import React, { useEffect, useState } from 'react';
import { Avatar, Col, Divider, List, Row, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import tw from "tailwind-styled-components"
import { UserAddOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../API/config';
import { useInfiniteQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlinePersonAddAlt1, MdPersonAddAlt1 } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import CommunityMember from '../../Pages/Community/MyCommunitySingle/CommunityMember';

const Container = tw.div`
    px-0
    py-4
    shadow-lg
    whitespace-nowrap overflow-auto scrollbar-hide md:scrollbar-default 
`
const AddMeContiner = tw.div`
    flex
    justify-between
    items-center
`

const UserCardItem = ({ member }) => {
    const { id, fname, lname } = member
    return (
        <Link to={`main/profileUser/${id}`}>
            <div className='flex justify-between '>
                <div className='flex'>
                    <div className="avatar mr-3">
                        <div className="w-16 rounded">
                            <img src={"https://i.pravatar.cc/150?img=" + id}
                                alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='mx-0 mr-1 text-lg font-bold'>{fname}</span>
                            <span className='mx-0 text-lg font-bold'>{lname}</span>
                        </div>
                        <div>
                            <span className='mx-0 text-sm'>Football</span>
                        </div>
                    </div>
                </div>
                <div >
                </div>
            </div>
        </Link>
    )
}


const UserCard = () => {
    const params = useParams();
    // console.log("params:", params.id)
    const fetchSportsFollower = async ({ pageParam = 1 }) => {
        // const queryParam = "?page=" + page + "&limit=" + limit;
        // const url = apiPath + queryParam

        const url = `${API_URL}/api/v1/sport/sports/users/${params.id}?page=${pageParam}&limit=${10}`
        console.log("url", url)
        const res = await fetch(url, {
            headers: {
                method: 'GET',
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        });
        // console.log(res)
        const data = await res.json();
        // console.log("data:", data)
        return {
            data: data.users
        };

    }


    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isLoading,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['sportsFollower'],
        queryFn: fetchSportsFollower,
        getNextPageParam: (lastPage, pages) => {
            console.log("lastPage:", lastPage)
            console.log("pages:", pages)
            if (lastPage.data?.length < 10) {
                return undefined
            }
            return pages?.length + 1

        }
    })

    console.log("data:", data)
    // if (!isLoading) {
    //     return <Loading></Loading>;
    // }
    const member = [
        {
            id: 1,
            fname: "Foysal",
            lname: "Sheikh",
        },
        {
            id: 2,
            fname: "Foysal",
            lname: "Sheikh",
        },
        {
            id: 3,
            fname: "Foysal",
            lname: "Sheikh",
        },
        {
            id: 4,
            fname: "Foysal",
            lname: "Sheikh",
        },

        {
            id: 5,
            fname: "Foysal",
            lname: "Sheikh",
        },
        {
            id: 6,
            fname: "Foysal",
            lname: "Sheikh",
        },

        {
            id: 7,
            fname: "Foysal",
            lname: "Sheikh",
        },
        {
            id: 8,
            fname: "Foysal",
            lname: "Sheikh",
        },

        {
            id: 9,
            fname: "Foysal",
            lname: "Sheikh",
        },
        {
            id: 10,
            fname: "Foysal",
            lname: "Sheikh",
        },

        {
            id: 11,
            fname: "Foysal",
            lname: "Sheikh",
        },
        {
            id: 12,
            fname: "Foysal",
            lname: "Sheikh",
        },




    ]

    if (status === 'loading') {
        return <Loading></Loading>;
    }
    if (status === 'error') {
        return <span>Error: {error.message}</span>;
    }
    if (data.pages.length === 0) {
        return "No data";
    }
    return (

        <div className="h-screen w-full overflow-auto lg:overflow-hidden lg:hover:overflow-auto" id="scrollableDiv">
            <InfiniteScroll
                next={() => fetchNextPage()}
                scrollableTarget="scrollableDiv"
                hasMore={hasNextPage}
                loader={<h4>Loading...</h4>}
                // data?.pages?.reduce((acc, page) => acc + page.data.length, 0) || 0
                // dataLength={data.pages.length === 0 ? 0 : data.pages.reduce((acc, page) => acc + page.data.length, 0) || 0}
                dataLength={data.pages.length}
            >

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-48 lg:mb-56 mt-16 mx-0 lg:mx-28 h-[350px]">
                    {
                        data.pages.map((page, i) => {
                            return (
                                page.data.map((user, i) => {
                                    return (
                                        <UserCardItem
                                            key={i}
                                            member={user}
                                        />
                                    )
                                })
                            )
                        })

                    }

                    {
                        //if No data exits
                        // data.length === 0 &&
                        // <div className="flex justify-center items-center h-full w-full" >
                        //     <div className="flex flex-col justify-center items-center">
                        //         <h1 className="text-2xl font-bold text-gray-500">No Data Found</h1>
                        //     </div>

                        // </div>

                    }


                    {error && <div>Something went wrong ...</div>}
                    {isFetchingNextPage
                        ? 'Loading more...' : <p style={{ textAlign: "center" }}>
                            <b>No more User found!</b>
                        </p>}


                </div>
            </InfiniteScroll>


        </div >

    );
};
export default UserCard;