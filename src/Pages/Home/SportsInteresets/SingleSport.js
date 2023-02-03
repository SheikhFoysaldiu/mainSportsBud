import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../API/config';
import Button from '../../../Components/UI/Button';
import { AuthContext } from '../../../Context/AuthProvider';




const SingleSport = ({ sport }) => {
    const { id, name, images, users, description } = sport;
    const { user } = useContext(AuthContext)
    // console.log(user)


    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={images[images.length - 1]} alt="Sport" /></figure>

                <div className="card-body">
                    <Link to={`/main/sportchoice/${id}`} >
                        <h2 className="card-title">{name}</h2>
                        <p >{description?.length > 150 ? description.substr(0, 150) + "..." : description}</p>
                    </Link>
                    <div className="card-actions justify-end">
                        <Button userId={user?.id} sportId={id} />
                    </div>
                </div>
            </div>
        </div >

    );
};

export default SingleSport;