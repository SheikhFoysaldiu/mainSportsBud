import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../API/config';
import { AuthContext } from '../../Context/AuthProvider';
import CommunityPost from '../../Pages/Community/MyCommunitySingle/CommunityPost';

import Loading from '../../Shared/Loading/Loading';

import CommunityPostModal from '../../Shared/Modal/CommunityPost/CommunityPostModal'

const CommunityPostTab = () => {
    const { user } = useContext(AuthContext)

    const params = useParams()
    const fetchCommunityPost = async ({ pageParam = 1 }) => {
        const url = `${API_URL}/api/v1/community/posts/${params.id}?page=${pageParam}&limit=${10}`
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await res.json();
        console.log(data)
        return {
            data: data.posts
        }
    }
    const CommunityPostData = useInfiniteQuery({
        queryKey: ['communityPost', params?.id],
        queryFn: fetchCommunityPost,
        getNextPageParam: (lastPage, pages) => {
            console.log("lastPage:", lastPage)
            console.log("pages:", pages)
            if (lastPage.data.length < 1) {
                return undefined
            }
            return pages.length + 1
        }

    })
    if (!CommunityPostData.data) {
        return <Loading />
    }
    if (CommunityPostData.isLoading) {
        return <Loading />
    }

    if (CommunityPostData.isError) {
        return <h1>Error Occurs</h1>
    }

    console.log(CommunityPostData.data)
    return (
        <>
            <div className='bg-white rounded-lg shadow-xl mx-0 lg:mx-20 pb-5 mt-5 pt-5 flex justify-center items-center'>
                <div className="w-10 lg:w-14 mr-4">

                    <img src={user?.profilePicture} alt='User' className='rounded-full shadow-md' />

                </div>
                <div className='w-1/2 cursor-pointer'>
                    <label htmlFor="my-modal" className="w-full btn btn-outline">Create your post</label>

                    <CommunityPostModal refetch={CommunityPostData.refetch} />


                </div>
            </div>
            <InfiniteScroll
                dataLength={CommunityPostData?.data?.pages?.length}
                next={() => CommunityPostData?.fetchNextPage()}
                hasMore={CommunityPostData?.hasNextPage}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"


            >


                {
                    CommunityPostData?.data &&
                    CommunityPostData?.data?.pages?.map((page, id) => {
                        return page.data.map((post, id) => {
                            return <CommunityPost post={post} key={id} />
                        })
                    })
                }


            </InfiniteScroll>
        </>
    );
}

export default CommunityPostTab;
