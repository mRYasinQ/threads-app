import { NavItem } from './NavItem';

import NavItems from '../../lib/constants/NavItems';

export const Navbar = () => {
    return (
        <nav className="flex w-full items-center gap-6 md:w-auto md:flex-col">
            {NavItems.map(({ Icon, link }) => (
                <NavItem key={window.crypto.randomUUID()} Icon={Icon} to={link} />
            ))}
        </nav>
    );
};
