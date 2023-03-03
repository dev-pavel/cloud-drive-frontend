export interface ApiResponse<R = any, E = any> {
    success: boolean,
    result: R
    error: E
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IUser {
    email: string
    password: string
    firstName: string
    lastName: string
    registrationDate: Date
    memoryLimit: number
    usedMemory: number
    _id: string
}