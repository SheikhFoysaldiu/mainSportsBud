import React, { useState } from 'react';
import communityBanner from '../../../Asset/communityBanner/football.jpg'
import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import CommunityPostModalUpdate from '../../../Shared/Modal/CommunityPostModalUpdate/CommunityPostModalUpdate';
import './CommunityPost.css';
import { Carousel } from 'antd';

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const CommunityPost = ({ post }) => {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const { id, user, userName, postDetails } = post
    const [data, setData] = useState(null)
    return (
        <div className='bg-white rounded-lg shadow-xl lg:mx-20 pb-10 mt-5 pt-5 '>
            <div className='flex justify-between px-20'>
                <div className='flex items-center'>
                    <div className="avatar mr-5">
                        <div className="w-12 rounded">
                            <img src={user} alt="community Banner" />
                        </div>
                    </div>
                    <div>
                        <div className='my-0'>
                            <h1 className='text-xl my-0'>{userName}</h1>
                        </div>
                        <div className='mx-0 my-0'>
                            <span className='text-xs my-0 ml-0'>22m</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <BsThreeDots></BsThreeDots>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                                <li>

                                    <label htmlFor="update-modal" onClick={() => setData(post)} className="flex items-center">
                                        <p><FaRegEdit className='text-lg'></FaRegEdit></p>
                                        <p>Edit Post</p>
                                    </label>

                                </li>
                                <li><Link>
                                    <p><IoMdRemoveCircleOutline className='text-lg'></IoMdRemoveCircleOutline></p>
                                    <p>Remove</p>

                                </Link></li>

                            </ul>

                        </div>
                    </button>


                </div>
            </div>
            <div className='px-20 my-5'>
                <hr className='h-[1px] bg-slate-300 shadow-lg'></hr>
                <p className='my-3'>{postDetails}</p>
            </div>
            <div>
                <Carousel afterChange={onChange}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>

            </div>


            {
                data &&
                <CommunityPostModalUpdate data={data} ></CommunityPostModalUpdate>
                
            }

        </div>
    );
};

export default CommunityPost;