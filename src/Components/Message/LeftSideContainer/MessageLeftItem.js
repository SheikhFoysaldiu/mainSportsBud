import React from 'react'
import MessegeRightHeader from '../MessegeRightContainer/MessegeRightHeader'

function MessageLeftItem() {
    return (
        <div className="flex flex-row items-center p-4">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                T
            </div>
            <div className="flex flex-col flex-grow ml-3">
                <div className="flex items-center">
                    <div className="text-sm font-medium">Sarah D</div>
                    <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                </div>
                <div className="text-xs truncate w-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloribus?</div>
            </div>
        </div>



    )
}

export default MessageLeftItem
