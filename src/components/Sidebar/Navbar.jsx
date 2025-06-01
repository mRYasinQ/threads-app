import { NavItem } from './NavItem';

import NavItems from '../../lib/constants/NavItems';

export const Navbar = () => {
    return (
        <nav className="flex flex-col items-center gap-6">
            {NavItems.map(({ Icon, link }) => (
                <NavItem key={window.crypto.randomUUID()} Icon={Icon} to={link} />
            ))}
        </nav>
    );
};
