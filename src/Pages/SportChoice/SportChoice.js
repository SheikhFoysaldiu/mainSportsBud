import React, { useEffect, useState } from 'react';
import Filter from '../../Components/Filter/Filter';
import { Avatar, Button, List, Skeleton } from 'antd';
import UserCard from '../../Components/userCard/UserCard';
const SportChoice = () => {

    return (
        <div>
            <div>
                <div className='text-3xl font-bold text-center'>Football Page</div>
                <div className='flex my-10 justify-end'>
                    <Filter />
                </div>
                <UserCard />
            </div>


        </div>
    );
};

export default SportChoice;