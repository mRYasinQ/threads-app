import { createBrowserRouter } from 'react-router';

import Home from '../pages/Home';

const routes = createBrowserRouter([
    {
        index: true,
        Component: Home,
    },
]);

export default routes;
