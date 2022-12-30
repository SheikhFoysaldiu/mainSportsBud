import React, { useLayoutEffect, useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './Community.css'
import props from '../../Asset/Dummy/suggestedcommunity.json';
import SuggestedCommunities from './SuggestedCommunities';


const Community = () => {
   
    const [active, setActive] = React.useState(true);
    const placeholderToggle=() =>{
        setActive(false)
    }
    
    const placeholder = () =>{
        setActive(true)
    }

    const [communities, setCommunities]= useState([])

    const params = useParams()
    const getCommunities = async () => {
        
           
            setCommunities(props)
            return props
      
        
    }

    useLayoutEffect(()=>{
        getCommunities(params.id)
    },[])

    if(!communities){
        return <Loading></Loading>
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
        <div className='grid grid-cols-3 bg-slate-300 mt-16' >
             <div className='bg-slate-200 shadow-lg relative'>
            <h1>My Community</h1>
            </div>
            <div className='col-span-2'>
                <div className='flex justify-center items-center'>
                <form action="" className='w-3/4 my-6 z-50 relative '>
                    <FcSearch className='absolute search'> </FcSearch>
                    <input type="text" placeholder="Search your community" onFocus={placeholderToggle} onBlur={placeholder} className={`in input input-bordered w-full  placeholder:p-[-1px] ${active? "placeholder:block": "placeholder:invisible"} `} />
                    
                </form>
                </div>
                

                <div className='grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-6 my-5 pb-16 overflow-y-scroll h-[600px]'>
                {
                    
                    communities.map(community=><SuggestedCommunities key={community.id} community={community}></SuggestedCommunities>)
                }

            </div>

            </div>
           
        </div>

    );
};

export default Community;