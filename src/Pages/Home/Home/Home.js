import React from "react";
import PageInfo from "../../../Components/PageInfo/PageInfo";
import Search from "../../../Shared/Search/Search";
import SportInterests from "../SportsInteresets/SportInterests";
import { sports } from "../../../Asset/Dummy/SportsInterestData";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <PageInfo />
      <SportInterests sports={sports} />
    </div>
  );
};

export default Home;
