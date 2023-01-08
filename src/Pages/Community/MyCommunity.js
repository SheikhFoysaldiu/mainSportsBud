import React from 'react';
import { Link } from 'react-router-dom';

const MyCommunity = ({ mycommunity }) => {
    const { title, logo, id, category } = mycommunity
    return (
        <div>
            <Link to={`/main/mycommunitysingle/${id}`} className='my-2 flex items-center hover:bg-slate-100 w-full py-5 px-2 rounded-lg'>
                <div className='mr-3'>
                    <div className="avatar">
                        <div className="w-12 rounded">
                            <img src={logo} alt="community" />
                        </div>
                    </div>
                </div>
                <div className='text-left'>
                    <h3 className='mb-0 text-xl'>{title}</h3>
                    <p>{category}</p>
                </div>
            </Link>
        </div>
    );
};

export default MyCommunity;