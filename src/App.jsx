import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';

import ThemeProvider from './lib/context/Theme.jsx';

import routes from './app/routes.js';
import store from './app/store.js';

const App = () => {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <RouterProvider router={routes}></RouterProvider>
            </Provider>
        </ThemeProvider>
    );
};

export default App;
