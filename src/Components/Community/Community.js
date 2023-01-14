import { SearchRounded } from '@material-ui/icons';
import React, { useState } from 'react'
import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import props2 from '../../Asset/Dummy/mycommunity.json';
import Loading from '../../Shared/Loading/Loading';
import MyCommunity from '../../Pages/Community/MyCommunity';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { API_URL } from '../../API/config';
import InfiniteScroll from 'react-infinite-scroll-component';



function Community() {
    const fetchMyCommunity = async ({ pageParam = 1 }) => {
        const url = `${API_URL}/api/v1/community/communities?page=${pageParam}&limit=${10}`
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await res.json();

        return {
            data: data.communities
        }
    }



    const {
        data,
        fetchNextPage,
        hasNextPage,
        status
    } = useInfiniteQuery({
        queryKey: ['myCommunities'],
        queryFn: fetchMyCommunity,
        getNextPageParam: (lastPage, pages) => {
            console.log("lastPage:", lastPage)
            console.log("pages:", pages)
            if (lastPage.data.length < 10) {
                return undefined
            }
            return pages.length + 1

        }
    })

    if (status === 'loading') {
        return <Loading></Loading>
    }
    if (status === 'error') {
        return <h1>Error Occurs!</h1>
    }




    return (
        <>
            <div className=' bg-white rounded-lg shadow-xl pb-10 '>

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
                    <h1 className='mt-4 p-2 m-2'>My Community </h1>
                </div>
                <div className="text-center text-2xl">
                    {
                        data.pages[0].length === 0 && data.pages.length === 1 &&
                        <h1> Empty Community List</h1>
                    }
                </div>


                <div id="scrollableDiv" className='overflow-y-scroll h-[450px]'>
                    <InfiniteScroll
                        dataLength={data.pages.length}
                        next={() => fetchNextPage()}

                        hasMore={hasNextPage}
                        loader={<h4>Loading...</h4>}

                    >

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4">

                            {data &&
                                data.pages.map((page, id) => {
                                    return page.data.map((community, id) => {
                                        return <MyCommunity community={community} key={id} />
                                    })
                                })}



                        </div>
                    </InfiniteScroll>
                </div>






            </div>

        </>
    )
}

export default Community
