import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userInfo: {
            userName: null,
            email: null,
            imageUrl: null
        }
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.userInfo = {...state.userInfo, ...action.payload}
        },
        logout: (state) => {
            state.isAuth = false;
            state.userInfo = {
                userName: null,
                email: null,
                imageUrl: null
            }
        }
    },
})

export const selectIsAuth = (state) => state.auth.isAuth;

export const {login, logout} = authSlice.actions

export default authSlice.reducer