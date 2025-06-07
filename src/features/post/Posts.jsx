import { useEffect, useRef } from 'react';

import { useGetPostsInfiniteQuery } from '../../app/services/threadApi';

import { PostItem } from './PostItem';

export const Posts = () => {
    const postsRef = useRef(null);

    const { data: postsData, isFetchingNextPage, hasNextPage, fetchNextPage } = useGetPostsInfiniteQuery();

    const scrollHandler = (e) => {
        const { scrollTopMax, scrollTop } = e.target;

        if (scrollTop >= scrollTopMax - 100 && !isFetchingNextPage && hasNextPage) {
            fetchNextPage();
        }
    };

    useEffect(() => {
        if (isFetchingNextPage && !hasNextPage) return;

        postsRef.current?.addEventListener('scroll', scrollHandler);

        return () => postsRef.current?.removeEventListener('scroll', scrollHandler);
    }, [isFetchingNextPage, hasNextPage]);

    return (
        <section className="fixed top-0 right-0 bottom-0 left-0 -z-60 h-full w-full">
            <div className="relative top-0 bottom-0 mx-auto flex h-full w-full flex-col justify-end gap-4 px-4 pt-6 md:w-2xl md:px-0">
                <h1 className="text-center text-lg font-bold text-gray-900 dark:text-gray-100">Home</h1>
                <div
                    ref={postsRef}
                    className="flex h-full flex-col divide-y divide-gray-200 overflow-y-scroll rounded-t-2xl border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900"
                >
                    {postsData &&
                        postsData?.pages.map((posts) =>
                            posts.map(({ id, author, content }) => (
                                <PostItem key={id} id={id} author={author} content={content} />
                            )),
                        )}
                </div>
            </div>
        </section>
    );
};
