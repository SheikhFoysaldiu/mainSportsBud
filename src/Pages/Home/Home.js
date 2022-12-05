import React from "react";
import { sports } from "../../Asset/Dummy/data";
import PageInfo from "../../Components/PageInfo/PageInfo";
import Search from "../../Shared/Search/Search";
import SportInterests from "../../Shared/SportsInteresets/SportInterests";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <PageInfo />
      <Search />
      <SportInterests sports={sports} />
    </div>
  );
};

export default Home;
