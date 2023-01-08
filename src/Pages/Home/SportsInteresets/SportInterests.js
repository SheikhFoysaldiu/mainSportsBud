import React from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import allSports from '../../../Asset/Dummy/SportsInterestData.json'
import Loading from "../../../Shared/Loading/Loading";
import InfiniteScroll from 'react-infinite-scroll-component';
import SingleSport from "./SingleSport";

const SportInterests = () => {
  const [sports, setSports] = useState([]);

  const sportParams = useParams();

  const getSports = async () => {
      setSports(allSports);
      return allSports;
  };

  useLayoutEffect(() => {
      getSports(sportParams.id);
  }, []);

  if (!sports) {
      return <Loading></Loading>;
  }

  console.log(sports)
    return (
    <div className="h-screen w-full overflow-auto lg:overflow-hidden lg:hover:overflow-auto" id="scrollableDiv">
      <InfiniteScroll  dataLength={sports.length} scrollableTarget="scrollableDiv" loader={<Loading></Loading>}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-48 lg:mb-56 mt-16 mx-0 lg:mx-28">
      
     
        {
          sports.map(sport =><SingleSport key={sport.id} sport={sport}></SingleSport>)
        }
      
      </div>
      </InfiniteScroll>
    </div>


)  }

export default SportInterests;

