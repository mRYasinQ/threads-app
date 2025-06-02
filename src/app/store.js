import { configureStore } from '@reduxjs/toolkit/react';

import api from './services/api';
import authSlice from '../features/auth/authSlice';
import reportSlice from '../features/report/reportSlice';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authSlice.reducer,
        report: reportSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
