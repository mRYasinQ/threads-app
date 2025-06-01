import { SunIcon } from '../../icons/SunIcon';
import { MoonIcon } from '../../icons/MoonIcon';

const Themes = {
    auto: {
        Icon: null,
        value: 'auto',
        label: 'Auto',
    },
    light: {
        Icon: SunIcon,
        value: 'light',
        label: 'Light',
    },
    dark: {
        Icon: MoonIcon,
        value: 'dark',
        label: 'Dark',
    },
};

export default Themes;
