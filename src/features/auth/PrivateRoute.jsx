import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';

export const PrivateRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
