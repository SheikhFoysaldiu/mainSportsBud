import React, { useState } from "react";
import PageInfo from "../../../Components/PageInfo/PageInfo";
import Search from "../../../Shared/Search/Search";
import SportInterests from "../SportsInteresets/SportInterests";
import { sports } from "../../../Asset/Dummy/SportsInterestData";
import "./Home.css";
import { API_URL } from "../../../API/config";
import { useQuery } from "@tanstack/react-query";
const Home = () => {
  const [sports, setSports] = useState([]);
  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['sports'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/api/v1/sport/sports?skip=0&take=20`, {
        headers: {
          method: 'GET',
          authorization: `bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      console.log(data)
      setSports(data.sports);
      return data.sports;
    }
  });

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error</div>

  return (
    <div className="mb-96">
      <PageInfo />
      <SportInterests sports={sports} />
    </div>
  );
};

export default Home;
