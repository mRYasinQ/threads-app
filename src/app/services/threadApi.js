import api from './api';

const threadApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addReport: builder.mutation({
            query: (reportData) => ({
                url: '/reports',
                method: 'post',
                body: reportData,
            }),
        }),
    }),
});

export default threadApi;
export const { useAddReportMutation } = threadApi;
