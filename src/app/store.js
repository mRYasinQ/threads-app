import { configureStore } from '@reduxjs/toolkit/react';

import api from './services/api';
import authSlice from '../features/auth/authSlice';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
