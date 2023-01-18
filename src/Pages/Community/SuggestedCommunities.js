import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../API/config';
import Loading from '../../Shared/Loading/Loading';

const SuggestedCommunities = ({ community }) => {
    const { name, image, sportId, id } = community;

    const { data, refetch, isLoading, isError } = useQuery({
        queryKey: ['community', id],
        queryFn: async () => {
            const res = await fetch(`${API_URL}/api/v1/sport/sports/${sportId}`, {
                method: 'GET',
                headers: {

                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data.sport;
        }
    });

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image[image.length - 1]} alt="community" /></figure>
            <div className="card-body">
                <Link to={`/main/community/${id}`} >
                    <h2 className="card-title">{name}</h2>
                    <p>{data.name}</p>
                </Link>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Join</button>
                </div>
            </div>
        </div>
    );
};

export default SuggestedCommunities;