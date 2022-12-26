import React from 'react'
import { Link } from 'react-router-dom'

import FriendRequests from '../../Asset/Dummy/FreindRequest'

const FriendRequest = ({ image, name }) => (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
        <div className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex-shrink-0">
                <img className="w-11 h-11 rounded-full" src={image} alt="image" />
                {/* <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                                <svg className="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            </div> */}
            </div>
            <div className="pl-3 w-full">
                <div className=''>
                    <span className="font-semibold text-gray-800">{name}</span>
                    <span className="text-gray-400"> wants to be your friend</span>
                </div>
                <div className="font-semibold p-1">
                    <a href="" className="text-blue-600 mr-2">Accept</a>
                    <a href="" className="text-gray-400">Decline</a>
                </div>
            </div>
        </div>
    </div>
)

function FriendRequestDropDown(props) {
    const { setFriendRequestDrowpDown } = props


    return (
        <div className="absolute flex flex-col z-20 top-[70px]   w-full max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700 right-[0]">
            <div className='flex justify-between items-center'>
                <div className="block py-2 px-4 font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Friend Requests
                </div>

                <button onClick={() => setFriendRequestDrowpDown(false)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close</span>

                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            {
                FriendRequests.map(({ id, ...otherPros }) => (
                    <FriendRequest key={id} {...otherPros} />
                ))
            }


        </div>

    )
}

export default FriendRequestDropDown
