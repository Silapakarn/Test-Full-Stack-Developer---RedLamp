import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        coffee: (state, action) => {
            state.user = action.payload;
        },
        tea: (state, action) => {
            state.user = action.payload;
        },
        soft_drink: (state, action) => {
            state.user = action.payload;
        },
    },
})

export const { coffee, tea, soft_drink } = product.actions;

export const selectUser = (state) => state.user.user;

export default product.reducer;