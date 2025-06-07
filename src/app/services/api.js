import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_API_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
});

const baseQueryWithRetries = retry(baseQuery, { maxRetries: 3 });

const api = createApi({
    reducerPath: 'threadApi',
    baseQuery: baseQueryWithRetries,
    tagTypes: ['Posts'],
    endpoints: () => ({}),
});

export default api;
export { baseQuery, baseQueryWithRetries };
