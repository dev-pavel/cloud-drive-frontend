import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITokens} from "../../interfaces/interfaces";
import TokenService from "../../services/tokenService";

const tokensService = new TokenService();

interface IAuthState {
    isAuth: boolean
    loading: boolean
    tokens: {
        accessToken: string | null
        refreshToken: string | null
    }
}

const authState: IAuthState = {
    isAuth: false,
    loading: true,
    tokens: {
        accessToken: null,
        refreshToken: null
    }
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        checkAuth(state) {
            const tokens = tokensService.getTokens();

            if (tokens) {
                state.isAuth = true;
                state.tokens = tokens;
            }

            state.loading = false;
        },
        setLoading(state, {payload}: PayloadAction<boolean>) {
            state.loading = payload
        },
        setTokens(state, {payload: {tokens, remember}}: PayloadAction<{ tokens: ITokens, remember: boolean }>) {
            tokensService.setTokens(tokens, remember);

            state.isAuth = true;
            state.tokens = tokens;
            state.loading = false;
        }
    }
})

export const {checkAuth, setLoading, setTokens} = AuthSlice.actions;
export default AuthSlice;