import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        theme: "light",
        user: null,
        token: null
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = state.theme === "light-theme" ? "dark-theme" : "light-theme"
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        }
    }
})

export const { setTheme, setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
