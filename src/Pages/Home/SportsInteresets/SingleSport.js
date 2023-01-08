import React from 'react';

const SingleSport = ({ sport }) => {
    const { id, name, image, users, description } = sport;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Sport" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Total Followers: <span className='font-bold ml-0'>{users}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Follow Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSport;