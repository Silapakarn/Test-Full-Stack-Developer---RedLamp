import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/product.jsx'

export default configureStore({
    reducer: {
        user: userReducer
    },
})
