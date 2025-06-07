import clsx from 'clsx';

export const Menu = ({ children, className }) => {
    return (
        <div
            className={clsx(
                'absolute top-0 left-0 flex h-fit w-60 -translate-y-full flex-col divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-xs dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900',
                className,
            )}
        >
            {children}
        </div>
    );
};
