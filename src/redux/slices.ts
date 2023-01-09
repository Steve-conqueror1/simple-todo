import {combineReducers, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const isLoggedIn = createSlice({
    name: 'isLoggedIn',
    initialState: false,
    reducers: {
        setIsLoggedIn: (_, {payload}: PayloadAction<boolean>) => payload,
    },
})

export const todosUpdated = createSlice({
    name: 'storedTodos',
    initialState: false,
    reducers: {
        setTodosUpdated: (_, {payload}: PayloadAction<boolean>) => payload,
    },
})


export const { setIsLoggedIn } = isLoggedIn.actions
export const { setTodosUpdated } = todosUpdated.actions

export default combineReducers({
   isLoggedIn: isLoggedIn.reducer,
   todosUpdated: todosUpdated.reducer
})
