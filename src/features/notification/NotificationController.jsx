import { useEffect } from 'react';
import { Outlet } from 'react-router';

import useNotif from '../../lib/hooks/useNotif';

import { Notification } from './Notification';

export const NotificationController = () => {
    const { isShowNotif, notifMessage, notifLocation, hideNotif } = useNotif();

    const closeNotifHandler = () => hideNotif();

    useEffect(() => {
        const timerId = setTimeout(() => closeNotifHandler(), 5000);
        return () => clearTimeout(timerId);
    });

    return (
        <>
            {isShowNotif && (
                <Notification onClick={closeNotifHandler} location={notifLocation} message={notifMessage} />
            )}
            <Outlet />
        </>
    );
};
