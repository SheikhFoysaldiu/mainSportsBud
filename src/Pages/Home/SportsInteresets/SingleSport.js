import React from 'react';
import { Link } from 'react-router-dom';

const SingleSport = ({ sport }) => {
    const { id, name, images, users, description } = sport;

    const handleFollow = () => {
        console.log('Followed')
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={images[images.length - 1]} alt="Sport" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleFollow} className="btn btn-primary">Follow Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleSport;