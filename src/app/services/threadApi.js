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
        getPosts: builder.infiniteQuery({
            infiniteQueryOptions: {
                initialPageParam: 1,

                getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams, queryArg = {}) => {
                    const { limit = 10 } = queryArg;
                    return lastPage.length < limit ? undefined : lastPageParam + 1;
                },
            },
            query: ({ queryArg = {}, pageParam }) => {
                const { contentLike, limit = 10 } = queryArg;

                return {
                    url: '/posts',
                    method: 'get',
                    params: {
                        content_like: contentLike,
                        _page: pageParam,
                        _limit: limit,
                    },
                };
            },
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
export const {
    useAddReportMutation,
    useAddPostMutation,
    useGetPostsInfiniteQuery,
    useRegisterMutation,
    useLoginQuery,
    useLazyLoginQuery,
} = threadApi;
