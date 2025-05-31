import { createContext, useEffect, useState } from 'react';

import Themes from '../constants/Themes';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'auto');

    useEffect(() => {
        if (theme) localStorage.setItem('theme', theme);

        if (
            (theme === Themes.auto.value && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
            theme === Themes.dark.value
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
