import React from "react";
import SportSearch from "../SportSearch/SportSearch";
import SportInterests from "../SportsInteresets/SportInterests";
import "./Home.css";

const Home = () => {
  return (
    <div className="fixed">
      <SportSearch></SportSearch>
      <SportInterests/>
    </div>
  );
};

export default Home;
