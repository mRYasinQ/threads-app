import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: Boolean(localStorage.getItem('userId')),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state, { payload }) => {
            state.isAuthenticated = payload;
        },
    },
});

export default authSlice;
export const { setIsAuthenticated } = authSlice.actions;
