import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import { Button } from '../../components/Button';

export const AuthController = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <>
            <div className="fixed top-8 right-6">
                {isAuthenticated ? (
                    <Button href="/post/add" className="relative z-10">
                        Add Post
                    </Button>
                ) : (
                    <Button href="/login" className="relative z-10">
                        Log In
                    </Button>
                )}
                <Outlet />
            </div>
        </>
    );
};
