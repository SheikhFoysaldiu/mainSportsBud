import { PlusSquareOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import tw from 'tailwind-styled-components'
import tc from 'thousands-counter';
const Container = tw.div`
  w-full 
  max-w-lg
  bg-white 
  rounded-lg 
  dark:bg-gray-800 
  dark:border-gray-700

  my-2
  shadow-2xl



  
`
const GridContainer = tw.div`
    grid 
    sm:grid-cols-1 
    md:grid-cols-2
    xl:grid-cols-3
    place-items-center
    py-3
`

const
  SportInterests = ({ sports }) => {
    const navigate = useNavigate();
    return (
      <GridContainer >
        {
          sports.map((sport, idx) => (
            <button key={idx} onClick={() => navigate(`SportChoice/${sport.id}`)}>
              <Container>
                <img className="p-8 rounded-t-lg object-cover" src={sport.image} alt="product image" />

                <div className="px-5 pb-5">

                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{sport.name}</h5>
                  <p>
                    {sport.description}
                  </p>


                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between  text-xl  text-gray-900 dark:text-white">
                      <UserOutlined />
                      <span>
                        {tc(sport.users, {
                          digits: 1,
                          uppercase: true
                        }
                        )}
                      </span>
                    </div>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Follow
                    </button>
                  </div>
                </div>
              </Container>
            </button>
          ))
        }
      </GridContainer>
    )

  }

export default SportInterests;

