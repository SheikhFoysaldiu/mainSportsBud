import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { API_URL } from '../../API/config';

function Button(props) {
    const { userId, sportId, } = props;
    const [follow, setFollow] = React.useState(undefined);


    const { data, isLoading, error } = useQuery({
        queryKey: ['follow', sportId],
        queryFn: async () => {
            const res = await fetch(`${API_URL}/api/v1/sport/isFollowing?sportId=${sportId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json();
            setFollow(data.isFollowing)
            console.log(data)
            return data;
        }
    })

    const [loading, setLoading] = useState(false)

    const handleFollow = async () => {
        setLoading(true)

        try {
            const res = await fetch(`${API_URL}/api/v1/sport/sportFollow`,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({
                        sportId
                    })
                }
            )
            setFollow(true)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }


    }

    const handleUnfollow = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${API_URL}/api/v1/sport/sportUnfollow/${sportId}`,
                {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            setFollow(false)
            setLoading(false)




        } catch (error) {
            setLoading(false)
            console.log(error)

        }


    }
    if (loading || isLoading || !data || follow === undefined) {
        return null
    }

    if (error) {
        console.log(error)
        return null
    }


    return (

        follow === true ?
            <button disabled={loading || isLoading || !data} onClick={handleUnfollow} className="btn btn-primary">Unfollow</button>
            :
            <button disabled={loading || isLoading || !data} onClick={handleFollow} className="btn btn-primary" > Follow Now</button >

    )
}

export default Button
