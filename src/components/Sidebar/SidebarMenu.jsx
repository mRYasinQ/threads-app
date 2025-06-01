import clsx from 'clsx';

import { Menu } from '../Menu';
import { MenuItem } from '../Menu/MenuItem';
import { BackdropMenu } from '../Menu/BackdropMenu';
import { SidebarTheme } from './SidebarTheme';

import { MenuLineIcon } from '../../icons/MenuLineIcon';
import { DirectionRightIcon } from '../../icons/DirectionRightIcon';

export const SidebarMenu = ({ menuData: { activeMenu, activeThemeMenu }, menuDispatch }) => {
    return (
        <div className="relative">
            <div
                onClick={() => menuDispatch({ type: 'TOGGLE_MENU' })}
                className={clsx(
                    'size-12 cursor-pointer stroke-neutral-800/40 duration-200 hover:stroke-neutral-900 dark:stroke-neutral-500/40 dark:hover:stroke-neutral-200',
                    activeMenu && '!stroke-neutral-900 dark:!stroke-neutral-200',
                )}
            >
                <MenuLineIcon />
            </div>
            {(activeMenu || activeThemeMenu) && <BackdropMenu onClick={() => menuDispatch({ type: 'EXIT_MENU' })} />}
            {activeMenu && !activeThemeMenu && (
                <Menu>
                    <MenuItem
                        text="Appearance"
                        icon={<DirectionRightIcon />}
                        onClick={() => menuDispatch({ type: 'SHOW_THEME_MENU' })}
                    />
                    <MenuItem text="Report a problem" />
                </Menu>
            )}
            {activeThemeMenu && <SidebarTheme menuDispatch={menuDispatch} />}
        </div>
    );
};
