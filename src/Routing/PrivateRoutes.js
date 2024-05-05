import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const token = localStorage.getItem("token") || null;
  const login = useSelector((state) => state.login);

  const auth = useSelector((state) => state.register);

  const isAuthenticated = token || login.auth || auth.auth ? true : false;

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;
