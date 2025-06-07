import { useEffect, useRef, useState } from 'react';

import { useLazyGetPostListQuery } from '../../app/services/threadApi';

import { SearchIcon } from '../../icons/SearchIcon';
import { RemoveIcon } from '../../icons/RemoveIcon';
import { RowResult } from './RowResult';

export const SearchBar = () => {
    const lastRequestRef = useRef(null);

    const [query, setQuery] = useState('');

    const [searchPosts, { data: posts, isSuccess, isFetching }] = useLazyGetPostListQuery();

    useEffect(() => {
        if (query.length < 3) return;

        const timerId = setTimeout(() => {
            const { abort } = searchPosts(query);
            lastRequestRef.current = abort;
        }, 300);

        return () => {
            if (lastRequestRef.current) lastRequestRef.current();
            clearTimeout(timerId);
        };
    }, [query]);

    return (
        <section className="fixed top-0 right-0 bottom-0 left-0 -z-60 h-full w-full">
            <div className="relative top-0 bottom-0 mx-auto flex h-full w-full flex-col justify-end gap-4 px-4 pt-6 md:w-2xl md:px-0">
                <h1 className="text-center text-lg font-bold text-gray-900 dark:text-gray-100">Search</h1>
                <div className="flex h-full flex-col gap-4 rounded-t-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <div className="p-8">
                        <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-100 px-4 py-2.5 dark:border-gray-800 dark:bg-black">
                            <div className="size-5 stroke-gray-300 dark:stroke-gray-700">
                                <SearchIcon />
                            </div>
                            <input
                                className="w-full text-base font-medium text-gray-800 outline-none placeholder:text-gray-300 dark:text-gray-200 dark:placeholder:text-gray-700"
                                placeholder="Search"
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            {query && (
                                <div
                                    onClick={() => setQuery('')}
                                    className="min-size-2 w-5 cursor-pointer rounded-full bg-gray-300 stroke-gray-100 dark:bg-gray-600 dark:stroke-black"
                                >
                                    <RemoveIcon />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex h-full flex-col divide-y divide-gray-200 overflow-y-scroll dark:divide-gray-800">
                        {query &&
                            isSuccess &&
                            !isFetching &&
                            posts &&
                            posts.map(({ id, author, content }) => (
                                <RowResult key={id} id={id} author={author} content={content} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
