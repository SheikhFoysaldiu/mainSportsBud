import { EditOutlined } from '@ant-design/icons'
import React from 'react'
import InfoEdit from '../../Shared/Modals/InfoEdit';


const currentUserId = true;
function About() {

    const [edit, setEdit] = React.useState(false);
    console.log(edit)
    return (


        <div className=' bg-white rounded-lg shadow-xl  '>

            <div className='text-center flex justify-center items-center'>
                <h1 className='text-2xl my-2 border-b-2'>Personal Info </h1>

                {
                    currentUserId && <button onClick={() => setEdit(prev => !prev)} className='flex justify-start items-center ml-4 text-sm'>Edit <EditOutlined /></button>

                }
                {
                    edit &&
                    <>
                        {/* modals */}
                    </>

                }

            </div>


            <div className='flex justify-center items-center'>

                <ul className=" mt-2 text-gray-700 ">
                    <li className="flex   py-2">
                        <span className="font-bold w-24">Name :</span>
                        <span className="text-gray-700">Foysal Sheikh</span>
                    </li>
                    <li className="flex py-2">
                        <span className="font-bold w-24">Interested :</span>
                        <span className="text-gray-700">Cricket</span>
                    </li>
                    <li className="flex py-2">
                        <span className="font-bold w-24">Age :</span>
                        <span className="text-gray-700">18</span>
                    </li>
                    <li className="flex  py-2">
                        <span className="font-bold w-24">Gender : </span>
                        <span className="text-gray-700">Mal</span>
                    </li>
                </ul>

            </div>
        </div>





    )
}

export default About
