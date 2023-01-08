import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        token: null,
    },
    reducers: {
        Login: (state, action) => {
            state.currentUser = action.payload.currentUser;
            state.token = action.payload.token;

        },
        Logout: (state) => {
            state.currentUser = null;
            state.token = null;
        }
    },

});

export const { Login, Logout } = userSlice.actions;
export default userSlice.reducer;