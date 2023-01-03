import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import communitycover from '../../../Asset/communityBanner/football.jpg'
import { AiFillSetting } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { BsBoxArrowLeft } from "react-icons/bs";
import Loading from '../../../Shared/Loading/Loading';
import postProps from '../../../Asset/Dummy/communitypost.json';
import CommunityPostModal from '../../../Shared/Modal/CommunityPost/CommunityPostModal'
import CommunityPost from './CommunityPost';


const MyCommunitySingle = () => {
    const [hasAccess, setHasAccess] = useState(true);
    const [isAdmin, setAdmin] = useState(false)
    const [posts, setPost] = useState([])
    
    const postParams = useParams()

    const [active, setActive] = React.useState(true);
    var images = [
        'https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg',
        'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        ];

    const getMyPosts = async () => {
        setPost(postProps)
        return postProps
    }

    useLayoutEffect(() => {
        getMyPosts(postParams.id)
    }, [])





    if (!posts) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-16 px-20 bg-gray-300 h-full'>
            <div className='bg-white rounded-lg shadow-xl mx-20 pb-10'>
                <div>
                    <img src={communitycover} alt="cover" class="w-full h-[400px] rounded-tl-lg rounded-tr-lg  object-cover object-top" />
                </div>
                <div className='my-4 mx-4'>
                    <a href='#' className='text-3xl font-bold'>Football Club</a>
                </div>
                <div className='my-4 mx-4 flex justify-between items-center'>
                    <div>
                        <div className="avatar-group -space-x-6">
                            <Link className="avatar">
                                <div className="w-12">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </Link>
                            <Link className="avatar">
                                <div className="w-12">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </Link>
                            <Link className="avatar">
                                <div className="w-12">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </Link>
                            <Link className="avatar placeholder">
                                <div className="w-12 bg-neutral-focus text-neutral-content">
                                    <span>+99</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Link className={`flex items-center mr-5 bg-primary p-1 px-2 rounded-lg hover:bg-blue-800 ${hasAccess ? 'block' : 'hidden'}`}>

                            <h1><AiFillSetting className='text-xl text-white font-bold mr-1 '> </AiFillSetting></h1>

                            <h1 className='text-lg text-white font-bold'>Settings</h1>
                        </Link>
                        <Link className='flex items-center mr-5 bg-green-600 p-1 px-2 hover:bg-green-800 rounded-lg'>
                            <h1><BsPlusLg className='text-lg text-white font-bold mr-1 '></BsPlusLg></h1>
                            <h1 className='text-lg text-white font-bold'>Invite</h1>
                        </Link>
                        <Link className={`flex items-center mr-5 bg-red-600 p-1 px-2 rounded-lg hover:bg-red-800 ${isAdmin ? 'hidden' : 'block'}`}>
                            <h1><BsBoxArrowLeft className='text-lg text-white font-bold mr-1 '></BsBoxArrowLeft></h1>
                            <h1 className='text-lg text-white font-bold'>Leave</h1>
                        </Link>
                    </div>
                </div>
                <div className='my-4 mx-4'>
                    <hr className='h-[1px] bg-slate-300 shadow-lg'></hr>
                    <div>
                        <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <a href="#tabs-home3" class="
      nav-link
      w-full
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
    " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
                                    aria-selected="true">Post</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#tabs-profile3" class="
      nav-link
      w-full
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
    " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                                    aria-controls="tabs-profile3" aria-selected="false">Members</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#tabs-messages3" class="
      nav-link
      w-full
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
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
                                    aria-controls="tabs-messages3" aria-selected="false">About</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div>
                <div class="tab-content" id="tabs-tabContent3">
                    <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                        <div className='bg-white rounded-lg shadow-xl mx-20 pb-10 mt-5 pt-5 flex justify-center items-center'>
                            <div className="w-14 mr-4">
                                
                                    <img src="https://placeimg.com/80/80/people" alt='User' className='rounded-full shadow-md' />
                                
                            </div>
                            <div className='w-1/2 cursor-pointer'>
                            <label htmlFor="my-modal" className="w-full btn btn-outline">Create your post</label>
                           
                                <CommunityPostModal></CommunityPostModal>
                            
                            
                            </div>
                        </div>
                        <div >
                        {
                            posts.length &&
                            posts.map(post=><CommunityPost key={post.id} post={post}></CommunityPost>)
                        }
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                        <div className='bg-white rounded-lg shadow-xl mx-20 pb-10 mt-5 pt-5 '>
                            profile
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                        <div className='bg-white rounded-lg shadow-xl mx-20 pb-10 mt-5 pt-5 '>
                            Search here
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyCommunitySingle;
