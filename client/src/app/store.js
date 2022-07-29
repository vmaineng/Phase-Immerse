import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user";
import {userApi } from './services/userApi';

export const store = configureStore({
    reducer: {
        user: userReducer
    }, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            userApi.middleware
        )
    }
})

