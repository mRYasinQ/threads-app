import { createBrowserRouter } from 'react-router';

import { AuthController } from '../features/auth/AuthController';
import { PublicRoute } from '../features/auth/PublicRoute';

import { NotificationController } from '../features/notification/NotificationController';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const routes = createBrowserRouter([
    {
        Component: NotificationController,
        children: [
            {
                children: [
                    {
                        Component: AuthController,
                        children: [
                            {
                                path: '/',
                                index: true,
                                Component: Home,
                            },
                            {
                                path: 'search',
                                Component: Search,
                            },
                        ],
                    },
                ],
            },
            {
                Component: PublicRoute,
                children: [
                    {
                        path: 'login',
                        Component: Login,
                    },
                    {
                        path: 'signup',
                        Component: Signup,
                    },
                ],
            },
        ],
    },
]);

export default routes;
