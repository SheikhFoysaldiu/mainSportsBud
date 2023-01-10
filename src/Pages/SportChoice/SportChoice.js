import React, { useEffect, useState } from 'react';
import Filter from '../../Components/Filter/Filter';

import UserCard from '../../Components/userCard/UserCard';
import { useParams } from 'react-router-dom';
// import { sports } from '../../Asset/Dummy/SportsInterestData';
import { API_URL } from '../../API/config';
import { useQuery } from '@tanstack/react-query';

const SportChoice = () => {
    const params = useParams();

    const [sport, setSport] = useState();
    const { data, refetch, isLoading, isError } = useQuery({
        queryKey: ['sportById'],
        queryFn: async () => {
            const res = await fetch(`${API_URL}/api/v1/sport/sports/?skip=0&take=20}`, {
                headers: {
                    method: 'GET',
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            console.log(data)
            setSport(data.sport);
            return data.sport;
        }
    });

    if (isLoading || !sport) return <div>Loading...</div>


    return (
        <div>
            <div className='text-3xl font-bold text-center'>{sport.name} Page</div>
            <div className='flex my-10 justify-end'>
                <Filter />
            </div>
            <UserCard />
        </div >


    );
};

export default SportChoice;