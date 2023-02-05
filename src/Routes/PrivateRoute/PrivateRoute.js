import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); //getting Current user from AuthContext
  const location = useLocation(); //getting Current location from useLocation

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  if (user) {
    return children;
  }
};

export default PrivateRoute;
