import { EditOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { current } from "daisyui/src/colors";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../API/config";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import InfoEdit from "../../Shared/Modals/InfoEdit";

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }





    return age
}

function About({ user }) {
    const { id, firstName, lastName, profilePicture, gender, dob, location } = user;
    const [edit, setEdit] = React.useState(false);
    const { user: CurrentUser } = useContext(AuthContext)

    const { data, isLoading, error } = useQuery({
        queryKey: ["findSportInterestUser", id],
        queryFn: async () => {
            const url = `${API_URL}/api/v1/sport/sports/interest/${id}`
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();

            return {
                data: data.interest
            }
        }

    })

    if (isLoading) {
        return <Loading />
    }
    console.log(data)

    return (

        <>
            {
                CurrentUser.id !== id ?
                    <div className=' bg-white rounded-lg shadow-xl  '>

                        <div className='flex justify-center items-center'>
                            <ul className=' mt-2 text-gray-700 '>
                                <li className='flex   py-2'>
                                    <span className='font-bold w-24'>Name :</span>
                                    <span className='text-gray-700'>
                                        {firstName} {lastName}
                                    </span>
                                </li>
                                <li className='flex py-2'>
                                    <span className='font-bold w-24'>Interested :</span>
                                    <span className='text-gray-700'>{data.data.length !== 0 ? data?.data[0]?.sport.name : <Link to='/main'>Sports Interest has not set </Link>} {data.data.length > 1 ? `and ${data.data.length - 1} others` : ""} </span>
                                </li>
                                <li className='flex py-2'>
                                    <span className='font-bold w-24'>Age :</span>
                                    <span className='text-gray-700'>{getAge(dob)} years </span>
                                </li>
                                <li className='flex py-2'>
                                    <span className='font-bold w-24'>Location :</span>
                                    <span className='text-gray-700'> {location === null ? "Location hasn't set yet" : location} </span>
                                </li>
                                <li className='flex  py-2'>
                                    <span className='font-bold w-24'>Gender : </span>
                                    <span className='text-gray-700'>{gender ? gender : "Gender hasn't set"}</span>
                                </li>
                            </ul>
                        </div>
                    </div> :
                    <div className=' bg-white rounded-lg shadow-xl  '>
                        <div className='text-center flex justify-center items-center'>
                            <h1 className='text-2xl my-2 border-b-2'>Personal Info </h1>

                            <button
                                onClick={() => setEdit((prev) => !prev)}
                                className='flex justify-start items-center ml-4 text-sm'
                            >
                                Edit <EditOutlined />
                            </button>

                            {edit && <>{/* modals */}</>}
                        </div>

                        <div className='flex justify-center items-center'>
                            <ul className=' mt-2 text-gray-700 '>
                                <li className='flex   py-2'>
                                    <span className='font-bold w-24'>Name :</span>
                                    <span className='text-gray-700'>
                                        {firstName} {lastName}
                                    </span>
                                </li>
                                <li className='flex py-2'>
                                    <span className='font-bold w-24'>Interested :</span>
                                    <span className='text-gray-700'>{data.data.length !== 0 ? data?.data[0]?.sport.name : <Link to='/main'>Sports Interest has not set </Link>} {data.data.length > 1 ? `and ${data.data.length - 1} others` : ""} </span>
                                </li>
                                <li className='flex py-2'>
                                    <span className='font-bold w-24'>Age :</span>
                                    <span className='text-gray-700'>{getAge(CurrentUser.dob)} years </span>
                                </li>
                                <li className='flex py-2'>
                                    <span className='font-bold w-24'>Location :</span>
                                    <span className='text-gray-700'> {CurrentUser.location === null ? "Location hasn't set yet" : CurrentUser.location} </span>
                                </li>
                                <li className='flex  py-2'>
                                    <span className='font-bold w-24'>Gender : </span>
                                    <span className='text-gray-700'>{gender ? gender : "Gender hasn't set"}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

            }
        </>




    );
}

export default About;
