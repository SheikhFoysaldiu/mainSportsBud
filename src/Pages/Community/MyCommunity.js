import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const MyCommunity = ({ community }) => {
    console.log(community)
    const { name, description, id, image, category } = community;

    if (!community) {
        return <Loading />
    }

    return (
        <div>
            <Link to={`/main/mycommunitysingle/${id}`} className='my-2 flex items-center hover:bg-slate-100 w-full py-5 px-2 rounded-lg'>
                <div className='mr-3'>
                    <div className="avatar">
                        <div className="w-12 rounded">
                            <img src={image[image.length - 1]} alt="community" />
                        </div>
                    </div>
                </div>
                <div className='text-left'>
                    <h3 className='mb-0 text-xl'>{name}</h3>
                    <p>{description.length > 40 ? description.substr(0, 40) + "..." : description}</p>
                </div>
            </Link>
        </div>
    );
};

export default MyCommunity;