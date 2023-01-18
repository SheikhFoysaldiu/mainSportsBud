import { Add } from '@material-ui/icons'
import { useForm } from 'react-hook-form';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CreateCommunityFriendList from '../../Components/Friends/CreateCommunityFriendList'
import { useParams } from 'react-router-dom';
import friendProps from '../../Asset/Dummy/user.json';
import Loading from '../../Shared/Loading/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function CreateCommunity() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [uploadImage, setUploadImage] = useState(null)
    const [imgFile, setImageFile] = useState(null)
    const [friends, setFriends] = useState([])
    const friendParams = useParams()
    const [countFriends, setCountFriends] = useState(0);
    const [addedFriendData, setAddedFriendData] = useState([]);
    const [isTrue, setIsTrue] = useState(true)

   
   
       useEffect(()=>{
        if(addedFriendData.length===3){
            setIsTrue(false)
        }
       
       },[addedFriendData])
   

    const getFriends = async () => {
        setFriends(friendProps)
        return friendProps;
    }

    useLayoutEffect(() => {
        getFriends(friendParams.id)
    }, [])

    if (!friends) {
        return <Loading></Loading>
    }

    const previewImage = (event) => {
        const imageFiles = event.target.files;
        setImageFile(imageFiles[0])
        const imageFilesLength = imageFiles.length;
        if (imageFilesLength > 0) {
            const imageSrc = URL.createObjectURL(imageFiles[0]);
            setUploadImage(imageSrc)

        }

    };

    const handleCommunity = (data) => {

        if (imgFile) {
            const formData = new FormData();
            formData.append('image', imgFile)
            console.log(formData)
        }
        console.log(data.communityName, data.description)
    }
    
   
    return (
        <>
            <div className='my-16'>

                <div className='text-lg lg:text-2xl text-center mt-20 font-bold'>Create your Community</div>
                <form onSubmit={handleSubmit(handleCommunity)}>
                    <div className="shadow  overflow-y-auto sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                            <div className="form-floating mb-3 ">

                                <input type="text" {...register("communityName", {
                            required: "Community name is required"
                        })} className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput" className="text-gray-700">Community Name*</label>

                                <p className="mt-2 text-sm text-gray-500">
                                    Give a name to your community which is required.
                                </p>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center '>
                                <div>
                                    <label for="description" className="block text-sm font-medium text-gray-700 mb-3">Description*</label>
                                    <div className="">
                                        <textarea id="description" {...register("description", {
                            required: "Community description is required"
                        })} rows="14" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none" placeholder=""></textarea>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Brief description for your community is required*.
                                    </p>
                                </div>

                                {/* FrindList */}

                                <div className='mt-8'>
                                    <div className="flex flex-col justify-center text-gray-600">
                                        <div className="w-full  mx-auto bg-white rounded-md border border-gray-200">
                                            <header className="px-5 py-4 border-b border-gray-100">
                                                <h2 className="font-semibold text-gray-800">Add Friend</h2>
                                            </header>
                                            <div className="p-4">
                                                <div className=" h-[210px] overflow-hidden hover:overflow-y-scroll" id='scrollableDiv'>
                                                    <InfiniteScroll
                                                        dataLength={friends.length}
                                                        loader={<Loading></Loading>}
                                                        scrollableTarget="scrollableDiv">
                                                        <table className="table-auto w-full">
                                                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                                <tr>
                                                                    <th className="p-2 whitespace-nowrap">
                                                                        <div className="font-semibold text-left">Name</div>
                                                                    </th>

                                                                    <th className="p-2 whitespace-nowrap">
                                                                        <div className="font-semibold text-left">Interested</div>
                                                                    </th>
                                                                    <th className="p-2 whitespace-nowrap">
                                                                        <div className="font-semibold text-center">Status</div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="text-sm divide-y divide-gray-100" >




                                                                {
                                                                    friends.length &&
                                                                    friends.map(friend => <CreateCommunityFriendList key={friend.id} friend={friend}
                                                                        addedFriendData={addedFriendData}
                                                                        setAddedFriendData={setAddedFriendData}
                                                                        countFriends={countFriends} setCountFriends={setCountFriends}></CreateCommunityFriendList>)
                                                                }


                                                            </tbody>

                                                        </table>
                                                    </InfiniteScroll>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                  
                                        <p className={`mt-2 text-sm text-gray-500 ${countFriends=== 0 ? 'block' : 'hidden'}`}>
                                            Add at least three of your friends
                                        </p>
                                
                                        <p className={`mt-2 text-sm text-gray-500 ${countFriends=== 1 ? 'block' : 'hidden'}`}>
                                            You have added {countFriends} friend
                                        </p>
                                    
                                        <p className={`mt-2 text-sm text-gray-500 ${countFriends> 1 ? 'block' : 'hidden'}`}>
                                            You have added {countFriends} friends
                                        </p>
                                    

                                </div>
                            </div>

                            <div>
                                <div className=''>
                                    <h1 className='my-3'>Set a group banner</h1>
                                    <div class="image-preview-container">
                                        <div class="preview">
                                            <img src={uploadImage} alt="upload" className={`${uploadImage ? 'block' : 'hidden'}`} id="preview-selected-image" />
                                        </div>
                                        <label>Upload Image
                                            <input type="file" id="file-upload" accept="image/png , image/jpeg, image/webp" onChange={previewImage} />
                                        </label>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>

                            </div>

                        </div>



                        <div className="bg-gray-50 px-10 py-8 sm:px-8 text-center">
                            <input type='submit'
                                className="btn btn-outline btn-primary my-3 w-1/3 text-xl rounded-full text-black-600" disabled={isTrue} Value='Create Community'

                            />
                             
                            
                        </div>
                    </div>

                </form>

            </div >
        </>
    )
}

export default CreateCommunity
