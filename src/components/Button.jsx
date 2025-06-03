import { Link } from 'react-router';
import clsx from 'clsx';

export const Button = ({ href, className, children }) => {
    return (
        <Link
            to={href}
            className={clsx(
                'cursor-pointer rounded-xl bg-gray-900 px-4 py-2 text-base font-semibold text-gray-100 dark:bg-white dark:text-gray-900',
                className,
            )}
        >
            {children}
        </Link>
    );
};
