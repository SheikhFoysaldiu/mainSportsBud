import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPersonAddAlt1 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const CommunityMember = ({ member }) => {
    const { id, fname, lname, img, interest, age } = member
    return (
        <div className='flex justify-between '>
            <div className='flex'>
                <div className="avatar mr-3">
                    <div className="w-16 rounded">
                        <img src={img}
                            alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                <div>
                    <div>
                        <span className='mx-0 mr-1 text-lg font-bold'>{fname}</span>
                        <span className='mx-0 text-lg font-bold'>{lname}</span>
                    </div>
                    <div>
                        <span className='mx-0 text-sm'>{interest}</span>
                    </div>
                </div>
            </div>
            <div >
                    <button className="btn btn-ghost btn-circle h-0">
                        <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <BsThreeDotsVertical></BsThreeDotsVertical>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="flex items-center">
                                    
                                        <p><MdPersonAddAlt1 className='text-lg'></MdPersonAddAlt1></p>
                                        <p>Add Friend</p>
                                   
                                    </Link>
                                   

                                </li>
                                <li  ><Link>
                                    <p><CgProfile className='text-lg'></CgProfile></p>
                                    <p>View Profile</p>

                                </Link></li>

                            </ul>

                        </div>
                    </button>


                </div>
        </div>
    );
};

export default CommunityMember;