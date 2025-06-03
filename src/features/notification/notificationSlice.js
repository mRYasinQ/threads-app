import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    visible: false,
    message: null,
    location: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification: (state, { payload: { message, location } }) => {
            state.visible = true;
            state.message = message;
            state.location = location;
        },
        hideNotification: () => initialState,
    },
});

export default notificationSlice;
export const { showNotification, hideNotification } = notificationSlice.actions;
