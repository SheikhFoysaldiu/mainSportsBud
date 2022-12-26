import React from 'react';
import MessageLeftHeader from '../../Components/Message/LeftSideContainer/MessageLeftHeader';
import MessageLeftItem from '../../Components/Message/LeftSideContainer/MessageLeftItem';
import MessageSwtching from '../../Components/Message/LeftSideContainer/MessageSwtching';
import MessageRightBottom from '../../Components/Message/MessegeRightContainer/MessageRightBottom';
import MessegeRightHeader from '../../Components/Message/MessegeRightContainer/MessegeRightHeader';

const Message = () => {
    return (
        <div className="flex flex-row h-screen antialiased text-gray-800">
            <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
                <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
                    {/* Message Title and Search */}
                    <MessageLeftHeader />
                    {/* All Conversations, Archived, Starred */}
                    <MessageSwtching />
                    {/* Message List */}
                    <div className="h-full overflow-hidden relative pt-2">
                        <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
                            <MessageLeftItem />
                        </div>
                        <div className="absolute bottom-0 right-0 mr-2">
                            <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                                <svg className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <MessegeRightHeader />


        </div>

    );
};

export default Message;