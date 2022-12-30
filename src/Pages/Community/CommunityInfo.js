import React from 'react'
import CommunityDetails from "../../Asset/Dummy/CommunityInfo.js"
function CommunityInfo() {
    return (
        <>
            {/* Header Section */}
            <div class="h-full bg-gray-200">
                <div class="bg-white rounded-lg shadow-xl pb-8">
                    <div class="w-full h-[450px] ">
                        <img src={CommunityDetails.picture} class="w-full h-full rounded-tl-lg rounded-tr-lg  object-cover object-top" />
                    </div>
                    <div className='flex items-center justify-between p-3'>
                        <div className='text-xl text-gray-900 font-bold'>{CommunityDetails.name}</div>

                        <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                            </svg>
                            <span>Join</span>
                        </button>
                    </div>
                </div>
                {/* Info Section */}
                <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                    <div class="w-full flex flex-col 2xl:w-1/3">
                        <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 class="text-xl text-gray-900 font-bold">Community Info</h4>
                            <ul class="mt-2 text-gray-700">
                                <li class="flex border-y py-2">
                                    <span class="font-bold w-24">Name :</span>
                                    <span class="text-gray-700">{CommunityDetails.name}</span>
                                </li>
                                <li class="flex border-b py-2">
                                    <span class="font-bold w-24">Members :</span>
                                    <span class="text-gray-700">{CommunityDetails.membersCount}</span>
                                </li>
                                <li class="flex border-b py-2">
                                    <span class="font-bold w-24">Created By :</span>
                                    <span class="text-gray-700">{CommunityDetails.createdBy}</span>
                                </li>
                                <li class="flex border-b py-2">
                                    <span class="font-bold w-24">Sports : </span>
                                    <span class="text-gray-700">{CommunityDetails.sports}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Description Section */}
                    <div class="flex flex-col w-full 2xl:w-2/3">
                        <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 class="text-xl text-gray-900 font-bold">Description</h4>
                            <p class="mt-2 text-gray-700">{CommunityDetails.description}</p>
                        </div>


                    </div>
                </div>
                {/* Connection Section */}
                <div class="bg-white rounded-lg shadow-xl p-8">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xl text-gray-900 font-bold">Connections (5001)</h4>
                    </div>
                    <div class="flex mb-5 -space-x-4">
                        {
                            CommunityDetails.members.map(
                                member => (
                                    <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                                        <img src={member.picture} class="w-16 h-16 rounded-full" />
                                    </a>
                                )
                            )
                        }
                    </div>
                </div>
            </div>



        </>
    )
}

export default CommunityInfo