import { createBrowserRouter } from 'react-router';

import Home from '../pages/Home';
import Search from '../pages/Search';

const routes = createBrowserRouter([
    {
        path: '/',
        index: true,
        Component: Home,
    },
    {
        path: 'search',
        Component: Search,
    },
]);

export default routes;
