import { Navigate } from 'react-router';

import { useGetPostQuery } from '../../app/services/threadApi';

export const Post = ({ postId }) => {
    const { data: post, isError, isLoading } = useGetPostQuery(postId, { skip: !postId });

    if (isLoading) return null;

    if (!postId || isError) return <Navigate to="/404" />;

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 -z-60 h-full">
            <div className="relative top-1/2 mx-auto h-80 w-full -translate-y-1/2 px-4 md:w-2xl md:px-0">
                <div className="flex h-full gap-2 overflow-y-scroll rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                    <div>
                        <img
                            className="size-10 max-w-none rounded-full"
                            src="/images/UserDefault.jpg"
                            alt="User Photo"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h5 className="w-fit text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {post.author}
                            </h5>
                        </div>
                        <p className="py-4 text-base font-medium text-gray-700 dark:text-gray-300">{post.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
