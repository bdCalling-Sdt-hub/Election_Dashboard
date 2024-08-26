import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useGetProfileQuery } from "../redux/apiSlices/AuthSlice";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { data:profile, isLoading, isFetching, isError } = useGetProfileQuery(); 
  


  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError || !profile?.data) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (profile?.data?.role === "ADMIN" || profile?.data?.role === "SUPER_ADMIN") {
    return children; 
  }

  
  return <Navigate to="/login" />;
};

export default PrivateRoute;
