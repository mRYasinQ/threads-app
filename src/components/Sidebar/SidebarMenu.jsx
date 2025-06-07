import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Menu } from '../Menu';
import { MenuItem } from '../Menu/MenuItem';
import { BackdropMenu } from '../Menu/BackdropMenu';
import { SidebarTheme } from './SidebarTheme';
import { ReportProblem } from '../../features/report/ReportProblem';

import { showReportModal } from '../../features/report/reportSlice';

import { MenuLineIcon } from '../../icons/MenuLineIcon';
import { DirectionRightIcon } from '../../icons/DirectionRightIcon';

export const SidebarMenu = ({ menuData: { activeMenu, activeThemeMenu }, menuDispatch }) => {
    const reportModal = useSelector((state) => state.report);
    const dispatch = useDispatch();

    const showReportModalHandler = () => {
        menuDispatch({ type: 'EXIT_MENU' });
        dispatch(dispatch(showReportModal()));
    };

    return (
        <div className="relative hidden md:block">
            <div
                onClick={() => menuDispatch({ type: 'TOGGLE_MENU' })}
                className={clsx(
                    'size-12 cursor-pointer stroke-gray-300 duration-200 hover:stroke-gray-900 dark:stroke-gray-700 dark:hover:stroke-gray-100',
                    activeMenu && '!stroke-gray-900 dark:!stroke-gray-100',
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
                    <MenuItem text="Report a problem" onClick={showReportModalHandler} />
                </Menu>
            )}
            {activeThemeMenu && <SidebarTheme menuDispatch={menuDispatch} />}
            {reportModal.isShowModal && <ReportProblem />}
        </div>
    );
};
