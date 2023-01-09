import {configureStore} from "@reduxjs/toolkit";
import RootReducer from './slices'
export const store =  configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
