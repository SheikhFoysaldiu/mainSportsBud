import React, { useEffect, useState } from 'react';
import Filter from '../../Components/Filter/Filter';

import UserCard from '../../Components/userCard/UserCard';
import { useParams } from 'react-router-dom';
import { sports } from '../../Asset/Dummy/SportsInterestData';

const SportChoice = () => {
    const params = useParams();
    const [sport, setSport] = useState(undefined);
    const [lodding, setLodding] = useState(false);

    const getSport = async (id) => {
        setLodding(true)
        const sport = sports.find((sport) => sport.id === id);
        setSport(sport)
        setLodding(false)
    }
    useEffect(() => {
        getSport(parseInt(params.id))
    }, []);

    if (lodding || !sport)
        return <div>lodding...</div>


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