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
        addPost: builder.mutation({
            query: (postData) => ({
                url: '/posts',
                method: 'post',
                body: postData,
            }),
        }),
        register: builder.mutation({
            query: (newUserData) => ({
                url: '/users',
                method: 'post',
                body: newUserData,
            }),
        }),
        login: builder.query({
            query: ({ email, password }) => ({
                url: `/users`,
                params: {
                    email,
                    password,
                    _limit: 1,
                },
            }),
        }),
    }),
});

export default threadApi;
export const { useAddReportMutation, useAddPostMutation, useRegisterMutation, useLoginQuery, useLazyLoginQuery } =
    threadApi;
