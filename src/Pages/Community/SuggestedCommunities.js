import React from 'react';

const SuggestedCommunities = ({ community }) => {
    const { title, logo, category, id } = community;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="community" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Join</button>
                </div>
            </div>
        </div>
    );
};

export default SuggestedCommunities;