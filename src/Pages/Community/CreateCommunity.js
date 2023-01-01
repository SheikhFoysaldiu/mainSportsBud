import { Add } from '@material-ui/icons'

import React from 'react'
import CreateCommunityFriendList from '../../Components/Friends/CreateCommunityFriendList'

function CreateCommunity() {
    console.log('Hello')
    return (
        <>
            <div className='my-16'>

                <div className='text-bold-700   text-3xl text-center'>Create a Community</div>
                <form >
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                        <label for="dropzone-file" className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>

                                            <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Upload File</h2>

                                            <p className="mt-2 text-gray-500 tracking-wide">Upload or darg & drop your file PNG, JPG </p>

                                            <input id="dropzone-file" type="file" accept="image/*" className="hidden" />
                                        </label>

                                        <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating mb-3 ">

                                <input type="text" className="form-control
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

                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                                <div>
                                    <label for="description" className="block text-sm font-medium text-gray-700">Description</label>
                                    <div className="mt-1">
                                        <textarea id="description" name="Description" rows="14" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder=""></textarea>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Brief description for your community.
                                    </p>
                                </div>

                                {/* FrindList */}

                                <div className="flex flex-col justify-center antialiased  text-gray-600">

                                    <CreateCommunityFriendList /> {/* Friend List */}

                                </div>


                            </div>



                        </div>



                        <div className="bg-gray-50 px-10 py-8 sm:px-8 text-center">
                            <button
                                className="btn btn-outline btn-primary my-3 w-1/3 text-xl rounded-full text-black-600"

                            >
                                Create
                            </button>
                        </div>
                    </div>

                </form>

            </div >
        </>
    )
}

export default CreateCommunity
