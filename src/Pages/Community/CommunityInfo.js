import { useQueries, useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../API/config.js'
import CommunityDetails from "../../Asset/Dummy/CommunityInfo.js"
import { AuthContext } from '../../Context/AuthProvider.js'
import Loading from '../../Shared/Loading/Loading.js'
function CommunityInfo() {
    const params = useParams()
    const { user } = useContext(AuthContext)

    const { data, isLoading, isError } = useQuery({

        queryFn: ['SingleCommunityInfo', params?.id],
        queryFn: async () => {
            const url = `${API_URL}/api/v1/community/communities/${params.id}`
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return { data: data.community };
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        return <h1>Error Occurs!</h1>
    }
    if (!data) {
        return <h1>Not Found!</h1>
    }

    const { name: cName, image: cImage, description: cDescription, members: cMember, owner: cOwner, sport: cSport } = data.data
    return (
        <>
            {/* Header Section */}
            <div className="h-full bg-gray-300">
                <div className="bg-white rounded-lg shadow-xl pb-8">
                    <div className="w-full h-[450px] ">
                        <img src={cImage[cImage.length - 1]} alt="cover" className="w-full h-full rounded-tl-lg rounded-tr-lg  object-cover object-center" />
                    </div>
                    <div className='flex items-center justify-between p-3 mx-5'>
                        <div className='text-xl text-gray-900 font-bold '>{cName}</div>

                        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                            </svg>
                            <span>Join</span>
                        </button>
                    </div>
                </div>
                {/* Info Section */}
                <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                    <div className="w-full flex flex-col 2xl:w-1/3">
                        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 className="text-xl text-gray-900 font-bold">Community Info</h4>
                            <ul className="mt-2 text-gray-700">
                                <li className="flex border-y py-2">
                                    <span className="font-bold w-24">Name :</span>
                                    <span className="text-gray-700">{cName}</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Members :</span>
                                    <span className="text-gray-700">{cMember.length}</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Created By :</span>
                                    <span className="text-gray-700">{cOwner.firstName} {cOwner.lastName}</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Sports : </span>
                                    <span className="text-gray-700">{cSport.name}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Description Section */}
                    <div className="flex flex-col w-full 2xl:w-2/3">
                        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 className="text-xl text-gray-900 font-bold">Description</h4>
                            <p className="mt-2 text-gray-700">{cDescription}</p>
                        </div>


                    </div>
                </div>
                {/* Connection Section */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl text-gray-900 font-bold">Connections ({cMember.length})</h4>
                    </div>
                    <div className="flex mb-5 -space-x-4">
                        {
                            cMember.map((member, key) => (

                                <Link to={`/main/profileUser/${member.user.id === user.id ? "" : member.user.id}`} className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                                    <img src={member.user.profilePicture} alt='member' className="w-16 h-16 rounded-full" />
                                </Link>
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