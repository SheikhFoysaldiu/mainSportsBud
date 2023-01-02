import React from 'react';

const MyCommunity = ({ mycommunity }) => {
    const { title, logo, id, category } = mycommunity
    return (
        <div>
            <button className='border-b-2 shadow-sm rounded-md border-gray-300 my-2 flex items-center hover:bg-slate-100 w-full py-5 px-2 rounded-lg'>
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
            </button>
        </div>
    );
};

export default MyCommunity;