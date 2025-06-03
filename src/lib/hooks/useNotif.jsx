import { useSelector, useDispatch } from 'react-redux';

import { hideNotification, showNotification } from '../../features/notification/notificationSlice';

const useNotif = () => {
    const dispatch = useDispatch();
    const { visible, message, location } = useSelector((state) => state.notification);

    const showNotif = (message, location) => dispatch(showNotification({ message, location }));
    const hideNotif = () => dispatch(hideNotification());

    return {
        isShowNotif: visible,
        notifMessage: message,
        notifLocation: location,
        showNotif,
        hideNotif,
    };
};

export default useNotif;
