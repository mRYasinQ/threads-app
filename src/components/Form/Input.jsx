export const Input = ({ title, id, type, placeholder, methods, error }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-base font-semibold text-gray-800 dark:text-gray-200">
                {title}
            </label>
            <input
                {...methods}
                className="rounded-xl border border-gray-200 px-4 py-2 text-base font-medium text-gray-900 outline-none placeholder:text-gray-300 dark:border-gray-800 dark:text-gray-100 dark:placeholder:text-gray-700"
                type={type}
                placeholder={placeholder}
                id={id}
            />
            {error && <p className="text-sm font-medium text-red-500">{error}</p>}
        </div>
    );
};
