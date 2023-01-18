import { Add } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { AiOutlineCheck } from "react-icons/ai";


function CreateCommunityFriendList({friend, addedFriendData, setAddedFriendData, countFriends, setCountFriends}) {
    const [addedFriend, setAddedFriend] = useState(false);
   const {id, fname, lname, img, interest} = friend

   
    return (
        
                            <tr onClick={()=>setAddedFriendData([...addedFriendData, friend])}>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={img} width="40" height="40" alt="Alex Shatov" /></div>
                                        <div className="font-medium text-gray-800">{fname}</div>
                                        <span className="font-medium text-gray-800 ml-1">{lname}</span>
                                    </div>
                                </td>

                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium">{interest}</div>
                                </td>
                                <td onClick={()=>setAddedFriend(true)} className="text-center p-2 whitespace-nowrap">
                                    <button onClick={()=>setCountFriends(countFriends + 1)} className={`text-lg text-center ${addedFriend ? 'hidden':'visible'}`}>
                                        <Add color='success' />  {/* Add Icon */}
                                    </button>
                                    <button  className={`text-lg text-center ${addedFriend ? 'visible':'hidden'}`}>
                                        <AiOutlineCheck></AiOutlineCheck>
                                    </button>
                                </td>
                            </tr>
                          

                        
    )
}

export default CreateCommunityFriendList
