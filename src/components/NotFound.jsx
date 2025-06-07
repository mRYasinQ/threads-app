import { Link } from 'react-router';

export const NotFound = () => {
    return (
        <div className="relative flex min-h-screen min-w-screen flex-col items-center justify-center gap-4">
            <span className="text-6xl font-black text-gray-900 dark:text-gray-100">404</span>
            <h6 className="text-5xl font-semibold text-gray-800 dark:text-gray-200">NOT FOUND</h6>
            <Link
                to="/"
                className="rounded-xl bg-gray-900 px-4 py-2 text-base font-semibold text-gray-100 dark:bg-white dark:text-gray-900"
            >
                Back to home
            </Link>
        </div>
    );
};
