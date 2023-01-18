import React, { useContext, useEffect, useState } from 'react';
import communityBanner from '../../../Asset/communityBanner/football.jpg'
import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';
import CommunityPostModalUpdate from '../../../Shared/Modal/CommunityPostModalUpdate/CommunityPostModalUpdate';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './CommunityPost.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../../Shared/Loading/Loading';

import { AuthContext } from '../../../Context/AuthProvider.js';

const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <AiOutlineDoubleRight></AiOutlineDoubleRight>,
    prevArrow: <AiOutlineDoubleLeft />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const CommunityPost = ({ post }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [p, setP] = useState(1)
    const q = 1
    console.log(post)
    const { user } = useContext(AuthContext)
    const { id, author, content, images, comments, likes, dislikes } = post
    const [cmnt, setCmnt] = useState([])
    const [data, setData] = useState(null)
    const [remove, setRemove] = useState(false)
    const [comment, setComment] = useState(false)
    const [dislikeCount, setDislikeCount] = useState(dislikes.length);
    const [likeCount, setLikeCount] = useState(likes.length);
    const [commentCount, setCommentCount] = useState(comments.length)

    useEffect(() => {
        setCmnt(comments.slice(0, p))
    }, [p])
    const handlePostRemove = () => {
        const proceed = window.confirm(`Are you sure you want to delete`)
        if (proceed) {
            setRemove(true)
            toast.success('Post Deleted Successfully', {
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
        }

    }

    const handleComment = () => {
        setComment(!comment)
    }

    const handlePostComment = (data, e) => {
        console.log(data.usercomment)
        setCommentCount(commentCount + 1)
        e.target.reset()
    }

    const commentShow = () => {
        setP(comments.length)
    }

    const handleDislikeCount = () => {
        setDislikeCount(dislikeCount + 1)
    }

    const handleLikeCount = () => {
        setLikeCount(likeCount + 1)
    }
    console.log(cmnt)
    return (
        // <></>
        <div className={`bg-white rounded-lg shadow-xl lg:mx-20 pb-5 mt-5 pt-5 ${remove ? "hidden" : "block"}`}>
            <div className='flex justify-between px-10 lg:px-20'>
                <div className='flex items-center'>
                    <div className="avatar mr-2 lg:mr-5">
                        <div className="w-8 lg:w-12 rounded">
                            <img src={author.profilePicture} alt="community Banner" />
                        </div>
                    </div>
                    <div>
                        <div className='my-0 mx-0'>
                            <h1 className='text-lg lg:text-xl my-0 ml-0'>{author.firstName} {author.lastName}</h1>
                        </div>
                        <div className='mx-0 my-0'>
                            <span className='text-xs my-0 ml-0'>22m</span>
                        </div>
                    </div>
                </div>
                <div className='z-20'>
                    <button className="btn btn-ghost btn-circle">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <BsThreeDots></BsThreeDots>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-20">
                                <li>

                                    <label htmlFor="update-modal" onClick={() => setData(post)} className="flex items-center">
                                        <p><FaRegEdit className='text-lg'></FaRegEdit></p>
                                        <p>Edit Post</p>
                                    </label>

                                </li>
                                <li onClick={() => handlePostRemove()} ><Link>
                                    <p><IoMdRemoveCircleOutline className='text-lg'></IoMdRemoveCircleOutline></p>
                                    <p>Remove</p>

                                </Link></li>

                            </ul>

                        </div>
                    </button>


                </div>
            </div>
            <div className='px-10 lg:px-20 my-5'>
                <hr className='h-[1px] bg-slate-300 shadow-lg'></hr>
                <p className='my-3'>{content}</p>
            </div>
            <div className='px-10 lg:px-24 '>
                <Slider {...settings} className="">
                    {
                        images.map(image => <div className='my-5'><img src={image} className='mx-auto h-80' alt='' /></div>)
                    }

                </Slider>

            </div>
            <div className='px-10 lg:px-20 my-8'>
                <div className='grid grid-cols-3 gap-2 lg:gap-5 my-4'>
                    <div className='flex items-center ml-[42%]'>
                        <p className='mr-1 lg:mr-2 text-sm lg:text-lg'><AiOutlineDislike></AiOutlineDislike></p>
                        <p className='text-sm lg:text-lg'>{dislikeCount}</p>
                    </div>
                    <div className='flex items-center ml-[42%]'>
                        <p className='mr-1 lg:mr-2 text-sm lg:text-lg'><FcLike></FcLike></p>
                        <p className='text-sm lg:text-lg'>{likeCount}</p>
                    </div>
                    <div className='flex items-center ml-[42%]'>
                        <p className='mr-1 lg:mr-2 text-sm lg:text-lg'><FaRegCommentAlt></FaRegCommentAlt></p>
                        <p className='text-sm lg:text-lg'>{commentCount}</p>
                    </div>
                </div>
                <hr className='h-[1px] bg-slate-300 shadow-lg'></hr>
                <div className='grid grid-cols-3 gap-2 lg:gap-5 my-4'>
                    <button onClick={handleDislikeCount} className='flex items-center btn btn-ghost normal-case py-2 px-0 lg:px-2'>
                        <p className='mr-1 lg:mr-2 text-sm lg:text-lg'><AiOutlineDislike></AiOutlineDislike></p>
                        <p className='text-sm lg:text-lg text-slate-600'>Dislike</p>

                    </button>
                    <button onClick={handleLikeCount} className='flex items-center btn btn-ghost normal-case py-2 px-0 lg:px-2'>
                        <p className='mr-1 lg:mr-2 text-sm lg:text-lg'><FcLike></FcLike></p>
                        <p className='text-sm lg:text-lg text-slate-600'>Like</p>
                    </button>
                    <button onClick={handleComment} className='flex items-center btn btn-ghost normal-case py-2 px-0 lg:px-2'>
                        <p className='mr-1 lg:mr-2 text-sm lg:text-lg'><FaRegCommentAlt></FaRegCommentAlt></p>
                        <p className='text-sm lg:text-lg text-slate-600'>Comment</p>
                    </button>
                </div>
                <hr className='h-[1px] bg-slate-300 shadow-lg'></hr>
                <div className={`my-8 ${comment ? 'block' : 'hidden'}`}>
                    <form onSubmit={handleSubmit(handlePostComment)} className='flex items-center'>
                        <div className="avatar mr-2 lg:mr-5">
                            <div className="w-8 lg:w-12 rounded-full">
                                <img src={author.profilePicture} alt="user" />
                            </div>
                        </div>
                        <div className='w-[80%]'>
                            <input type="text" {...register("usercomment")} placeholder="Type here" className="input input-bordered border-stone-500 w-full comment-input" />
                        </div>
                    </form>
                </div>
                <div>
                    <div className={` ${p > 1 ? 'h-full' : 'h-full'}`} id='scrollableDiv1'>

                        {
                            cmnt.length === 0 && <div className='flex items-center justify-center'>
                                <p className='text-lg'>No Comments</p>
                            </div>
                        }

                        <InfiniteScroll
                            dataLength={cmnt.length}
                            loader={<Loading></Loading>}
                            scrollableTarget="scrollableDiv1">
                            {
                                cmnt.length &&
                                cmnt.map(comment => <div key={comment.id} className="my-5 w-full lg:w-1/2">
                                    <div className='flex items-start'>
                                        <div className="avatar mr-2 lg:mr-5">
                                            <div className="w-8 lg:w-12 rounded-full">
                                                <img src={comment.userPhoto} alt="user" />
                                            </div>
                                        </div>
                                        <div className='bg-gray-200 p-3 rounded-3xl'>
                                            <div>
                                                <h1 className='text-left text-lg font-bold'>{comment.user}</h1>
                                            </div>
                                            <div>
                                                <p className='text-lg '>{comment.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </InfiniteScroll>

                    </div>
                    {
                        p === 1 &&
                        <button onClick={commentShow} className={`font-bold ${comments.length > 1 ? 'block' : 'hidden'}`}>view More</button>
                    }

                </div>

            </div>


            {
                data &&
                <CommunityPostModalUpdate data={data} ></CommunityPostModalUpdate>

            }
            <Toaster />
        </div >
    );
};

export default CommunityPost;