import {configureStore} from '@reduxjs/toolkit';
import authSlice from "./slices/auth";
import authApi from "./services/auth";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export default store;