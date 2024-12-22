import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  // console.log("loading in PrivateRoute:", loading);
  if(loading) {
    return (<div className='loading'></div>)
  }
  // console.log("isAuthenticated in PrivateRoute:", isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
