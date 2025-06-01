import { NavLink } from 'react-router';

export const NavItem = ({ Icon, to }) => {
    return (
        <NavLink
            to={to}
            className="group rounded-lg px-4 py-2 duration-200 hover:bg-neutral-200/40 dark:hover:bg-neutral-600/20"
        >
            <div className="size-7 fill-none stroke-neutral-800/40 group-[.active]:fill-neutral-900 group-[.active]:stroke-neutral-900 dark:stroke-neutral-500/40 group-[.active]:dark:fill-neutral-200 group-[.active]:dark:stroke-neutral-200">
                <Icon />
            </div>
        </NavLink>
    );
};
