import { createBrowserRouter } from 'react-router';

import { AuthController } from '../features/auth/AuthController';
import { PublicRoute } from '../lib/guards/PublicRoute';
import { PrivateRoute } from '../lib/guards/PrivateRoute';

import { NotificationController } from '../features/notification/NotificationController';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AddPost from '../pages/Post/AddPost';

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
                Component: PrivateRoute,
                children: [
                    {
                        path: 'post',
                        children: [
                            {
                                path: 'add',
                                Component: AddPost,
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
