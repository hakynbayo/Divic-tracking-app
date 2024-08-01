import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    // Replace this with your actual authentication logic
    return !!localStorage.getItem("authToken");
};

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
    return isAuthenticated() ? element : <Navigate to="/" />;
};

export default PrivateRoute;