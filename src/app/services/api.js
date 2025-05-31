import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.VITE_API_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
});

const baseQueryWithRetries = retry(baseQuery, { maxRetries: 3 });

const api = createApi({
    reducerPath: 'threadApi',
    baseQuery: baseQueryWithRetries,
    endpoints: () => ({}),
});

export default api;
export { baseQuery, baseQueryWithRetries };
