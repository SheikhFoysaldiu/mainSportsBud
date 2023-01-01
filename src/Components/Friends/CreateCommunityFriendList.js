import { Add } from '@material-ui/icons'
import React from 'react'



function CreateCommunityFriendList() {
    return (
        <div className="w-full  mx-auto bg-white rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Add Friend</h2>
            </header>
            <div className="p-4">
                <div className=" overflow-y-scroll h-[210px]">
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
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                        <div className="font-medium text-gray-800">Alex Shatov</div>
                                    </div>
                                </td>

                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium">Football</div>
                                </td>
                                <td className="text-center p-2 whitespace-nowrap">
                                    <button className="text-lg text-center">
                                        <Add color='success' />  {/* Add Icon */}
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}

export default CreateCommunityFriendList
