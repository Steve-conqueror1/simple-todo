import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const isLoggedIn = createSlice({
    name: 'isLoggedIn',
    initialState: false,
    reducers: {
        setIsLoggedIn: (_, {payload}: PayloadAction<boolean>) => payload,
    },
})

export const { setIsLoggedIn } = isLoggedIn.actions

export default isLoggedIn.reducer
