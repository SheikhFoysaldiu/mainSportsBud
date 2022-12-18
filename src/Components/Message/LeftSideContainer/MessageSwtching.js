import React from 'react'
import { Link } from 'react-router-dom'

function MessageSwtching() {
    return (

        <div className="mt-5">
            <ul className="flex flex-row items-center justify-between">
                <li>
                    <Link to='/'
                        className="flex items-center pb-3 text-xs font-semibold relative text-indigo-800">
                        <span>All Conversations</span>
                        <span className="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to='/'
                        className="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                        <span>Archived</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'
                        className="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                        <span>Starred</span>
                    </Link>
                </li>
            </ul>
        </div>

    )
}

export default MessageSwtching
