import React from "react";
import "./Welcome.css";

import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn btn-outline btn-success my-3 w-1/2 text-xl rounded-full"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
      <button
        className="btn btn-outline btn-warning my-3 w-1/2 text-xl rounded-full"
        onClick={() => navigate("/sign-up")}
      >
        Signup
      </button>
    </>
  );
};

export default Welcome;
