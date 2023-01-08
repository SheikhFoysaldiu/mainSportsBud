import { SearchRounded } from '@material-ui/icons';
import React, { useState } from 'react'
import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import props2 from '../../Asset/Dummy/mycommunity.json';
import Loading from '../../Shared/Loading/Loading';
import MyCommunity from '../../Pages/Community/MyCommunity';
const CommunityItem = ({ item }) => {

    return (
        <>
            <MyCommunity mycommunity={item} />
        </>
    )
}



function Community() {
    const [mycommunities, setMyCommunities] = useState([])

    const communityParams = useParams();

    useLayoutEffect(() => {
        getMyCommunities(communityParams.id);
    }, []);

    const getMyCommunities = async () => {
        setMyCommunities(props2)
        return props2

    }
    if (!mycommunities) {
        return <Loading></Loading>
    }



    return (
        <>
            <div className='h-full bg-white rounded-lg shadow-xl pb-10 '>

                <div className='flex justify-center items-center px-6'>
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                            <SearchRounded />
                        </button>
                    </div>

                </div>
                <div className="mt-4 h-0.5 w-full bg-gray-200"></div>
                <div>
                    <h1 className='mt-4 p-2 m-2'>My Community </h1>
                </div>
                <div class="text-center text-2xl">
                    {
                        mycommunities.length === 0 &&
                        <h1>Empty Community List</h1>
                    }
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-scroll h-[650px] mx-4">
                    {
                        mycommunities.length > 0 &&
                        mycommunities.map((item, index) => (
                            <CommunityItem item={item} key={index} />
                        )
                        )

                    }

                </div>


            </div>

        </>
    )
}

export default Community
