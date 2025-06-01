export const MenuItem = ({ text, icon, onClick }) => {
    return (
        <div className="p-1.5" onClick={onClick}>
            <div className="cursor-pointer rounded-xl px-2 py-3 duration-200 hover:bg-neutral-200/40 dark:hover:bg-neutral-600/40">
                <div className="flex items-center justify-between text-base font-semibold">
                    <span className="text-neutral-900 dark:text-neutral-200">{text}</span>
                    {icon && <div className="size-7 stroke-neutral-900 dark:stroke-neutral-200">{icon}</div>}
                </div>
            </div>
        </div>
    );
};
