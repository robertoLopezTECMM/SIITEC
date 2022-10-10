import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Contexts/AuthProvider';

const PublicRoute = ({ children }) => {
    const { auth } = useContext(authContext);

    if (!auth.isLogged) {
        return <Navigate to="/" />;
    }
    return (
        <>
            {children} 
        </>
    );
};
export default PublicRoute