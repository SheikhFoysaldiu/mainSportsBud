import React, { useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Setting.css'
import { AiTwotoneSetting } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import Loading from '../../../Shared/Loading/Loading';
import { useParams } from 'react-router-dom';
import memberProps from '../../../Asset/Dummy/user.json'
import MemberSetting from './MemberSetting';
import InfiniteScroll from 'react-infinite-scroll-component';
import { API_URL } from '../../../API/config';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const Setting = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [uploadImage, setUploadImage] = useState(null)
    const [imgFile, setImageFile] = useState(null)
    const [members, setMembers] = useState([])
    const params = useParams()
    const previewImage = (event) => {

        const imageFiles = event.target.files;
        console.log(imageFiles[0])
        setImageFile(imageFiles[0])
        const imageFilesLength = imageFiles.length;
        if (imageFilesLength > 0) {
            const imageSrc = URL.createObjectURL(imageFiles[0]);
            setUploadImage(imageSrc)

        }

    };

    const fetchCommunityInfo = async () => {
        const url = `${API_URL}/api/v1/community/communities/${params.id}`
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await res.json();
        console.log(data)
        return data.community

    }

    const CommunityInfo = useQuery({
        queryKey: ['communitySettingsInfo', params.id],
        queryFn: fetchCommunityInfo
    })









    const fetchCommunityMember = async ({ pageParam = 1 }) => {
        const url = `${API_URL}/api/v1/community/members/${params.id}?page=${pageParam}&limit=${10}`
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
            data: data.members ? data.members : []
        }
    }

    const CommunityMembers = useInfiniteQuery({
        queryKey: ['communitySettingsMembers', params?.id],
        queryFn: fetchCommunityMember,
        getNextPageParam: (lastPage, pages) => {
            console.log("lastPage:", lastPage)
            console.log("pages:", pages)
            if (lastPage.data.length < 1) {
                return undefined
            }
            return pages.length + 1
        }

    })

    if (!CommunityInfo.data) {
        return <Loading></Loading>
    }
    if (CommunityInfo.isLoading) {
        return <Loading></Loading>
    }
    if (!CommunityMembers.data) {
        return <Loading />
    }

    if (CommunityMembers.isLoading) {
        return <Loading />
    }
    if (CommunityMembers.isError) {
        return <h1>Error Occurs</h1>
    }

    const handleSetting = (data) => {

        if (imgFile) {
            const formData = new FormData();
            formData.append('image', imgFile)
            console.log(formData)
        }

    }
    const { image: cImage, name: cName, description: cDes } = CommunityInfo.data

    return (
        <div className='mt-16 w-full'>
            <div className='h-full bg-white shadow-lg px-5 py-3 fixed w-[300px] hidden lg:block'>
                <div class="flex items-start">
                    <ul class="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4 ver" id="tabs-tabVertical"
                        role="tablist">
                        <li class="nav-item flex-grow text-center" role="presentation">
                            <a href="#tabs-groupSetting" class="
          nav-link
          flex
          items-center
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100 hover:rounded-2xl
          focus:border-transparent
          active
        " id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-groupSetting" role="tab"
                                aria-controls="tabs-groupSetting" aria-selected="true">
                                <p className='mr-3 text-lg text-black'><AiTwotoneSetting></AiTwotoneSetting></p>
                                <p className='text-lg text-black'> Group Setting</p>

                            </a>
                        </li>
                        <li class="nav-item flex-grow text-center" role="presentation">
                            <a href="#tabs-memberSetting" class="
          nav-link
          flex
          items-center
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100 hover:rounded-2xl
          focus:border-transparent
        " id="tabs-profile-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-memberSetting" role="tab"
                                aria-controls="tabs-memberSetting" aria-selected="false">
                                <p className='mr-3 text-lg text-black'><BsPeopleFill></BsPeopleFill></p>
                                <p className='text-lg text-black'>Members</p>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='block lg:hidden'>
                <ul class="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  px-10
  mb-4
" id="tabs-tabJustify" role="tablist">
                    <li class="nav-item flex-grow text-center" role="presentation">
                        <a href="#tabs-groupSetting" class="
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
    " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-groupSetting" role="tab"
                            aria-controls="tabs-groupSetting" aria-selected="true">Group Setting</a>
                    </li>
                    <li class="nav-item flex-grow text-center" role="presentation">
                        <a href="#tabs-memberSetting" class="
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
    " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-memberSetting" role="tab"
                            aria-controls="tabs-memberSetting" aria-selected="false">Member</a>
                    </li>
                </ul>
            </div>

            <div className='flex justify-center items-center ml-0 lg:ml-[300px]'>
                <div class="tab-content w-4/5" id="tabs-tabContentVertical">
                    <div class="tab-pane fade show active" id="tabs-groupSetting" role="tabpanel"
                        aria-labelledby="tabs-home-tabVertical">
                        <div className='py-5'>
                            <form onSubmit={handleSubmit(handleSetting)}>
                                <div className='flex items-center justify-center my-5'>
                                    <label><input className="btn bg-primary hover:bg-blue-700 mr-3" value="Save" type="submit" /></label>
                                    <label><input className="btn bg-red-700 hover:bg-red-800 mr-3" value="Reset" type="reset" /></label>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label htmlFor="">Group Name</label>
                                        <input type="text" {...register("name")} placeholder="Type here" className="input input-bordered input-primary w-full mt-2 " defaultValue={cName} />
                                    </div>
                                    <div>
                                        <label htmlFor="">Category</label>
                                        <input type="text" {...register("category")} placeholder="Type here" className="input input-bordered input-primary w-full mt-2" defaultValue="Football" />
                                    </div>



                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="">Group Desc.</label>
                                    <textarea {...register("desc")} className="textarea textarea-primary w-full resize-none mt-2" rows='10' placeholder="Type Here" defaultValue={cDes} ></textarea>
                                </div>
                                <div className='mt-4'>

                                    <h1 className='my-3'>Change your group banner</h1>
                                    <div class="image-preview-container">
                                        <div class="preview">
                                            <img src={uploadImage} alt="upload" className={`${uploadImage ? 'block' : 'hidden'}`} id="preview-selected-image" />
                                        </div>
                                        <label>Upload Image
                                            <input type="file" id="file-upload" accept="image/png , image/jpeg, image/webp" onChange={previewImage} />
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="tab-pane fade h-[450px]" id="tabs-memberSetting" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">

                        <InfiniteScroll
                            dataLength={CommunityMembers?.data?.pages?.length}
                            next={() => CommunityMembers?.fetchNextPage()}
                            hasMore={CommunityMembers?.hasNextPage}
                            scrollableTarget="scrollableDiv"
                        >

                            <div className='p-0 lg:p-5 grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-5 lg:gap-x-32 mt-5'>
                                {CommunityMembers?.data &&
                                    CommunityMembers?.data?.pages?.map((page, id) => {
                                        return page?.data?.members?.map((member, id) => {
                                            return <MemberSetting member={member} key={id} />
                                        })
                                    })}

                            </div>

                        </InfiniteScroll>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;