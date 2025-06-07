import { createBrowserRouter } from 'react-router';

import { NotificationController } from '../features/notification/NotificationController';
import { AuthController } from '../features/auth/AuthController';
import { PublicRoute } from '../lib/guards/PublicRoute';
import { PrivateRoute } from '../lib/guards/PrivateRoute';

import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AddPostPage from '../pages/post/AddPostPage';
import PostPage from '../pages/post/PostPage';

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
                                Component: HomePage,
                            },
                            {
                                path: 'search',
                                Component: SearchPage,
                            },
                            {
                                path: 'post/:postId',
                                Component: PostPage,
                            },
                        ],
                    },
                ],
            },
            {
                Component: PrivateRoute,
                children: [
                    {
                        path: 'post/add',
                        Component: AddPostPage,
                    },
                ],
            },
            {
                Component: PublicRoute,
                children: [
                    {
                        path: 'login',
                        Component: LoginPage,
                    },
                    {
                        path: 'signup',
                        Component: SignupPage,
                    },
                ],
            },
        ],
    },
]);

export default routes;
