import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice"
import chatsReducer from "./slices/chatsSlices"

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('store', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('store');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const persistedStore = {
    ...loadFromLocalStorage()
}

const store = configureStore({
    reducer: {
        auth: authReducer,
        chats: chatsReducer
    },
    preloadedState: persistedStore
})

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store