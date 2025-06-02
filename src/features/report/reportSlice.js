import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShowModal: false,
};

const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        showReportModal: (state) => {
            state.isShowModal = true;
        },
        closeReportModal: (state) => {
            state.isShowModal = false;
        },
    },
});

export default reportSlice;
export const { showReportModal, closeReportModal } = reportSlice.actions;
