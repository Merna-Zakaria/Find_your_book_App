import React from "react";
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {

    if(!localStorage.getItem('user_name')) {
      return (
        <Navigate to="/login" replace/>
      );
    }
  
    return children;
  }

  export default ProtectedRoute;