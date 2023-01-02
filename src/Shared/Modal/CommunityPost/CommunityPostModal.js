import React, { useState } from 'react';
import './CommunityPostModal.css'
import { useForm } from 'react-hook-form';

const CommunityPost = ({ modal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [active, setActive] = useState(true);
    const [isPhoto, setIsPhoto] = useState(true);
    const blinkHandler = (p) => {
        setActive(p);

    }
    const blinkHandler2 = (p) => {
        setTimeout(() => {
            setActive(p);
            setIsPhoto(p)
        }, 1000);
    }
    const photoHandler = (q) => {
        setIsPhoto(q);
    }

    const handlePost = (data) => {
        console.log(data.postDesc)
        console.log(data.photo)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(handlePost)}>
                        <div className='flex items-center'>
                            <div className="w-14 mr-4">

                                <img src="https://placeimg.com/80/80/people" alt='User' className='rounded-full shadow-md' />

                            </div>
                            <div>
                                <h1 className='text-xl'>Write Something</h1>
                            </div>
                        </div>
                        <div>
                            <div>
                                <hr className='h-[1px] bg-slate-300 shadow-lg my-5'></hr>
                            </div>
                            
                                <div className='cursor'>
                                    <textarea type="textarea" {...register("postDesc", {

                                    })} className="textarea textarea-ghost resize-none w-full area rq-form-element text-lg" placeholder="Write from here" onClick={() => blinkHandler(false)}></textarea>
                                    <i className={`${active ? 'block' : 'invisible'}`}></i>
                                </div>
                                <div className={`flex justify-center mt-8 ${isPhoto ? 'block' : 'invisible'}`}>
                                    <div className="w-full">
                                        <div className="m-4">
                                            <label className="inline-block mb-2 text-gray-500">Upload
                                                Image(jpg,png,svg,jpeg)</label>
                                            <div className="flex items-center justify-center w-full">
                                                <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 cursor-pointer">
                                                    <div className="flex flex-col items-center justify-center pt-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path fill-rule="evenodd"
                                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                            Select a photo</p>
                                                    </div>
                                                    <input type="file" {...register("photo", {

                                                    })} className="opacity-0 " />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-2 space-x-4">
                                            <button className="px-4 py-2 text-white bg-red-500 rounded" onClick={() => photoHandler(false)}>Cannel</button>
                                        </div>
                                    </div>
                                </div>

                        </div>
                        <div className="modal-action flex items-center">
                            <label><input className='btn btn-accent mr-3' value="Post" type="submit" /></label>
                            <label htmlFor="my-modal" className="btn" onClick={() => blinkHandler2(true)}>Cancel</label>
                        </div>
                        </form>
                    </div>
                </div>
            
        </div>

    );
};

export default CommunityPost;