import clsx from 'clsx';
import { useContext } from 'react';

import { ThemeContext } from '../../lib/context/Theme';

import Themes from '../../lib/constants/Themes';

import { ArrowLeftIcon } from '../../icons/ArrowLeftIcon';

export const SidebarTheme = ({ menuDispatch }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="absolute top-0 left-0 flex h-fit w-80 -translate-y-full flex-col gap-4 rounded-2xl border border-neutral-400/40 bg-neutral-50 p-4 shadow-lg shadow-neutral-300/40 dark:border-neutral-500/30 dark:bg-neutral-800/50 dark:shadow-neutral-900/60">
            <div className="flex items-center gap-2">
                <div
                    onClick={() => menuDispatch({ type: 'SHOW_MENU' })}
                    className="size-8 cursor-pointer stroke-neutral-900 dark:stroke-neutral-200"
                >
                    <ArrowLeftIcon />
                </div>
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-200">Appearance</span>
            </div>
            <div className="flex rounded-xl bg-neutral-100 dark:bg-neutral-900">
                {Object.values(Themes).map(({ Icon, value, label }) => (
                    <div
                        key={value}
                        onClick={() => setTheme(value)}
                        className={clsx(
                            'flex w-full cursor-pointer justify-center stroke-neutral-700/60 px-5 py-4 text-neutral-700/60 dark:stroke-neutral-500 dark:text-neutral-500',
                            value === theme &&
                                'bg-neutral rounded-xl border border-neutral-400/40 bg-neutral-50 !stroke-neutral-900 !text-neutral-900 dark:border-neutral-500/30 dark:bg-neutral-800/50 dark:!stroke-neutral-200 dark:!text-neutral-200',
                        )}
                    >
                        {Icon ? (
                            <div className="size-6">{<Icon />}</div>
                        ) : (
                            <div className="text-sm font-semibold">{label}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
