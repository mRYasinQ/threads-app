import { useReducer } from 'react';
import { Link } from 'react-router';

import { Logo } from '../Logo';
import { Navbar } from './Navbar';
import { SidebarMenu } from './SidebarMenu';

const initialState = {
    activeMenu: false,
    activeThemeMenu: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                activeMenu: !state.activeMenu,
                activeThemeMenu: false,
            };
        case 'SHOW_MENU':
            return {
                ...state,
                activeMenu: true,
                activeThemeMenu: false,
            };
        case 'EXIT_MENU':
            return {
                ...state,
                activeMenu: false,
                activeThemeMenu: false,
            };
        case 'SHOW_THEME_MENU':
            return {
                ...state,
                activeMenu: true,
                activeThemeMenu: true,
            };
        default:
            return state;
    }
}

export const Sidebar = () => {
    const [menu, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="fixed top-0 bottom-0 left-0 flex h-full flex-col items-center justify-between px-2 py-4">
            <div>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <Navbar />
            <SidebarMenu menuData={menu} menuDispatch={dispatch} />
        </div>
    );
};
