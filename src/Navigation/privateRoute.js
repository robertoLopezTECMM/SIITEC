import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Contexts/AuthProvider';

 const PrivateRoute = ({ children }) => {

    const { auth } = useContext(authContext);

    if (auth.isLogged) {
        return <Navigate to="/home" />;
    }
    return (
        <>
            {/* <AppSidebar /> */} {/* your other components */}
            {children}
        </>
    );
};

export default PrivateRoute