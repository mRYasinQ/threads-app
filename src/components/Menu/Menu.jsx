export const Menu = ({ children }) => {
    return (
        <div className="absolute top-0 left-0 flex h-fit w-60 -translate-y-full flex-col divide-y divide-neutral-400/40 rounded-2xl border border-neutral-400/40 bg-neutral-50 shadow-lg shadow-neutral-300/40 dark:divide-neutral-500/30 dark:border-neutral-500/30 dark:bg-neutral-800/50 dark:shadow-neutral-900/60">
            {children}
        </div>
    );
};
