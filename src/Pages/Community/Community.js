import React, { useLayoutEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import "./Community.css";
import props from "../../Asset/Dummy/suggestedcommunity.json";
import props2 from "../../Asset/Dummy/mycommunity.json";
import SuggestedCommunities from "./SuggestedCommunities";
import { FaPlusCircle } from "react-icons/fa";
import MyCommunity from "./MyCommunity";

const Community = () => {
    const [mycommunities, setMyCommunities] = useState([]);

    const communityParams = useParams();

    const [active, setActive] = React.useState(true);
    useLayoutEffect(() => {
        getMyCommunities(communityParams.id);
    }, []);

    const placeholderToggle = () => {
        setActive(false);
    };

    const placeholder = () => {
        setActive(true);
    };

    const [communities, setCommunities] = React.useState([]);

    const params = useParams();
    const getCommunities = async () => {
        setCommunities(props);
        return props;
    };

    useLayoutEffect(() => {
        getCommunities(params.id);
    }, []);

    if (!communities) {
        return <Loading></Loading>;
    }

    const getMyCommunities = async () => {
        setMyCommunities(props2);
        return props2;
    };

    if (!mycommunities) {
        return <Loading></Loading>;
    }

    // const { data: communities = [], refetch, isLoading } = useQuery({
    //     queryKey: ['communities'],
    //     queryFn: async () => {
    //         console.log('ehg')
    //         const res = await fetch('suggestedcommunity.json');
    //         const data = await res.json();
    //         console.log(data);
    //         return data
    //     }
    // });

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div className='grid grid-cols-3 bg-slate-300 mt-16 fixed'>
            
            <div className='bg-slate-200 shadow-lg hidden lg:block p-6  pb-20 s'>
                <div className='flex items-center mb-6'>
                    <div className='w-14 mr-4'>
                        <img
                            src='https://placeimg.com/80/80/people'
                            alt='User'
                            className='rounded-full shadow-md'
                        />
                    </div>
                    <div>
                        <h3 className='text-3xl'>Sakir Hossain Faruque</h3>
                    </div>
                </div>
                <button className='m-2 flex items-center mb-10'>
                    <div className='w-7 mr-4'>
                        <FaPlusCircle className='text-3xl w-7 text-blue-600'></FaPlusCircle>
                    </div>
                    <div>
                        <h3 className='text-xl text-blue-600'>Create your own community</h3>
                    </div>
                </button>
                <div>
                    <div>
                        <h1 className='text-lg text-slate-500 text-left'>My Community</h1>
                        <hr className='h-[4px] bg-slate-300 shadow-lg'></hr>
                    </div>
                    <div>
                        {mycommunities.map((mycommunity) => (
                            <MyCommunity
                                key={mycommunity.id}
                                mycommunity={mycommunity}
                            ></MyCommunity>
                        ))}
                    </div>
                </div>
            </div>
            <div className='col-span-3 lg:col-span-2'>
                <div className='flex justify-center items-center'>
                    <div className='w-3/4 my-6 z-49 relative mr-5 lg:mr-0'>
                        <form action=''>
                            <FcSearch className='absolute search'> </FcSearch>
                            <input
                                type='text'
                                placeholder='Search your community'
                                onFocus={placeholderToggle}
                                onBlur={placeholder}
                                className={`in input input-bordered w-full  placeholder:p-[-1px] ${active ? "placeholder:block" : "placeholder:invisible"
                                    } `}
                            />
                        </form>
                    </div>
                    <div className='block lg:invisible'>
                        <div className='w-7 mr-4'>
                            <FaPlusCircle className='text-3xl w-7 text-blue-600'></FaPlusCircle>
                        </div>
                    </div>
                </div>

                <div className='grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-6 my-5 pb-48 s'>
                    {communities.map((community) => (
                        <SuggestedCommunities
                            key={community.id}
                            community={community}
                        ></SuggestedCommunities>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Community;
