import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";

const SportInterests = ({ sports }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("SportChoice")}>
      <div class="grid grid-cols-2 grid-rows-2 gap-4">
        {sports.map((sport) => (
          <div class="flex flex-col justify-center items-center" key={sport.id}>
            <div class="rounded-full bg-gray-200">
              <img src={sport.image} alt="" />
            </div>
            <h3 class="text-gray-700 text-lg font-bold my-3">{sport.name}</h3>
          </div>
        ))}
      </div>

      <Pagination />
    </button>
  );
};

export default SportInterests;
