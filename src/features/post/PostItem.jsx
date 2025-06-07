import { useState } from 'react';
import { Link } from 'react-router';

import useNotif from '../../lib/hooks/useNotif';

import { Menu } from '../../components/Menu';
import { MenuItem } from '../../components/Menu/MenuItem';
import { BackdropMenu } from '../../components/Menu/BackdropMenu';

import { MoreIcon } from '../../icons/MoreIcon';
import { LinkIcon } from '../../icons/LinkIcon';

export const PostItem = ({ id, author, content }) => {
    const [visibleMenu, setVisibleMenu] = useState(false);

    const { showNotif } = useNotif();

    const toggleMenu = () => setVisibleMenu((prevVisibleMenu) => !prevVisibleMenu);

    const copyHandler = () => {
        navigator.clipboard.writeText(`${window.location.origin.toString()}/post/${id}`);
        toggleMenu();
        showNotif('Copied to clipboard.', 'bottom');
    };

    return (
        <div className="flex gap-2 px-8 py-4">
            <div>
                <img className="size-10 max-w-none rounded-full" src="/images/UserDefault.jpg" alt="User Photo" />
            </div>
            <div className="flex w-full flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h5 className="w-fit text-lg font-semibold text-gray-800 dark:text-gray-200">{author}</h5>
                    <div className="relative">
                        <div
                            onClick={toggleMenu}
                            className="flex size-8 cursor-pointer items-center justify-center rounded-full text-gray-400 duration-200 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-800"
                        >
                            <MoreIcon />
                        </div>
                        {visibleMenu && <BackdropMenu onClick={toggleMenu} />}
                        {visibleMenu && (
                            <Menu className="right-0 left-[unset] translate-y-1/2">
                                <MenuItem text="Copy link" icon={<LinkIcon />} onClick={copyHandler} />
                            </Menu>
                        )}
                    </div>
                </div>
                <Link to={`/post/${id}`}>
                    <p className="text-base font-medium text-gray-700 dark:text-gray-300">{content}</p>
                </Link>
            </div>
        </div>
    );
};
