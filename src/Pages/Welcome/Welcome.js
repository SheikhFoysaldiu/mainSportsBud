import React from 'react';
import backgroundImage from '../../Asset/welcome/welcome.jpg'
import './Welcome.css'
import person from '../../Asset/person/person.png'

const Welcome = () => {

    return (

        <section className='main-container w-full h-screen '>
            <div className='image-overlay flex flex-col justify-center items-center text-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={person} alt='' />
                    </div>
                </div>
                <h2 className='text-white text-4xl font-bold my-3'>Welcome to Sportzbud</h2>
                <button className="btn btn-outline btn-success my-3 w-1/2 text-xl rounded-full">Login</button>
                <button className="btn btn-outline btn-warning my-3 w-1/2 text-xl rounded-full">Signup</button>


            </div>
        </section>



    );
};

export default Welcome;