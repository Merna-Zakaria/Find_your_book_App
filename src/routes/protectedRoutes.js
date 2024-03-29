import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
   // user is not authenticated
    if(!user) {
      return (
        <Navigate to="/"/>
      );
    }
  
    return children;
  }

  export default ProtectedRoute;