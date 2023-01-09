import {configureStore} from "@reduxjs/toolkit";
import logginReducer from './slices'
export const store =  configureStore({
    reducer: {
       isLoggedIn: logginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
