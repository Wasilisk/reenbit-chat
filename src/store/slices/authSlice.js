import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userInfo: {
            id: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
            userName: null,
            email: null,
            imageUrl: "http://www.rosglasrecovery.com/wp-content/uploads/2018/03/male.jpg"
        }
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.userInfo = {
                ...state.userInfo,
                ...action.payload,
            }
        },
        logout: (state) => {
            state.isAuth = false;
            state.userInfo = {
                ...state.userInfo,
                userName: null,
                email: null,
            }
        }
    },
})

export const selectIsAuth = (state) => state.auth.isAuth;
export const selectUserInfo = (state) => state.auth.userInfo;
export const selectUserId = (state) => state.auth.userInfo.id;

export const {login, logout} = authSlice.actions

export default authSlice.reducer