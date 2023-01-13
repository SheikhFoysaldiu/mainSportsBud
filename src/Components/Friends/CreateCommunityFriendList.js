import { Add } from '@material-ui/icons'
import React, { useState } from 'react'



function CreateCommunityFriendList({friend}) {
   const {id, fname, lname, img, interest} = friend

    const friendHandle = () =>
    {

    }
    return (
        
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={img} width="40" height="40" alt="Alex Shatov" /></div>
                                        <div className="font-medium text-gray-800">{fname}</div>
                                    </div>
                                </td>

                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium">{interest}</div>
                                </td>
                                <td className="text-center p-2 whitespace-nowrap">
                                    <button onClick={friendHandle} className="text-lg text-center">
                                        <Add color='success' />  {/* Add Icon */}
                                    </button>
                                </td>
                            </tr>
                          

                        
    )
}

export default CreateCommunityFriendList
