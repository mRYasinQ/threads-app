import clsx from 'clsx';

export const Notification = ({ onClick, location = 'bottom', message }) => {
    return (
        <div
            onClick={onClick}
            className={clsx(
                'fixed left-1/2 z-30 w-full -translate-x-1/2 cursor-pointer px-4 sm:w-fit sm:px-0',
                location === 'bottom' ? 'bottom-4' : 'top-4',
            )}
        >
            <div className="w-full rounded-xl bg-gray-900 px-5 py-3 dark:bg-white">
                <p className="text-base font-semibold text-gray-200 dark:text-gray-800">{message}</p>
            </div>
        </div>
    );
};
