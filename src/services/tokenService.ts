import {ITokens} from "../interfaces/interfaces";

class TokenService {
    accessTokenKey = 'access-token';
    refreshTokenKey = 'refresh-token';

    getTokens(): ITokens | null {
        const accessTokenLocal = localStorage.getItem(this.accessTokenKey)
        const refreshTokenLocal = localStorage.getItem(this.accessTokenKey)

        if (accessTokenLocal && refreshTokenLocal) {
            return {
                accessToken: accessTokenLocal,
                refreshToken: refreshTokenLocal
            }
        } else {
            const accessTokenSession = sessionStorage.getItem(this.accessTokenKey)
            const refreshTokenSession = sessionStorage.getItem(this.refreshTokenKey)

            if (accessTokenSession && refreshTokenSession) {
                return {
                    accessToken: accessTokenSession,
                    refreshToken: refreshTokenSession
                }
            }
        }

        return null
    }

    setTokens(tokens: ITokens, remember: boolean = false): void {
        if (remember) {
            localStorage.setItem(this.accessTokenKey, tokens.accessToken)
            localStorage.setItem(this.refreshTokenKey, tokens.refreshToken)
        } else {
            sessionStorage.setItem(this.accessTokenKey, tokens.accessToken)
            sessionStorage.setItem(this.refreshTokenKey, tokens.refreshToken)
        }
    }
}

export default TokenService;